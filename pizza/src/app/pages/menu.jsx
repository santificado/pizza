import React, { useState } from 'react';
import styles from '../styles.module.css';

const pizzas = [
  { id: 1, name: 'Pizza de Queijo', price: 20, image: '/pizza-queijo.jpg' },
  { id: 2, name: 'Pizza de Pepperoni', price: 22, image: '/pizza-pepperoni.jpg' },
  { id: 3, name: 'Pizza de Frango com Catupiry', price: 24, image: '/pizza-frango-catupiry.jpg' },
  { id: 4, name: 'Pizza de Calabresa', price: 21, image: '/pizza-calabresa.jpg' },
  { id: 5, name: 'Pizza Margherita', price: 23, image: '/pizza-margherita.jpg' },
  { id: 6, name: 'Pizza Vegetariana', price: 25, image: '/pizza-vegetariana.jpg' },
  { id: 7, name: 'Pizza Quatro Queijos', price: 26, image: '/pizza-quatro-queijos.jpg' },
  { id: 8, name: 'Pizza de Camarão', price: 28, image: '/pizza-camarao.jpg' },
  { id: 9, name: 'Pizza de Chocolate', price: 18, image: '/pizza-chocolate.jpg' },
];

const Menu = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (pizza) => {
    const existingPizza = cart.find((item) => item.id === pizza.id);
    if (existingPizza) {
      const updatedCart = cart.map((item) =>
        item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }
    setTotalPrice(totalPrice + pizza.price);
  };

  const removeFromCart = (pizzaId) => {
    const pizzaToRemove = cart.find((item) => item.id === pizzaId);
    if (pizzaToRemove) {
      if (pizzaToRemove.quantity > 1) {
        const updatedCart = cart.map((item) =>
          item.id === pizzaId ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCart(updatedCart);
      } else {
        const updatedCart = cart.filter((item) => item.id !== pizzaId);
        setCart(updatedCart);
      }
      setTotalPrice(totalPrice - pizzaToRemove.price);
    }
  };

  return (
    <div>
      <h1>Menu de Pizzas</h1>
      <div className={styles.menu-container}>
        {pizzas.map((pizza) => (
          <div key={pizza.id} className={styles.pizza-card}>
            <img src={pizza.image} alt={pizza.name} />
            <h2>{pizza.name}</h2>
            <p>Preço: R${pizza.price.toFixed(2)}</p>
            <div className={styles.quantity-controls}>
              <button onClick={() => removeFromCart(pizza.id)}>-</button>
              <span>{(cart.find((item) => item.id === pizza.id) || {}).quantity || 0}</span>
              <button onClick={() => addToCart(pizza)}>+</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.cart-container}>
        <h2>Carrinho</h2>
        <div className={styles.cart-items}>
          {cart.map((item) => (
            <div key={item.id} className={styles.cart-item}>
              <p>{item.name}</p>
              <p>Quantidade: {item.quantity}</p>
            </div>
          ))}
        </div>
        <div className={styles.cart-total}>
          <p>Total: R${totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;

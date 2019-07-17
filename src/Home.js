import React from 'react';

import { addDishes, moveSlides } from './actions'
import './App.css';

const ListaDishes = ({ image, name, price, index, moveSlides }) => {
  return (
    <li className="products">
      <a className="view-details" onClick={moveSlides} href='#carousel'>
        <img className="main-image" src={image} alt="images" />
        <strong>{name}</strong>
        <span className="price">
          <span>$</span>
          <span>{price}</span>
        </span>
      </a>
      <button className="add-to-cart" onClick={() => addDishes(index)}>Add to cart</button>
    </li>
  );
}
const Home = ({ dishes }) => {

  const listaComponent = dishes.map((item, index) => {
    return <ListaDishes
      key={index}
      image={item.image}
      name={item.name}
      price={item.price}
      index={index}
      moveSlides={() => moveSlides(index)}
    />
  })
  return (<section id="content">
    <div>
      <ul className="k-widget k-listview">
        {listaComponent}
      </ul>
    </div>
  </section>)
}

export default Home;

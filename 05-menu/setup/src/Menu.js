import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article className='menu-item' key={id}>
            <img className='photo' src={img} alt={title} />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <div className='price'>${price.toFixed()}</div>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;

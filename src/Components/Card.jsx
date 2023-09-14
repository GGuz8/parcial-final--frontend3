import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Card({  item }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoriteCards = JSON.parse(localStorage.getItem('favoriteCards')) || [];
    const isCardFavorite = favoriteCards.some(card => card.id === item.id);
    
    setIsFavorite(isCardFavorite);
  
  }, []);

  const handleToggleFavorite = () => {
    const favoriteCards = JSON.parse(localStorage.getItem('favoriteCards')) || [];
    
    if (isFavorite) {
      
      const updatedFavoriteCards = favoriteCards.filter(card => card.id !== item.id);
      localStorage.setItem('favoriteCards', JSON.stringify(updatedFavoriteCards));
    } else {
      
      favoriteCards.push({ ...item });
      localStorage.setItem('favoriteCards', JSON.stringify(favoriteCards));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card-dentista">
      <Link to={`/detail/${item.id}`} >
        <div className="card-dentista-child">

          <h1> {item.name} </h1>
          <h2> {item.username} </h2>
          <h3> {item.id} </h3>
        </div>

      </Link>
      <button onClick={handleToggleFavorite} className="favButton">
      {isFavorite ? 'Eliminar de Favoritos' : 'Marcar como Favorito'}
      </button>
    </div>
  );
}

export default Card;
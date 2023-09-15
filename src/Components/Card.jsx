import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useGlobalContext} from "../context"

function Card({ item }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const {theme} = useGlobalContext()

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
      <Link style={{background: theme.background, color: theme.font}} to={`/detail/${item.id}`} >
        <div className="card-dentista-child">
          <img src="../public/images/doctor.jpg" alt="" />

          <div className='card-child1'>
            <h2> {item.name} </h2>
            <h3> {item.username} </h3>
          </div>
        </div>

      </Link>
      <button onClick={handleToggleFavorite} className="favButton">
        {isFavorite ? 'Eliminar de Favoritos' : 'Marcar como Favorito'}
      </button>
    </div>
  );
}

export default Card;
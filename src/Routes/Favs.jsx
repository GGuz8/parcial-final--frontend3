import React, { useEffect, useState } from 'react';

function FavoriteCards() {
  const [favoriteCards, setFavoriteCards] = useState([]);

  useEffect(() => {
    const tarjetasFavoritasGuardadas = JSON.parse(localStorage.getItem('favoriteCards')) || [];
    setFavoriteCards(tarjetasFavoritasGuardadas);
  }, []);

  return (
    <div>
      <h1>Tarjetas Favoritas</h1>
      <div className="favorite-cards">
        {favoriteCards.map((card, index) => (
          <div key={index} className="favorite-card">
            <h2>{card.name}</h2>
            <p>{card.username}</p>
            <p>{card.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteCards;
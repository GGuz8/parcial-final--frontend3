import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';

function FavoriteCards() {
  const [favoriteCards, setFavoriteCards] = useState([]);

  useEffect(() => {
    const tarjetasFavoritasGuardadas = JSON.parse(localStorage.getItem('favoriteCards')) || [];
    setFavoriteCards(tarjetasFavoritasGuardadas);
  }, []);

  return (
    <main className=''>
      <h1>Tarjetas Favoritas</h1>
      <div className="card-grid">
        {favoriteCards.map((card, index) => (
          <Card
            key={index}
            item={card}

          />
        ))}
      </div>
    </main>
  );
}

export default FavoriteCards;
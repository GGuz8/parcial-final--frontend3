import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';

function FavoriteCards() {
  const [favoriteCards, setFavoriteCards] = useState([]);
  const [onChangeButton, setOnChangeButton] = useState(false)

  const handleChangeButton = () => {
    onChangeButton ? setOnChangeButton(false) : setOnChangeButton(true)
  }


  useEffect(() => {
    const tarjetasFavoritasGuardadas = JSON.parse(localStorage.getItem('favoriteCards')) || [];
    setFavoriteCards(tarjetasFavoritasGuardadas);

    

  }, [onChangeButton]);

  return (
    <main className=''>
      <h1>Tarjetas Favoritas</h1>
      <div className="card-grid">
        {favoriteCards.map((card, index) => (
          <Card
            key={index}
            item={card}
            changeButton={handleChangeButton}

          />
        ))}
      </div>
    </main>
  );
}

export default FavoriteCards;
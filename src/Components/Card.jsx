import React from "react";
import { Link } from "react-router-dom";


const Card = ({ item }) => {

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (

    <Link to={`/detail/${item.id}`} >
      <div className="card-dentista">
        {/* En cada card deberan mostrar en name - username y el id */}
        <h1> {item.name} </h1>
        <h2> {item.username} </h2>
        <h3> {item.id} </h3>


        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}



        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
      </div>
    </Link>
  );
};

export default Card;

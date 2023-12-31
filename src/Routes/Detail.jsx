import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Detail = () => {


  const { id } = useParams()
  const navigate = useNavigate()

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchData() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar datos desde la API:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <main>
      <div className='detail-container'>
        {loading ? <h1>Loading...</h1> :

          <div className='card'>
            <div className='detailDentist'>
              <h2>Detail Dentist id </h2>
            </div>
            <h3>{data.name}</h3>
            <p>{data.email}</p>
            <p>{data.phone}</p>
            <p>{data.website}</p>
          </div>

        }

      </div>

    </main>
  )
}

export default Detail
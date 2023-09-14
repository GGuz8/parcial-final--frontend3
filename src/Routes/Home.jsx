import React from 'react'
import Card from '../Components/Card'
import { useGlobalContext } from '../context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { data, loading } = useGlobalContext()

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>

        {loading ? <h1>Loading...</h1> : data.map((item) => {
          return (
            <Card key={item.id} item={item} />
            
          )
        }
        )}
        
      </div>
    </main>
  )
}

export default Home
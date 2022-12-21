import { NextPage } from 'next'
import { useContext, useEffect } from 'react'

import { PokemonContext } from 'contexts/pokemon'

import styles from 'styles/pages/Home.module.css'

import Card from 'components/Card'

const Home: NextPage = () => {
  const { pokemons, loadPokemons } = useContext(PokemonContext)


  useEffect(() => {
    const sync = () => {
      loadPokemons()
    }

    sync()
  }, [])

  return (
    <div className={styles.container}>
      {pokemons.map(pokemon => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default Home
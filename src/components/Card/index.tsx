import Image from 'next/image'
import React from 'react'

import styles from 'styles/components/Card.module.css'

import { TPokemon } from 'domain/models/pokemon'

const imagePokemonById = ({ src }: { src: string } ) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${src}.png`
}

interface ICardProps {
  pokemon: TPokemon
}

export default function Card({ pokemon }: ICardProps) {

  const [type] = pokemon.types
  return (
    <div className={`${styles.container}`} style={{ background: `var(--type-${type.name.toLowerCase()})`}}>
      <header>
        <div className={styles.header}>
          <p>{pokemon.name}</p>
          <span>#{pokemon.pokedex_number}</span>
        </div>
        <div className={styles.subHeader}>
          <div className={styles.types}>
            {pokemon.types.map(type => (
              <div key={type.name} className={styles.type}>{type.name}</div>
            ))}
          </div>
          <span>{pokemon.genera}</span>
        </div>
      </header>
      <main>
        <div className="container-image">
          <Image className={styles.imagePokemon} src={`${pokemon.id}`} loader={imagePokemonById} alt="Charizard" width={'100'} height={'100'}/>
        </div>
      </main>
    </div>
  )
}

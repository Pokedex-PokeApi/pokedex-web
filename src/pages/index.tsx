/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Image from "next/image";
import { useCallback, useContext, useEffect, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import { PokemonContext } from "contexts/pokemon";

import styles from "styles/pages/Home.module.css";

import Card from "components/Card";
import ScrollTop from "components/ScrollTop";

const Home: NextPage = () => {
  const { pokemons, loadPokemons } = useContext(PokemonContext);
  const [limit] = useState(15);
  const [offset, setOffet] = useState(0);

  useEffect(() => {
    const sync = () => {
      loadPokemons(limit, offset);
    };

    sync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, offset]);

  const nextPage = useCallback(() => {
    setOffet(offset + limit);
  }, [limit, offset]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img className={styles.logo} src="/logo.png" alt="Logo Pokemon" />
        <InfiniteScroll
          className={styles.containerScroll}
          dataLength={pokemons.length}
          next={nextPage}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {pokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </InfiniteScroll>
      </div>
      <ScrollTop />
    </div>
  );
};

export default Home;

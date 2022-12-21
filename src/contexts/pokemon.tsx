import { TPokemon } from "domain/models/pokemon";
import { createContext, useState, ReactNode, useEffect, useCallback } from "react";

import { api } from "service/api";


interface IPokemonProvider {
  children: ReactNode
}

interface PokemonContext {
  loading: boolean;
  pokemons: TPokemon[];
  loadPokemons(limit?: number, offset?: number): Promise<void>;
}

const PokemonContext = createContext<PokemonContext>({} as PokemonContext);

const PokemonProvider = ({ children }: IPokemonProvider) => {
  const [pokemons, setPokemons] = useState<TPokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadPokemons = useCallback(async (limit: number = 151, offset: number = 0) => {
    try {
      setLoading(true);
      const response = await api().get<TPokemon[]>("/pokemons", { params: { limit, offset }});
      if(response.status != 200)
        throw response

      setPokemons(response.data)
    } catch (error: any) {
      new Error(error)
    }finally{
      setLoading(false);
    }
  },[])
  
  return (
    <PokemonContext.Provider value={{
      loading,
      pokemons,
      loadPokemons
    }}>
      {children}
    </PokemonContext.Provider>
  )
}


export { PokemonProvider, PokemonContext };
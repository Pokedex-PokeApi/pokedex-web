import React from 'react';
import { PokemonProvider } from 'contexts/pokemon';


const AppProvider: React.FC<any> = ({ children } : any) => {
    return (
        <PokemonProvider>
            {children}
        </PokemonProvider>
    )
};

export default AppProvider;
export type TPokemon = {
    ['id']: number;
    ['name']: string;
    ['description']: string;
    ['image']: string;
    ['genera']: string;
    ['pokedex_number']: string;
    ['base_experience']: number;
    ['weight']: number;
    ['height']: number;
    ['gender_rate']: number
    ['types']: TPokemonType[];
    ['stats']: TPokemonStat[];
    ['abilites']: TPokemonAbility[];
    ['egg_groups']: TPokemonEggGroup[];
}

export type TPokemonType = {
    ['name']: string;
    ['url']: string;
}

export type TPokemonStat = {
    ['name']: string;
    ['url']: string;
    ['base_stat']: number;
}

export type TPokemonAbility = {
    ['name']: string;
    ['url']: string;
}

export type TPokemonEggGroup = {
    ['name']: string;
    ['url']: string;
}
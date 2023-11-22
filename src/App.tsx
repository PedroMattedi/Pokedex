import { useCallback, useEffect, useState } from "react";
import { Pokecard } from "./Components/Pokecard/pokecard";
import * as S from "./Style";
import axios from "axios";

interface Pokemon {
  id: number;
  name: string;
  type: string;
  image: string;
}

function App() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const loadData = useCallback(async () => {
    const fetchedPokemonList: Pokemon[] = [];

    for (let i = 1; i <= 151; i++) {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${i}`
        );

        const pokemon: Pokemon = {
          id: response.data.id,
          name: response.data.name,
          type: response.data.types[0].type.name,
          image: response.data.sprites.other.dream_world.front_default,
        };

        fetchedPokemonList.push(pokemon);
      } catch (error) {
        console.log(error);
      }
      setPokemonList(fetchedPokemonList);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <S.Container>
      <S.Header>
        <S.Title>Pokedéx</S.Title>
      </S.Header>
      <S.Content>
        {pokemonList?.map((item) => (
          <Pokecard
            key={item.name}
            name={item.name.toUpperCase()}
            imgUrl={item.image}
            category={item.type.toLowerCase()}
          ></Pokecard>
        ))}
      </S.Content>
    </S.Container>
  );
}

export default App;

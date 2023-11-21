import { useCallback, useEffect, useState } from "react";
import { Pokecard } from "./Components/Pokecard/pokecard";
import * as S from "./Style";
import axios from "axios";

interface PokemonProps {
  name: string;
}

function App() {
  const [pokemonList, setPokemonList] = useState<PokemonProps[]>();

  const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

  const loadData = useCallback(async () => {
    try {
      const response = await axios.get(apiUrl);
      setPokemonList(response?.data.results);
    } catch (error) {
      console.error("Erro na solicitação: ", error);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <S.Container>
      <S.Header>
        <S.Title>Pokedéx Básica</S.Title>
      </S.Header>
      <S.Content>
        {pokemonList?.map((item, index) => (
          <Pokecard
            key={item.name}
            name={item.name.toUpperCase()}
            imgUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
              index + 1
            }.svg`}
          ></Pokecard>
        ))}
      </S.Content>
    </S.Container>
  );
}

export default App;

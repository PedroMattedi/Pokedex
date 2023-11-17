import { Pokecard } from "./Components/Pokecard/Pokecard";
import * as S from "./Style";

function App() {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Teste Global Academy - Globalsys</S.Title>
      </S.Header>
      <S.Content>
        <Pokecard></Pokecard>
      </S.Content>
    </S.Container>
  );
}

export default App;

import * as S from "./style";

interface PokecardProps {
  name: string;
}

export const Pokecard: React.FC<PokecardProps> = ({ name }) => {
  return (
    <S.Container>
      <S.ImgContainer></S.ImgContainer>
      <S.TextContainer>
        <S.Title>{name}</S.Title>
      </S.TextContainer>
    </S.Container>
  );
};

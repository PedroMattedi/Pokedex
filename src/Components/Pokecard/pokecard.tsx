import * as S from "./style";

interface PokecardProps {
  name: string;
  type?: string;
}

export const Pokecard: React.FC<PokecardProps> = ({ name, type }) => {
  return (
    <S.Container>
      <S.ImgContainer></S.ImgContainer>
      <S.TextContainer>
        <S.Title>{name}</S.Title>
        <S.Type>{type}</S.Type>
      </S.TextContainer>
    </S.Container>
  );
};

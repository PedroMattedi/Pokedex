import * as S from "./style";

interface PokecardProps {
  type?: string;
  evolution?: number;
}

export const Pokecard: React.FC<PokecardProps> = () => {
  return (
    <S.Container>
      <S.ImgContainer></S.ImgContainer>
      <S.TextContainer></S.TextContainer>
    </S.Container>
  );
};

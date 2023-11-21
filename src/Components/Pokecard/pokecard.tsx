import * as S from "./style";

interface PokecardProps {
  name: string;
  imgUrl: string;
}

export const Pokecard: React.FC<PokecardProps> = ({ name, imgUrl }) => {
  return (
    <S.Container>
      <S.ImgContainer>
        <S.Picture src={imgUrl} />
      </S.ImgContainer>
      <S.TextContainer>
        <S.Title>{name}</S.Title>
      </S.TextContainer>
    </S.Container>
  );
};

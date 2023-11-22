import * as S from "./style";

export interface PokecardProps {
  name?: string;
  imgUrl?: string;
  category?: string;
}

export const Pokecard: React.FC<PokecardProps> = ({
  name,
  imgUrl,
  category,
}) => {
  const getBackgroundColor = (category: string | undefined): string => {
    switch (category) {
      case "fire":
        return "#FDDFDF";
      case "grass":
        return "#DEFDE0";
      case "electric":
        return "#FCF7DE";
      case "water":
        return "#DEF3FD";
      case "ground":
        return "#f4e7da";
      case "rock":
        return "#d5d5d4";
      case "fairy":
        return "#fceaff";
      case "poison":
        return "#f1a5f8";
      case "bug":
        return "#f8d5a3";
      case "dragon":
        return "#97b3e6";
      case "psychic":
        return "#eaeda1";
      case "flying":
        return "#F5F5F5";
      case "fighting":
        return "#E6E0D4";
      case "normal":
        return "#F5F5F5";
      case "ice":
        return "#86d1ff";
      case "ghost":
        return "#805e83";
      default:
        return "white";
    }
  };

  const backgroundColor = getBackgroundColor(category);
  return (
    <S.Container style={{ backgroundColor }}>
      <S.ImgContainer>
        <S.Picture src={imgUrl} />
      </S.ImgContainer>
      <S.TextContainer>
        <S.Title>{name}</S.Title>
        <S.Type>{category}</S.Type>
      </S.TextContainer>
    </S.Container>
  );
};

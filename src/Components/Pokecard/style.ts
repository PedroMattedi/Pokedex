import styled from "styled-components";

export const Container = styled.div`
  color: #213547;
  max-height: 300px;
  max-width: 350px;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
`;

export const ImgContainer = styled.div`
  background-color: white;
  height: 280px;
  width: 280px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  padding: 10px;
  height: 100px;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 35px;
  font-family: sans-serif;
`;

export const Type = styled.p`
  font-size: 24px;
  font-family: sans-serif;
`;

export const Picture = styled.img<{ rotation: number }>`
  transition: transform 0.5s ease;
  transform: rotate(${(props) => props.rotation}deg);
  height: 150px;
  width: 150px;
`;

export const BackflipButton = styled.button`
  height: 100px;
  width: 200px;
  border-radius: 14px;
  color: #213547;
  font-weight: bolder;
  cursor: pointer;
  border: 1px solid;
`;

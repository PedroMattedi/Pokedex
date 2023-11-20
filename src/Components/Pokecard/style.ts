import styled from "styled-components";

export const Container = styled.div`
  background-color: red;
  max-height: 450px;
  max-width: 300px;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
`;

export const ImgContainer = styled.div`
  background-color: white;
  height: 280px;
  width: 280px;
  border-radius: 14px;
`;

export const TextContainer = styled.div`
  padding: 10px;
  height: 250px;
  width: 280px;
`;

export const Title = styled.h1`
  font-size: 35px;
  font-family: sans-serif;
`;

export const Type = styled.p`
  font-size: 24px;
  font-family: sans-serif;
`;

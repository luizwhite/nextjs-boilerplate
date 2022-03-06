import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: 3rem;

  background-color: #06092b;

  text-align: center;
  color: #fff;
`;

export const Logo = styled.img`
  width: 25rem;
  height: auto;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

export const Illustration = styled.img`
  width: min(30rem, 100%);
  height: auto;
  margin-top: 3rem;
`;

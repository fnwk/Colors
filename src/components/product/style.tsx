import styled from 'styled-components';

export const Row = styled.tr`
  display: flex;
  align-items: center;
  height: 3rem;
  padding: 0 5%;
  margin-block: 15px;
  border-radius: 10px;
  border-collapse: collapse;
  background-color: ${(props) => props.color};
  box-shadow: 0px 0px 15px ${(props) => props.color};
`;

export const Data = styled.td`
  width: 30%;

  &.id {
    width: auto;
    margin-left: auto;
  }
`;

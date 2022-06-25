import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0 10px;
  width: 100%;
`;

export const HeaderRow = styled.tr`
  display: flex;
  align-items: center;
  padding: 0 5%;
`;

export const TableHeader = styled.th`
  width: 30%;
  font-size: 16px;
  text-align: left;

  &.id {
    width: auto;
    margin-left: auto;
  }
`;

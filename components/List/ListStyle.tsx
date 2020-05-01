import styled from 'styled-components';

export const Collection = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3rem 0;
  margin-bottom: 2rem;
`;

export const Card = styled.li`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  border-radius: 5px;
  padding: 1rem 1rem;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

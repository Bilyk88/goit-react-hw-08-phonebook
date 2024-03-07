import styled from 'styled-components';

export const ContactStyled = styled.li`
  width: 300px;
  display: flex;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  margin-left: auto;
  border: none;
  border-radius: 5px;
  padding: 2px 6px;
  background-color: #eb9da7;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e84a5f;
  }
`;

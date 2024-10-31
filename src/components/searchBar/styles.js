import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  padding: 12px 16px;
  margin: 16px auto;
  width: 100%;
  max-width: 768px;
  box-sizing: border-box;
  transition: all 0.2s ease;

  &:focus-within {
    background-color: #eef0f2;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
`;

export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
  color: #666;
  flex-shrink: 0;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: none;
  font-size: 15px;
  color: #1a1a1a;
  outline: none;
  padding: 0;
  width: 100%;
  height: 24px;
  font-family: inherit;

  &::placeholder {
    color: #666;
    font-size: 15px;
  }
`;

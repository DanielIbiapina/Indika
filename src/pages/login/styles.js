import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: #f5f5f5;
  width: 100vw;
`;

export const LoginCard = styled.div`
  background: white;
  padding: 32px;
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 8px;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
  gap: 12px;

  svg {
    color: #666;
    font-size: 20px;
  }
`;

export const Input = styled.input`
  border: none;
  background: none;
  flex: 1;
  font-size: 14px;
  color: #1a1a1a;

  &::placeholder {
    color: #666;
  }

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: #0066ff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 14px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #0052cc;
  }
`;

export const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
  color: #1a1a1a;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f5f5f5;
  }

  svg {
    font-size: 20px;
  }
`;

export const Divider = styled.div`
  text-align: center;
  position: relative;
  color: #666;
  font-size: 14px;
  margin: 8px 0;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 45%;
    height: 1px;
    background-color: #ddd;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

export const ToggleText = styled.p`
  text-align: center;
  color: #0066ff;
  font-size: 14px;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

export const ForgotPassword = styled.p`
  text-align: right;
  color: #0066ff;
  font-size: 14px;
  cursor: pointer;
  margin-top: -8px;

  &:hover {
    text-decoration: underline;
  }
`;

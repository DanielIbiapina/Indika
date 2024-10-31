import React, { useState } from "react";
import {
  IoLogoGoogle,
  IoLogoFacebook,
  IoMail,
  IoLockClosed,
} from "react-icons/io5";
import {
  Container,
  LoginCard,
  Title,
  Subtitle,
  Form,
  Input,
  InputWrapper,
  Button,
  SocialButton,
  Divider,
  ToggleText,
  ForgotPassword,
} from "./styles";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container>
      <LoginCard>
        <Title>Bem-vindo(a)!</Title>
        <Subtitle>
          {isLogin
            ? "Entre para encontrar os melhores serviços"
            : "Crie sua conta e encontre os melhores serviços"}
        </Subtitle>

        <Form>
          {!isLogin && (
            <InputWrapper>
              <IoMail />
              <Input type="text" placeholder="Nome completo" />
            </InputWrapper>
          )}

          <InputWrapper>
            <IoMail />
            <Input type="email" placeholder="E-mail" />
          </InputWrapper>

          <InputWrapper>
            <IoLockClosed />
            <Input type="password" placeholder="Senha" />
          </InputWrapper>

          {isLogin && <ForgotPassword>Esqueceu sua senha?</ForgotPassword>}

          <Button>{isLogin ? "Entrar" : "Criar conta"}</Button>

          <Divider>ou continue com</Divider>

          <SocialButton>
            <IoLogoGoogle /> Google
          </SocialButton>

          <SocialButton>
            <IoLogoFacebook /> Facebook
          </SocialButton>

          <ToggleText onClick={() => setIsLogin(!isLogin)}>
            {isLogin
              ? "Ainda não tem conta? Cadastre-se"
              : "Já tem uma conta? Entre"}
          </ToggleText>
        </Form>
      </LoginCard>
    </Container>
  );
};

export default Login;

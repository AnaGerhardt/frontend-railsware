import LoginImage from "../assets/images/Login.svg";
import {
  Layout,
  FlexWrapper,
  InputEmail,
  InputPassword,
  WrapperSideText,
  DefaultButton,
  FacebookButton,
  GoogleButton,
  theme,
} from "../assets/styles/global";

const LoginPage = () => {
  return (
    <Layout>
      <img src={LoginImage} alt="Login illustration" />
      <h1>Welcome Back!</h1>
      <InputEmail type="email" autoFocus />
      <WrapperSideText>
        <InputPassword type="password" />
        <span>Forgot Password?</span>
      </WrapperSideText>
      <DefaultButton>Log in</DefaultButton>
      <span style={{ color: theme.darkGreyColor }}>Or connect with social</span>
      <FlexWrapper>
        <FacebookButton>Facebook</FacebookButton>
        <GoogleButton>Google</GoogleButton>
      </FlexWrapper>
    </Layout>
  );
};

export default LoginPage;

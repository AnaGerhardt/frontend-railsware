import LoginImage from "../../assets/images/Login.svg";
import {
  FlexWrapper,
  InputEmail,
  InputPassword,
  WrapperSideText,
  DefaultButton,
  FacebookButton,
  GoogleButton,
  BottomText,
} from "../../assets/styles/global";
import { IntroLayout } from "../../components";

const LoginPage = () => {
  return (
    <IntroLayout title="Welcome Back!" image={LoginImage}>
      <>
        <InputEmail type="email" autoFocus />
        <WrapperSideText>
          <InputPassword type="password" />
          <span>Forgot Password?</span>
        </WrapperSideText>
        <DefaultButton>Log in</DefaultButton>
        <BottomText>Or connect with social</BottomText>
        <FlexWrapper>
          <FacebookButton>Facebook</FacebookButton>
          <GoogleButton>Google</GoogleButton>
        </FlexWrapper>
      </>
    </IntroLayout>
  );
};

export default LoginPage;

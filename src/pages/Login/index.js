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
        <InputEmail type="email" placeholder="example@email.com" autoFocus />
        <WrapperSideText>
          <InputPassword type="password" placeholder="password" />
          <span id="blue">Forgot Password?</span>
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

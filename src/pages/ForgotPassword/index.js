import ForgotPasswordImage from "../../assets/images/Password.svg";
import {
  InputEmail,
  DefaultButton,
  BottomText,
  theme,
} from "../../assets/styles/global";
import { IntroLayout } from "../../components";

const ForgotPasswordPage = () => {
  return (
    <IntroLayout title="Forgot Password" image={ForgotPasswordImage}>
      <>
        <InputEmail type="email" autoFocus />
        <DefaultButton>Reset</DefaultButton>
        <BottomText style={{ marginTop: "15vh" }}>
          Already have an account?
          <span
            style={{
              color: theme.defaultAppColor,
              cursor: "pointer",
              marginLeft: "0.4rem",
              whiteSpace: "nowrap",
            }}
          >
            Login here
          </span>
        </BottomText>
      </>
    </IntroLayout>
  );
};

export default ForgotPasswordPage;

import styled, { createGlobalStyle } from "styled-components";
import UserIcon from "../icons/User.svg";
import LockIcon from "../icons/Lock.svg";

export const theme = {
  defaultButtonTextColor: "#fff",
  defaultAppColor: "#1a4f8b",
  lightGreyColor: "lightgrey",
  mediumGreyColor: "#aeaeae",
  darkGreyColor: "gray",
  upgradeBgColor: "#bf1541",
  facebookBgColor: "#385c8e",
  googleBgColor: "#f14436",
};

export default createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
}
body, html {
  background: #fff;
  font-family: 'Arial';
  height: 100%;
  width: 100%;
}
h1,h2,h3,h4,h5,p,span {
  cursor: default;
}
input {
  font-size: 0.95rem;
  height: 2.8rem;
  width: 100%;
  padding: 0 1rem;
  border-radius: 5px;
  border: 2px solid ${theme.lightGreyColor};
  color: ${theme.darkGreyColor};
  :hover, :focus {
    color: ${theme.defaultAppColor};
    border: 2px solid ${theme.defaultAppColor};
    ::placeholder {
      color: ${theme.defaultAppColor};
    }
  }
}
`;

export const WrapperIntroLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 3vh;
  min-width: 250px;
  max-width: 400px;
  width: 20%;
  min-height: 100vh;
  margin: 0 auto;
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const IconInput = styled.input`
  background-size: 1.3rem;
  padding-left: 12%;
  background-repeat: no-repeat;
  background-position: 3% center;
`;

export const InputEmail = styled(IconInput)`
  background-image: url(${UserIcon});
`;

export const InputPassword = styled(IconInput)`
  background-image: url(${LockIcon});
`;

export const WrapperSideText = styled.span`
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: 0.4rem;
  span {
    cursor: pointer;
  }
  #blue {
    color: ${theme.defaultAppColor};
    font-size: 0.9rem;
  }
  #grey {
    color: ${theme.darkGreyColor};
    font-size: 0.8rem;
  }
`;

export const BottomText = styled.span`
  color: ${theme.mediumGreyColor};
`;

const Button = styled.button`
  text-transform: uppercase;
  width: 100%;
  cursor: pointer;
  padding: 0.9rem;
  border-radius: 0.4rem;
  border: none;
  :hover {
    filter: brightness(0.85);
  }
`;

export const DefaultButton = styled(Button)`
  color: ${theme.defaultButtonTextColor};
  background: ${theme.defaultAppColor};
`;

export const UpgradeButton = styled(Button)`
  color: ${theme.defaultButtonTextColor};
  background: ${theme.upgradeBgColor};
`;

export const FacebookButton = styled(Button)`
  text-transform: none;
  color: ${theme.defaultButtonTextColor};
  background: ${theme.facebookBgColor};
`;

export const GoogleButton = styled(Button)`
  text-transform: none;
  color: ${theme.defaultButtonTextColor};
  background: ${theme.googleBgColor};
`;

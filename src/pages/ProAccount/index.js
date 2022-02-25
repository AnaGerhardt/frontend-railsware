import ProAccountImage from "../../assets/images/Pro.svg";
import {
  FlexWrapper,
  UpgradeButton,
  WrapperSideText,
} from "../../assets/styles/global";
import { IntroLayout } from "../../components";

const ProAccountPage = () => {
  return (
    <IntroLayout title="Get Pro Account" image={ProAccountImage} reverse>
      <>
        <input type="text" placeholder="Card Number" autoFocus />
        <FlexWrapper>
          <input type="text" placeholder="MM/YY" />
          <WrapperSideText>
            <input type="text" placeholder="CVV" />
            <span id="grey">What's this?</span>
          </WrapperSideText>
        </FlexWrapper>
        <input type="text" placeholder="ZIP/Postal Code" />
        <UpgradeButton>Upgrade</UpgradeButton>
      </>
    </IntroLayout>
  );
};

export default ProAccountPage;

import { WrapperIntroLayout } from "../../assets/styles/global";

export const IntroLayout = ({ image, title, children }) => {
  return (
    <WrapperIntroLayout>
      <img src={image} alt="Page main illustration" />
      <h1>{title}</h1>
      {children}
    </WrapperIntroLayout>
  );
};

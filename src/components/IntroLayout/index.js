import { WrapperIntroLayout } from "../../assets/styles/global";

export const IntroLayout = ({ image, title, reverse, children }) => {
  return (
    <WrapperIntroLayout>
      {reverse ? (
        <>
          <h1>{title}</h1>
          <img src={image} alt="Page main illustration" />
        </>
      ) : (
        <>
          <img src={image} alt="Page main illustration" />
          <h1>{title}</h1>
        </>
      )}
      {children}
    </WrapperIntroLayout>
  );
};

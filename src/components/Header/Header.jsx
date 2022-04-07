import "./Header.scss";

const Header = (props) => {
  const { headingText, subheadingText, isLeftAlign, isBackgroundSecondary } =
    props;
  let headerClassName = "header";
  if (isLeftAlign) headerClassName += " header--left-align";
  if (isBackgroundSecondary) headerClassName += " header--background-secondary";
  return (
    <div className={headerClassName}>
      <h1 className="header__heading"> {headingText} </h1>
      <h2 className="header__subheading">{subheadingText}</h2>
    </div>
  );
};

export default Header;

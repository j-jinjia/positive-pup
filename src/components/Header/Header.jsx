import "./Header.scss";

const Header = (props) => {
  const { headingText, subheadingText, isLeftAlign } = props;
  let headerClassName = "header";
  if (isLeftAlign) headerClassName += " header--left-align";

  return (
    <div className={headerClassName}>
      <h1 className="header__heading"> {headingText} </h1>
      <h2 className="header__subheading">{subheadingText}</h2>
    </div>
  );
};

export default Header;

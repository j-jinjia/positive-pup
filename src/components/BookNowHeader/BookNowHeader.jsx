import "./BookNowHeader.scss";
import Header from "../Header/Header";

const BookNowHeader = ({ headingText, subheadingText }) => {
  return (
    <div className="book-now-header">
      <Header headingText={headingText} subheadingText={subheadingText} />
    </div>
  );
};

export default BookNowHeader;

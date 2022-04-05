import Layout from "../../components/Layout/Layout";
import BookNowHeader from "../../components/BookNowHeader/BookNowHeader";

const BookNow = () => {
  return (
    <Layout>
      <BookNowHeader
        headingText={"Book Now"}
        subheadingText={"Secure your place on one of our services"}
      />
    </Layout>
  );
};

export default BookNow;

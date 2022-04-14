import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/Header";

const BookNow = () => {
  return (
    <Layout>
      <Header
        headingText={"Book Now"}
        subheadingText={"Secure your place on one of our services"}
        isLeftAlign={false}
        isBookNowHeader
      />
    </Layout>
  );
};

export default BookNow;

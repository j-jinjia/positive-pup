import ContactHeader from "../../components/ContactHeader/ContactHeader";
import Layout from "../../components/Layout/Layout";

const GetInTouch = () => {
  return (
    <Layout>
      <ContactHeader
        headingText={"Contact Us"}
        subheadingText={"I'd love to hear from you!"}
        isLeftAlign={true}
      />
    </Layout>
  );
};

export default GetInTouch;

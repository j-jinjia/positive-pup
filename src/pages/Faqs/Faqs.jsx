import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";

const Faqs = () => {
  return (
    <Layout>
      <Header
        isLeftAlign={false}
        headingText={"Frequently Asked Questions"}
        subheadingText={"Some of your most common questions"}
        isAlternative={true}
      />
    </Layout>
  );
};

export default Faqs;

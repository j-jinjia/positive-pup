import FAQsGetInTouch from "../../components/FAQsGetInTouch/FAQsGetInTouch";
import Dropdown from "../../components/Dropdown/Dropdown";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import faqsData from "../../assets/mockData/faqsData";

const Faqs = () => {
  const faqSection = faqsData.map((data) => (
    <Dropdown key={data.id} question={data.question} answer={data.answer} />
  ));

  return (
    <Layout>
      <Header
        isLeftAlign={false}
        headingText={"Frequently Asked Questions"}
        subheadingText={"Some of your most common questions"}
        isAlternative={true}
      />
      {faqSection}
      <FAQsGetInTouch />
    </Layout>
  );
};

export default Faqs;

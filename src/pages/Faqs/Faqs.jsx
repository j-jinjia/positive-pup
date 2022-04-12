import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import { useState } from "react";
import FAQsGetInTouch from "../../components/FAQsGetInTouch/FAQsGetInTouch";
import Dropdown from "../../components/Dropdown/Dropdown";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import faqsData from "../../assets/mockData/faqsData";
import "./Faq.scss";

const Faqs = () => {
  const [faqType, setFaqType] = useState("General /");
  const filterOptions = [
    "General /",
    "Payments /",
    "Training Methods /",
    "Packages /",
    "Group Classes",
  ];

  const filteredQuestions = faqsData.filter((question) => {
    if (faqType === "General /") return true;
    return question.type === faqType;
  });

  const handleClick = (event) => {
    if (filterOptions.includes(event.target.value)) {
      setFaqType(event.target.value);
    }
  };

  const faqSection = filteredQuestions.map((data) => (
    <Dropdown key={data.id} question={data.question} answer={data.answer} />
  ));

  return (
    <Layout>
      <h1>FAQs</h1>

      <Header
        isLeftAlign={false}
        headingText={"Frequently Asked Questions"}
        subheadingText={"Some of your most common questions"}
        isAlternative={true}
      />
      <CategoryFilter
        courseType={faqType}
        handleClick={handleClick}
        filterOptions={filterOptions}
        isAlternativeHighlight
      />
      <div className="faq-section">{faqSection}</div>
      <FAQsGetInTouch />
    </Layout>
  );
};

export default Faqs;

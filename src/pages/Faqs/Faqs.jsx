import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import { useState } from "react/cjs/react.production.min";
import Dropdown from "../../components/Dropdown/Dropdown";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import faqsData from "../../assets/mockData/faqsData";

const Faqs = () => {
  const [faqType, setFaqType] = useState("General");
  const filterOptions = [
    "General",
    "Payments",
    "Training Methods",
    "Packages",
    "Group Classes",
  ];

  // no useffect, re render on usestate change

  const filteredQuestions = faqsData.filter((question) => {
    if (faqType === "General") return true;
    return question.type === faqType;
  });

  const handleClick = (event) => {
    if (filterOptions.includes(event.target.value)) {
      setFaqType(event.target.value);
    }
  };

  //pass in filtered data.
  const faqSection = filteredQuestions.map((data) => (
    <Dropdown key={data.id} question={data.question} answer={data.answer} />
  ));

  return (
    <Layout>
      <h1>FAQs</h1>
      <CategoryFilter
        courseType={faqType}
        handleClick={handleClick}
        filterOptions={filterOptions}
      />

      <Header
        isLeftAlign={false}
        headingText={"Frequently Asked Questions"}
        subheadingText={"Some of your most common questions"}
        isAlternative={true}
      />
      {faqSection}
    </Layout>
  );
};

export default Faqs;

import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
// import { useEffect, useState } from "react/cjs/react.production.min";
import Dropdown from "../../components/Dropdown/Dropdown";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import faqsData from "../../assets/mockData/faqsData";

const Faqs = () => {
  // const [faqType, setFaqType] = useState("General");
  const filterOptions = [
    "General",
    "Payments ",
    "Training Methods",
    "Packages ",
    "Group Classes",
  ];

  const handleClick = () => {};
  const faqSection = faqsData.map((data) => (
    <Dropdown key={data.id} question={data.question} answer={data.answer} />
  ));

  return (
    <Layout>
      <h1>FAQs</h1>
      <CategoryFilter
        courseType={""}
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

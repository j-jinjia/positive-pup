import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
// import { useEffect, useState } from "react/cjs/react.production.min";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";

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
    </Layout>
  );
};

export default Faqs;

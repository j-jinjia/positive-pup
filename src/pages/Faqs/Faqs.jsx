import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
// import { useEffect, useState } from "react/cjs/react.production.min";
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
    </Layout>
  );
};

export default Faqs;

import image0 from "../mockData/images/image.png";
import image1 from "../mockData/images/image1.png";
import image2 from "../mockData/images/image2.png";
import image3 from "../mockData/images/image3.png";

const courses = [
  {
    image: image0,
    courseTypeSingular: "Group Class",
    courseTypePlural: "Group Classes",
    courseHeading: "Little Stars Course",
    labelsArray: ["In Person", "10 weeks+"],
    suitableAges: "infant",
    duration: "medium"
  },
  {
    image: image1,
    courseTypeSingular: "Group Class",
    courseTypePlural: "Group Classes",
    courseHeading: "Rising Stars Course",
    labelsArray: ["In Person", "16 weeks+"],
    suitableAges: "junior",
    duration: "long"
  },
  {
    image: image2,
    courseTypeSingular: "Bespoke Package",
    courseTypePlural: "Bespoke Packages",
    courseHeading: "1:1 Personalised Training",
    labelsArray: ["In Person", "Intensive"],
    suitableAges: "all",
    duration: "short"
  },
  {
    image: image0,
    courseTypeSingular: "Group Class",
    courseTypePlural: "Group Classes",
    courseHeading: "Little Stars Course",
    labelsArray: ["Online"],
    suitableAges: "infant",
    duration: "medium"
  },

  {
    image: image1,
    courseTypeSingular: "Online Course",
    courseTypePlural: "Online Courses",
    courseHeading: "Chaos to Calm",
    labelsArray: ["Online", "Flexible"],
    suitableAges: "mature",
    duration: "long"
  },

  {
    image: image3,
    courseTypeSingular: "Online Course",
    courseTypePlural: "Online Courses",
    courseHeading: "Rapid Recall",
    labelsArray: ["Online"],
    suitableAges: "all",
    duration: "short"
  },
];

export default courses;

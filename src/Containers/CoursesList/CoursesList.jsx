import CourseCard from "../../components/CourseCard/CourseCard"
import "./CoursesList.scss"

export const CoursesList = ({courseData}) => {
    const cardsListJSX = courseData.map((card) => {
        return <CourseCard key={card.courseHeading} image={card.image} courseType={card.courseType} courseHeading={card.courseHeading} labelsArray={card.labelsArray} />
    })

    return (
    <div className="courses-list">{cardsListJSX}</div>
  )
}

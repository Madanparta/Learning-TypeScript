import CourseGoal from "./CourseGoal";
import {type CourseGoal as CGoal } from "../App.tsx";

type CourseGoalList = {
    goals: CGoal[];
    onDeleteList : (id:number)=>void;
}

const CourseGoalLIst = ({goals,onDeleteList}:CourseGoalList) => { 
  return (
    <>
      {
          goals.map((goal) => (
            <li key={goal.id}>
              <CourseGoal onDelete={onDeleteList} id={goal.id} title={goal.title} >
                <p>{goal.description}</p>
              </CourseGoal>
            </li>
          ))
        }
    </>
  )
}

export default CourseGoalLIst

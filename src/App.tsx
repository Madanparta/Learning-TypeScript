import Header from "./components/Header.tsx";
import goalsImg from './assets/react.svg';
import { useState } from "react";
import CourseGoalLIst from "./components/CourseGoalLIst.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal = {
  title: string;
  description: string;
  id: number
}
const App = () => {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const AddGoals = (goal:string,summary:string) => {
    setGoals((preGoals) => {
      const newGoals: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      }
      return [...preGoals, newGoals]
    });
  };

  const deleteHandleGoals = (id:number) => {
    setGoals((preGoals)=>preGoals.filter((goal)=>goal.id !== id));
  }
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Cours Goals</h1>
      </Header>

      {/* <button onClick={AddGoals}>Add Goals</button> */}
      <NewGoal onAddGoal={AddGoals}/>

      <ul>
        <CourseGoalLIst onDeleteList={deleteHandleGoals} goals={goals}/>
      </ul>

    </main>
  )
}

export default App

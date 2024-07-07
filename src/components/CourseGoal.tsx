import {type FC, type PropsWithChildren,type ReactNode } from "react";

// interface CourseGoalProps  {
//     title:string;
//     children:ReactNode;
// }

//or

// const CourseGoal = ({title,children}:CourseGoalProps) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{children}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   )
// }

// type CourseGoalProps = PropsWithChildren<{title:string}>

// const CourseGoal = ({title,children}:CourseGoalProps) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{children}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   )
// }


//or

type CourseGoalProps = PropsWithChildren<{
  id:number;
  title:string;
  onDelete:(id:number)=>void;
}>

const CourseGoal: FC<CourseGoalProps> = ({id,title,children,onDelete}) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <>{children}</>
      </div>
      <button onClick={()=>onDelete(id)}>Delete</button>
    </article>
  )
}

export default CourseGoal

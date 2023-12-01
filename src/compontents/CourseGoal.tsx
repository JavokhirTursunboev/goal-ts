import { PropsWithChildren } from "react";

// interface CourseGoalType {
//   title: string;
//   children: ReactNode;
// }

type CourseGoalType = PropsWithChildren<{ title: string; id: number; onDelete: (id: number) => void }>;

function CourseGoal({ title, children, id, onDelete }: CourseGoalType) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

export default CourseGoal;

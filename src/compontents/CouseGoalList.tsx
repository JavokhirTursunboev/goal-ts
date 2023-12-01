import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as CGoal } from "../App.tsx";
type CourseGoalProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};
const CouseGoalList = ({ goals, onDeleteGoal }: CourseGoalProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CouseGoalList;

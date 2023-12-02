import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as CGoal } from "../App.tsx";
import InfoBox from "./InfoBox.tsx";
import { type ReactNode } from "react";
type CourseGoalProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};
const CouseGoalList = ({ goals, onDeleteGoal }: CourseGoalProps) => {
  // = = = = =  Hint part = = = = = //
  if (goals.length === 0) {
    return <InfoBox mode="hint">You have no course goals yet. Start adding some!</InfoBox>;
  }

  // ! ========== warning part =========//
  let warn: ReactNode;
  if (goals.length >= 4) {
    warn = (
      <InfoBox severity="medium" mode="warning">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }
  return (
    <>
      {warn}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CouseGoalList;

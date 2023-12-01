import Header from "./compontents/Header";
import goalsImg from "../src/assets/goals.jpg";
import { useState } from "react";
import CouseGoalList from "./compontents/CouseGoalList.tsx";
import NewGoal from "./compontents/NewGoal.tsx";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
  onDeleteGoal: (id: number) => void;
};
const App = () => {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handeDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoal) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoal, newGoal];
    });
  }
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goalts" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CouseGoalList goals={goals} onDeleteGoal={handeDeleteGoal} />
    </main>
  );
};

export default App;

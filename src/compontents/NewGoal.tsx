import { FormEvent, useRef } from "react";

type NewGoalType = {
  onAddGoal: (goal: string, summary: string) => void;
};

const NewGoal = ({ onAddGoal }: NewGoalType) => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const enterGoal = goal.current!.value;
    const enterSummary = summary.current!.value;
    e.currentTarget.reset();
    onAddGoal(enterGoal, enterSummary);
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input type="text " id="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input type="text" id="summary" ref={summary} />
      </p>

      <p>
        <button>Add goal</button>
      </p>
    </form>
  );
};

export default NewGoal;

const NewGoal = () => {
  return (
    <form>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input type="text " id="goal" />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input type="text" id="summary" />
      </p>

      <p>
        <button>Add goal</button>
      </p>
    </form>
  );
};

export default NewGoal;

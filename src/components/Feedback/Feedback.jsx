const Feedback = ({ feedback, total, positiveFeedback }) => {
  return (
    <>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positiveFeedback} % </p>
    </>
  );
};

export default Feedback;

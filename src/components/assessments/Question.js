import React from "react";
import PropTypes from "prop-types";
import { QuestionHeader } from "./QuestionHeader";
import { QuestionInfo } from "./QuestionInfo";
import { useSelector } from "react-redux";

export const Question = (props) => {
  const { currentQuestionIndex } = useSelector((state) => state.assessments);

  return (
    <section className="bg-white rounded-lg">
      <QuestionHeader {...props} />
      <QuestionInfo question={props.questions[currentQuestionIndex]} questionsLength={props.questions.length} />
    </section>
  );
};

Question.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  questions: PropTypes.array.isRequired,
};

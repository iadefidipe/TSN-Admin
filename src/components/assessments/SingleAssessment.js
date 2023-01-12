import React from "react";
import PropTypes from "prop-types";
import { SingleAssessmentHeader } from "./SingleAssessmentHeader";
import { RelatedAssessments } from "./RelatedAssessments";
import { StartAssessment } from "./StartAssessment";

export const SingleAssessment = (props) => {
  return (
    <section className="w-full bg-white p-4 lg:p-8 rounded-lg">
      <SingleAssessmentHeader {...props} />
      {props.score ? (
        <RelatedAssessments {...props} />
      ) : (
        <StartAssessment {...props} />
      )}
    </section>
  );
};

SingleAssessment.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  amountTaken: PropTypes.number.isRequired,
  instructions: PropTypes.array.isRequired,
  score: PropTypes.number,
};

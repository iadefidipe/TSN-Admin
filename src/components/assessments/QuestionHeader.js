import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { useSelector } from "react-redux";

export const QuestionHeader = ({ title, image, questions }) => {
  const { currentQuestionIndex } = useSelector((state) => state.assessments);

  return (
    <>
      <div className="rounded-t-lg bg-[#FF5B49] pt-3 lg:pt-7 pb-2 lg:pb-4 px-5 lg:px-10 flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 relative rounded overflow-hidden">
            <Image src={image} width={56} height={56} />
          </div>
          <div>
            <h2 className="text-white text-xl lg:text-2xl outfit-sb">{title}</h2>
            <p className="text-white text-lg lg:text-xl">
              {currentQuestionIndex + 1} of {questions.length} Questions
            </p>
          </div>
        </div>
        <h4 className="font-extrabold text-white text-2xl lg:text-[32px]">1:30</h4>
      </div>
      <div
        className={`h-2 lg:h-3 bg-[#1872F2] rounded-bl-lg duration-200 ${
          currentQuestionIndex + 1 === questions.length && "rounded-br-lg"
        }`}
        style={{
          width: `${(100 / questions.length) * (currentQuestionIndex + 1)}%`,
        }}
      />
    </>
  );
};

QuestionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  questions: PropTypes.array.isRequired,
};

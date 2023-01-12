import { assessmentsData } from "@/shared/data/assessments";
import React from "react";
import { GridCard } from "./GridCard";
import PropTypes from "prop-types";

export const RelatedAssessments = ({ slug }) => {
  const data = assessmentsData.filter((item) => item.slug !== slug && !item.score).slice(0, 4);
  return (
    <div>
      <h2 className="text-2xl tracking-tighter text-[#353535] mb-4">
        Related Assessment
      </h2>
      <div className="grid gap-3 lg:gap-6 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((item) => {
          return <GridCard {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

RelatedAssessments.propTypes = {
  slug: PropTypes.string.isRequired,
};

import { cardData } from "@/shared/data/assessments";
import React from "react";
import { InfoCard } from "./InfoCard";
import { SkillCard } from "./SkillCard";

export const CardsHeader = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-3 lg:gap-6">
      {cardData.map((card) => {
        if (card.skillCard) {
          return (
            <SkillCard
              {...card}
              handleClick={() =>{}}
              key={card.id}
            />
          );
        }
        return <InfoCard key={card.id} {...card}/>;
      })}
    </div>
  );
};

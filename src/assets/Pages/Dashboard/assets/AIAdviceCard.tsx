import { useState } from "react";

import { BaseCard } from "./BaseCard";
import { ActivityCards } from "./ActivityCards";

export const AIAdviceCard = () => {
  const [open, setOpen] = useState(true);

  const handlePlusClick = () => {
    setOpen(!open);
  };

  return (
    <BaseCard
      text="AI advice"
      subtext="try these activities to improve sleep!"
      plusButton={false}
      onPlusClick={handlePlusClick}
    >
      <div className="flex flex-row justify-center items-center py-4 space-x-2">
        <ActivityCards
          activity="swimming"
          description="take a couple laps in the pool to cool off!"
          timeBound={["4", "10"]}
        />
        <ActivityCards
          activity="meditation"
          description="take a couple hours before bed to calm your mind!"
          timeBound={["3", "5"]}
        />
        <ActivityCards
          activity="journaling"
          description="you seem stressed, take a moment to write your thoughts!"
          timeBound={["3", "5"]}
        />
      </div>
    </BaseCard>
  );
};

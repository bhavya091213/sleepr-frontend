import { Textbox } from "./Textbox";
import { BaseCard } from "./BaseCard";

export const FeedbackCard = () => {
  return (
    <BaseCard
      text="feedback"
      subtext="how is your sleep improving? what can we do to help?"
      plusButton={false}
    >
      <Textbox />
    </BaseCard>
  );
};

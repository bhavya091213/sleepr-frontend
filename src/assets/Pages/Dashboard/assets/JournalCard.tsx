import { Textbox } from "./Textbox";
import { BaseCard } from "./BaseCard";

export const JournalCard = () => {
  return (
    <BaseCard
      text="journal entries"
      subtext="write down how you feel today and get advice on habits!"
      plusButton={false}
    >
      <Textbox />
    </BaseCard>
  );
};

import { SleepStatsCard } from "./assets/SleepStatsCard";
import { JournalCard } from "./assets/JournalCard";
import { FeedbackCard } from "./assets/FeedbackCard";
import { AIAdviceCard } from "./assets/AIAdviceCard";

export const Dashboard = () => {
  return (
    <>
      <div className="min-h-fit">
        <header className="bg-darkest shadow-sm shadow-secondary flex justify-center items-center">
          <div className="md:px-5 pt-8 pb-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              hope you had good sleep!
            </h1>
          </div>
        </header>
        <main className="flex-row">
          <div className="px-5 bg-darkest min-h-screen w-screen">
            <div className="mx-auto md:p-8 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-20">
              <SleepStatsCard />
              <JournalCard />
            </div>
            <div className="mx-auto md:p-8 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-20">
              <FeedbackCard />
              <AIAdviceCard />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

// You can remove the longerCard component since we're standardizing the card sizes

/* 
TODO 
1. Sleep Hours
- Add logging funciton
    - Add plus sign
- add time based traversal
    - Weekly for the month
- Expanded view
    - increased calendar view

TODO
2. Journal Entries
- Add expanded view
    - do it thru modal
    - allows you to see weekly stuff
- Question mark for help
    - Add question mark in corner
    - create modal with questions
- HOW TO IMPLEMENT:
    - Weekly feed text into NLP, derive a sentiment score 1-10 of mood etc.
    - From there prompt LLM to give activities
    - FORMAT:
        - Activity
        - When to do it (before sleep or in the morning or throughout day)
        - Short description

TODO
3. Activity Advice Card
    - Add advice based on sleep hours
    - Include time on how long it takes per activity
    - use ai, get pics from google i guess?

TODO
4. Feedback Card
    - Add feedback form
    - Copy the journal entries form
    - Change the textbox component to pass a faded text prop that has the text preview
    - give three activities

TODO
5. Link to DB
    - Link to db in order once db is set up
*/

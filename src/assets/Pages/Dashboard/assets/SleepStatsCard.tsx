import { useState } from "react";
import { BarGraph } from "./BarChart";
import { BaseCard } from "./BaseCard";

export const SleepStatsCard = () => {
  const [open, setOpen] = useState(true);
  const dayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [hours, setHours] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [selectedDay, setSelectedDay] = useState("Select Day");
  const [hoursSlept, setHoursSlept] = useState("");
  const [showWarning, setWarning] = useState(false);

  const handleSleepUpdate = () => {
    if (selectedDay !== "Select Day" && hoursSlept) {
      // TODO: Handle sleep data update to graph
      //   will involve working with date time week etc. do date time later focus on just getting the data to update for the current week

      //determine day index
      let index = 0;
      for (let i = 0; i < dayArray.length; i++) {
        if (selectedDay.slice(0, 3) === dayArray[i]) {
          index = i;
        }
      }
      // update hours state
      const newHours = [...hours];
      newHours[index] = hoursSlept as unknown as number;
      setHours(newHours);

      setSelectedDay("Select Day");
      setHoursSlept("");
      setOpen(true);
      setWarning(false);
    } else {
      setWarning(true);
    }
  };

  const handlePlusClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <BaseCard
        text="sleep stats"
        subtext="here's how you have been sleeping this week!"
        plusButton={true}
        onPlusClick={handlePlusClick}
      >
        {open ? (
          <BarGraph hoursData={hours} />
        ) : (
          <div className="flex flex-col p-10 mx-auto space-y-8 justify-center items-center overflow-hidden w-[80%]">
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className="block appearance-none w-full rounded-2xl text-primary bg-darkest border hover:border-primary px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Select Day</option>
              {[
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ].map((day) => (
                <option key={day}>{day}</option>
              ))}
            </select>
            <input
              type="number"
              step="0.1"
              min="0"
              max="22"
              value={hoursSlept}
              onChange={(e) => setHoursSlept(e.target.value)}
              placeholder="Hours Slept (Number with decimal)"
              className="block appearance-none w-full rounded-2xl text-primary bg-darkest border hover:border-primary px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              onClick={handleSleepUpdate}
              className="bg-tertiary hover:bg-secondary hover:shadow-sm hover:shadow-secondary rounded-3xl px-6 py-3 font-bold text-primary transition-all"
            >
              submit
            </button>
            {showWarning && (
              <h1 className="font-light text-secondary">
                "Error: Try Again (data unfilled)"
              </h1>
            )}
          </div>
        )}
      </BaseCard>
    </>
  );
};

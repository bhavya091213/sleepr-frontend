interface ActivityProps {
  activity: string;
  description: string;
  timeBound: string[];
}

export const ActivityCards = ({
  activity,
  description,
  timeBound,
}: ActivityProps) => {
  return (
    <div className="min-w-[150px] max-w-[30%] min-h-[250px] max-h-[fit] bg-tertiary hover:bg-secondary hover:shadow-tertiary hover:drop-shadow-3xl rounded-2xl drop-shadow-2xl">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-extrabold text-darkest text-lg mt-2 py-2">
          {activity}
        </h1>
        <h1 className="font-bold px-4 text-darkest"> {description}</h1>
        <h1 className="font-medium px-2 py-3 text-darkest">
          time (min): {timeBound[0]} - {timeBound[1]}
        </h1>
      </div>
    </div>
  );
};

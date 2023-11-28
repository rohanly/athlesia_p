import { Button } from "./ui/button";

const runsList = [
  {
    run: 0,
    type: "normal",
    label: "0",
  },
  {
    run: 1,
    type: "normal",
    label: "1",
  },
  {
    run: 2,
    type: "normal",
    label: "2",
  },
  {
    run: 3,
    type: "normal",
    label: "3",
  },
  {
    run: 4,
    type: "normal",
    label: "4",
  },
  {
    run: 6,
    type: "normal",
    label: "6",
  },
];

const RunsButton = () => {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-6 justify-between">
      {runsList.map((r, i) => (
        <Button size="lg" key={i}>
          {r.label}
        </Button>
      ))}
    </div>
  );
};

export default RunsButton;

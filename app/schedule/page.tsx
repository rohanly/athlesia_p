"use client";
import scheduleData from "@/data.json";
import Matchcard from "@/components/matchcard/Matchcard";
import { useEffect, useState } from "react";
import getAllMatches from "@/lib/getAllMatches";
import Banner from "@/public/images/Banner.png";
import moment from "moment";

interface schedule {
  team1: {
    teamName: string;
  };
  team2: {
    teamName: string;
  };
  game: string;
  winningTeam: string;
  winningStatus: string;
  matchDate: string;
  matchStatus: string;
}

export default function Schedule() {
  const dates: string[] = ["07-12-2023", "21-12-2023", "04-01-2024", "28-11-2023", "29-11-2023"];
  const [matches, setMatches] = useState<schedule[]>([]);

  const formattedDate = (inputDate: string) => {
    return moment(inputDate, "DD-MM-YYYY").format("Do, MMM YYYY");
  };

  useEffect(() => {
    async function getMatches() {
      const matches = await getAllMatches();
      console.log(matches);
      setMatches(matches);
    }
    getMatches();
  }, []);

  return (
    <div
      className="relative min-h-screen pt-[80px] lg:pt-[150px]"
      style={{
        backgroundImage: `url(${Banner.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="py-4 px-4 lg:px-20 flex flex-col gap-4">
        <h1 className="text-justify pb-2 md:text-center text-[#fff] text-xl md:text-[40px] font-semibold leading-8">
          Schedule
        </h1>
        <div className="flex flex-col gap-4 md:gap-14">
          {dates?.map((date, index) => (
            <div className="card flex flex-col gap-4" key={index}>
              <h2 className="text-[#F7F7F7] text-sm md:text-2xl font-semibold py-2">
                {formattedDate(date)}
              </h2>
              {matches
                .filter((match) => match.matchDate === date)
                ?.map((item) => (
                  <Matchcard key={item.matchDate} matchData={item} />
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

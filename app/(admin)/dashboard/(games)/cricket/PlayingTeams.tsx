"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { ArrowRightLeftIcon } from "lucide-react";

export default function PlayingTeams() {
  const [battingTeam, setBattingTeam] = useState();
  const [bowlingTeam, setBowlingTeam] = useState();

  const handleClick = () => {
    console.log("first");
  };
  return (
    <div>
      <div className="flex gap-4 shadow rounded p-4">
        <div className="font-semibold text-xl flex-1">
          <span className="mr-1">Batting: </span>
          <span>RED</span>
        </div>
        <div className="flex justify-center">
          <Button size="icon" onClick={handleClick}>
            <ArrowRightLeftIcon />
          </Button>
        </div>
        <div className="font-semibold text-xl flex-1">
          <span className="font-semibold mr-1 ">Balling: </span>
          <span>GREEN</span>
        </div>
      </div>
    </div>
  );
}

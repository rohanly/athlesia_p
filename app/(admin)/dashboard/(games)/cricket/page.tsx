"use client";
import RunsButton from "@/components/runs-container";
import { Button } from "@/components/ui/button";
import React from "react";
import PlayingTeams from "./PlayingTeams";
import ScoreCard from "./ScoreCard";
import WicketPopup from "./WicketPopup";
import NoBallPopup from "./NoBallPopup";
import BattingPanel from "./BattingPanel";
import BowlingPanel from "./BowlingPanel";

export default function CricketPage() {
  return (
    <div className="min-h-screen">
      <div className="w-full max-w-lg mx-auto space-y-4 px-4 py-10 bg-white/10 backdrop-blur-sm">
        <h1 className="font-semibold text-4xl text-center">Cricket</h1>
        <PlayingTeams />
        <ScoreCard />
        <RunsButton />
        <Button className="w-full" size="lg" variant="outline">
          Wide Ball
        </Button>
        <WicketPopup />
        <NoBallPopup />
        <BattingPanel />
        <BowlingPanel />
      </div>
    </div>
  );
}

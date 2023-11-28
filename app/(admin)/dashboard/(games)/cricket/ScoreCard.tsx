"use client";
import React from "react";

export default function ScoreCard() {
  return (
    <div className="flex justify-between shadow rounded p-4">
      <p className="font-semibold text-xl">
        <span className="mr-2">Wickets</span>
        <span>0</span>
      </p>
      <p className="font-semibold text-xl">
        <span className="font-semibold mr-2 ">Overs</span>
        <span>0.1</span>
      </p>
    </div>
  );
}

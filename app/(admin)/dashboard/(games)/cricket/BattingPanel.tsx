"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { ComboboxDemo } from "@/components/ui/combobox";
import { ArrowRightLeftIcon } from "lucide-react";

export default function BattingPanel() {
  return (
    <div className="space-y-2 border-t-2 pt-4">
      <h4 className="font-semibold text-xl">Batting Panel</h4>
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-medium">Striker</p>
          <ComboboxDemo />
        </div>
        <div className="w-full flex justify-center">
          <Button size="icon">
            <ArrowRightLeftIcon />
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium">Non-striker</p>
          <ComboboxDemo />
        </div>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import { ComboboxDemo } from "@/components/ui/combobox";

export default function BowlingPanel() {
  return (
    <div className="space-y-2 border-t-2 pt-4">
      <h4 className="font-semibold text-xl">Balling Panel</h4>
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-medium">Baller </p>
          <ComboboxDemo />
        </div>
      </div>
    </div>
  );
}

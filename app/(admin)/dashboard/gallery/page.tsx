"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { upload } from "@/lib/utils";
import axios from "axios";
import { useState } from "react";

export default function GalleryPage() {
  const { toast } = useToast();

  const [img, setImage] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [year, setYear] = useState<string>("");

  async function handleSubmit(e: any) {
    try {
      e.preventDefault();

      toast({
        variant: "default",
        title: "Please wait until the Image is uploaded.",
      });

      const url = await upload(img);

      if (!url) return;

      const meta = { img: url, title: text, year: year };

      await axios.post("/api/gallery/add-image", {
        ...meta,
      });

      toast({
        variant: "success",
        title: "Success! Image added to gallery.",
      });
    } catch (error) {
      console.log("GALLERY_ERROR", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    } finally {
      setText("");
      setYear("");
    }
  }

  const handleImageChange = (e: any) => {
    const file = e.target.files;
    setImage(file[0]);
  };

  const handleTextChange = (e: any) => {
    const text = e.target.value;
    setText(text);
  };

  const handleYearChange = (e: any) => {
    const year = e.target.value;
    setYear(year);
  };

  return (
    <div className="min-h-screen">
      <div className="w-full max-w-lg mx-auto space-y-4 px-4 py-10 bg-white/10 backdrop-blur-sm">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <Input
            placeholder="Enter image text"
            type="text"
            value={text}
            onChange={(e) => handleTextChange(e)}
          />
          <Input
            placeholder="Enter image year"
            type="text"
            value={year}
            onChange={(e) => handleYearChange(e)}
          />
          <Input type="file" onChange={(e) => handleImageChange(e)} />
          <Button size="icon" className="w-full">
            Add to gallery
          </Button>
        </form>
      </div>
    </div>
  );
}

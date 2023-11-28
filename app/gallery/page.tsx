"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Masonry from "@mui/lab/Masonry";
import GalleryItem from "@/components/GalleryImage";
import axios from "@/lib/axios";

interface Data {
  img?: string;
  title?: string | undefined;
}

export default function GalleryPage() {
  const years = ["2024", "2023", "2022", "2020"];
  const [selectedYear, setSelectedYear] = useState<string>("2024");
  const [galleryData, setGalleryData] = useState<Data[]>([]);

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `/api/gallery/getGalleryImagesByYear?year=${selectedYear}`
        );

        setGalleryData(data);
      } catch (error) {
        console.log("Error Fetching data: ", error);
      }
    };

    if (selectedYear) {
      fetchData();
    }
  }, [selectedYear]);

  return (
    <div className="bg-[#111] min-h-[100dvh]">
      <div className="h-[76px]"></div>
      <div className="px-4 md:px-10 lg:px-20 flex flex-col gap-6 md:gap-16">
        <div className="py-4 flex items-center gap-1 md:gap-3">
          <Link href="" className="text-[#fff] text-xs md:text-lg font-semibold">
            Home
          </Link>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 md:w-6 md:h-6"
          >
            <path d="M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z" fill="white" />
          </svg>
          <Link href="" className="text-[#fff] text-xs md:text-lg font-semibold">
            Gallery
          </Link>
        </div>

        <div className="gallery-container flex flex-col gap-6 md:gap-8 lg:gap-10">
          <div className="btn-div w-full flex gap-2 lg:gap-10 overflow-x-auto hide-scrollbar">
            {years.map((year) => {
              return (
                <div
                  key={year}
                  className={`${
                    selectedYear === year
                      ? "text-[#fff] border-b-2 lg:border-b-4 border-[#fff]"
                      : "text-[#878787]"
                  } px-2 py-1 lg:px-8 lg:py-2 text-lg font-semibold lg:text-[32px] cursor-pointer`}
                  onClick={() => handleYearChange(year)}
                >
                  Athlesia’{year.toString().substring(2)}
                </div>
              );
            })}
          </div>
        </div>

        <div className="gallery overflow-visible">
          {galleryData?.length ? (
            <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 3 }} spacing={{ xs: 2, sm: 2, md: 4 }}>
              {galleryData.map((item, index) => (
                <GalleryItem imageData={item} key={index} />
              ))}
            </Masonry>
          ) : (
            <div className="flex justify-center mt-[100px]">
              <span className="text-white">No Data</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

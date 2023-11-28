"use client";

import React from "react";
import { useState, useEffect } from "react";
import HeroBanner from "@/public/images/HeroBanner.png";
import greenCarromChar from "@/public/images/greenCarromChar.png";
import blueCharHero from "@/public/images/blueCharHero.png";
import redCharBatter from "@/public/images/redCharbatter.png";
import redCharBall from "@/public/images/redCharBall.png";
import greenCharBatminton from "@/public/images/greenCharBatminton.png";
import Image from "next/image";
import blue_team_logo from "@/public/images/blue_team_logo.png";
import red_team_logo from "@/public/images/red_team_logo.svg";
import green_team_logo from "@/public/images/green_team_logo.png";
import Top_Standing_Ribbon from "@/public/images/Top_Standing_Ribbon.png";
import topStandingBackground from "@/public/images/topStandingBackground.jpg";
import Lottie from "react-lottie-player";
import banner from "@/public/assets/Website Characters.json";
import axios from "@/lib/axios";
import bronzeGem from "@/public/assets/Bronze Gemstone.json";
import silverGem from "@/public/assets/Silver Gemstone.json";
import goldGem from "@/public/assets/Gold Gemstone.json";
import Link from "next/link";
import moment from "moment";

export default function HomePage() {
  const imagesArr = [greenCarromChar, blueCharHero, redCharBatter, redCharBall, greenCharBatminton];

  // hero section carousal index
  const [currentImage, setCurrentImage] = useState(0);

  // images
  const [homeGallery, sethomeGallery] = useState<any[]>([]);

  //upcomming matches
  const [homeSchedule, setHomeSchedule] = useState<any[]>([]);

  //formated date
  const [formatedDateToStr, setFormatedDateToStr] = useState("");

  //stop banner lottie
  const [lottieState, setLottieState] = useState(false);

  //latest matches
  const [latestMatches, setLatestMatches] = useState<any[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentImage === imagesArr.length - 1) {
        setCurrentImage(0);
      } else {
        setCurrentImage(currentImage + 1);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [currentImage]);

  useEffect(() => {
    const imageGallery = async () => {
      const data = await axios.get(`/api/gallery/images`);
      sethomeGallery(data.data);
    };
    imageGallery();

    const upComming = async () => {
      const data = await axios.get(`/api/scheduleRoutes/match-schedule`);
      // dummyArr.forEach((eachEle) => data.data.push(eachEle)); //remove later

      // fetching next thursday date starts
      const todaysDate = new Date();
      const nextThursday = new Date(todaysDate);

      let currentDay = todaysDate.getDay();

      let daysForNextThursDay = 4 - currentDay;

      if (daysForNextThursDay <= 0) {
        daysForNextThursDay = daysForNextThursDay + 7;
      }

      nextThursday.setDate(todaysDate.getDate() + daysForNextThursDay);

      let thursdayDateFormatted = nextThursday.toISOString().slice(0, 10);

      let formatedToAPIDate = thursdayDateFormatted.split("-").reverse().join("-");

      setFormatedDateToStr(moment(thursdayDateFormatted).format("ddd, Do MMMM YYYY"));

      const matchesonThursday = data.data.filter(
        (eachEle: any) => eachEle.matchDate === formatedToAPIDate
      ); // filtering the matches on upcomming thursdays

      // fetching next thursday date ends

      setHomeSchedule(matchesonThursday);
      latestMatchFunc(data.data);
    };
    upComming();

    const latestMatchFunc = (data: any) => {
      // console.log(data);
      const todayDate = moment();
      const todayDayNumber = todayDate.day();
      const daysToLastThursday = (todayDayNumber + 7 - 4) % 7;
      const lastThursday = todayDate.subtract(daysToLastThursday, "days");
      const latestMatchesArr = data.filter(
        (eachEle: any) => eachEle.matchDate === lastThursday.format("DD-MM-YYYY")
      );
      console.log(latestMatchesArr);
      setLatestMatches(latestMatchesArr);
    };

    const lottieTimmer = setTimeout(() => {
      setLottieState(true);
    }, 5000);

    return () => clearTimeout(lottieTimmer);
  }, []);

  return (
    <div className="flex flex-col gap-16 bg-[#111111]">
      {/* hero section starts  */}
      <div
        className="relative h-screen z-10 flex flex-col"
        style={{
          backgroundImage: `url(${HeroBanner.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* <NavBar /> */}

        <div className="text-[32px] sm:text-7xl pt-[150px] pl-4 sm:pt-[92px] lg:pl-20 lg:pt-[150px] text-white">
          Spread <span className="text-[#FBC02D]">Happiness</span>, Celebrate{" "}
          <span className="text-[#FBC02D]">Fitness</span>
        </div>

        <div className="hidden h-[calc(100vh-78px)] w-full sm:flex items-end justify-center absolute bottom-0 z-0">
          {/* <Image className="h-[calc(100vh-78px)]" alt="banner" src={heroBannerGif}></Image> */}
          <Lottie animationData={banner} play={!lottieState} loop></Lottie>
        </div>

        {/* carousal for mobile */}
        <div className="flex justify-center items-center absolute bottom-0 w-full sm:hidden animateRightTOleft">
          <Image alt="Img" src={imagesArr[currentImage]}></Image>
        </div>
      </div>
      {/* hero section ends  */}

      {/* latest match starts */}
      <div className="px-4 sm:px-[76px]">
        <div className="text-xl sm:text-[32px] font-semibold text-white mb-4">Latest Matches</div>

        {/* desktop match carousal starts */}
        <div className="flex flex-col sm:flex sm:flex-row items-center gap-6 sm:overflow-auto ongoingMatch">
          {latestMatches.map((eachEle, index) => (
            <div
              key={index}
              className="w-full sm:max-w-[414px] rounded-3xl border border-[#4D4D4D] cursor-pointer"
            >
              <div className="">
                {/* card head starts */}
                <div className="flex items-center justify-between py-4 px-4 sm:py-6 sm:px-6">
                  <div className="text-2xl font-semibold text-white capitalize">{eachEle.game}</div>
                  <div
                    className={
                      eachEle.matchStatus === "live"
                        ? "text-[#F7F7F7] text-sm py-1 px-2 sm:py-2 sm:px-3 rounded bg-[#E53835] flex items-center gap-2"
                        : eachEle.matchStatus === "Last played"
                        ? "text-[#F7F7F7] text-sm py-1 px-2 sm:py-2 sm:px-3 rounded bg-[#0698D6]"
                        : "text-[#F7F7F7] text-sm py-1 px-2 sm:py-2 sm:px-3 rounded bg-[#CD8700]"
                    }
                  >
                    <svg
                      className={eachEle.matchStatus === "live" ? "block" : "hidden"}
                      width="9"
                      height="8"
                      viewBox="0 0 9 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="4.33301" cy="4" r="4" fill="#F7F7F7" />
                    </svg>

                    <div>
                      {eachEle.matchStatus === "live"
                        ? "Live"
                        : eachEle.matchStatus === "Last played"
                        ? "Last Played"
                        : "Upcoming"}
                    </div>
                  </div>
                </div>
                {/* card head ends */}

                {/* main content starts */}
                <div className="px-4 sm:px-6 flex items-center justify-between">
                  {/* teamA starts */}
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      className="w-[80px] h-[80px] sm:w-[104px] sm:h-[104px]"
                      alt="team logo"
                      src={
                        eachEle.team1.teamName === "Blue team"
                          ? blue_team_logo
                          : eachEle.team1.teamName === "Green team"
                          ? green_team_logo
                          : red_team_logo
                      }
                    ></Image>
                    <div className="text-[#CDCDCD] text-lg capitalize">
                      {eachEle.team1.teamName}
                    </div>
                  </div>
                  {/* teamA ends */}

                  <div className="text-[#939393] text-xl font-semibold">Vs</div>

                  {/* teamB starts */}
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      className="w-[80px] h-[80px] sm:w-[104px] sm:h-[104px]"
                      alt="team logo"
                      src={
                        eachEle.team2.teamName === "Blue team"
                          ? blue_team_logo
                          : eachEle.team2.teamName === "Green team"
                          ? green_team_logo
                          : red_team_logo
                      }
                    ></Image>
                    <div className="text-[#CDCDCD] text-lg capitalize">
                      {eachEle.team2.teamName}
                    </div>
                  </div>
                  {/* teamB ends */}
                </div>
                {/* main content ends */}
              </div>
              <div
                className={
                  eachEle.matchStatus === "live"
                    ? "text-[#FFF] text-sm font-medium text-center p-2 mt-8 rounded-b-3xl bg-[#E53835]"
                    : eachEle.matchStatus === "Last played"
                    ? "text-[#FFF] text-sm font-medium text-center p-2 mt-8 rounded-b-3xl bg-[#5E35B1]"
                    : "text-[#FFF] text-sm font-medium text-center p-2 mt-8 rounded-b-3xl bg-[#CD8700]"
                }
              >
                {eachEle.matchStatus === "live"
                  ? "Watch Now"
                  : eachEle.matchStatus === "Last played"
                  ? "message from backend"
                  : "Watch live soon"}
              </div>
            </div>
          ))}
        </div>
        {/* desktop match carousal ends */}
      </div>
      {/* latest match ends */}

      {/* top standing starts */}
      <div
        className="relative mx-0 lg:rounded-2xl lg:mx-[76px] flex justify-evenly items-center h-[214px] lg:h-[408px]"
        style={{
          backgroundImage: `url(${topStandingBackground.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* rank 2 starts */}
        <div className="mt-14 lg:mt-32 flex flex-col items-center z-10">
          {/* head starts */}
          <div className="relative w-[80px] h-[80px] lg:w-[140px] lg:h-[140px] flex justify-center items-center border-[4px] lg:border-[8px] rounded-[50%]  border-[rgba(255,255,255,0.20)]">
            <Image
              className="w-full bg-[#ABDCFF] rounded-[50%]"
              alt="team logo"
              src={blue_team_logo}
            ></Image>
            <div className="flex items-center justify-center w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] bg-[rgba(255,255,255,0.20)] rounded-[50%] absolute right-[-20%] bottom-[0px]">
              <Lottie animationData={silverGem} play loop></Lottie>
            </div>
          </div>
          {/* head ends */}
          <div className="flex flex-col items-center">
            <div className="text-white text-base lg:text-4xl">Blue Team</div>
            <div className="text-white text-xs lg:text-2xl">Rank 2</div>
          </div>
        </div>
        {/* rank 2 ends */}

        {/* rank 1 starts */}
        <div className="flex flex-col items-center z-10">
          <Image
            alt="Ribbon"
            className="absolute flex justify-center top-[-10px] lg:top-[-28px] w-[160px] h-[30px] lg:w-[356px] lg:h-[82px]"
            src={Top_Standing_Ribbon}
          ></Image>

          {/* head starts */}
          <div className="relative w-[80px] h-[80px] lg:w-[140px] lg:h-[140px] flex justify-center items-center border-[4px] lg:border-[8px] rounded-[50%]  border-[rgba(255,255,255,0.20)]">
            <Image
              className="w-full bg-[#ABDCFF] rounded-[50%]"
              alt="team logo"
              src={red_team_logo}
            ></Image>
            <div className="flex items-center justify-center w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] bg-[rgba(255,255,255,0.20)] rounded-[50%] absolute right-[-20%] bottom-[0px]">
              <Lottie animationData={goldGem} play loop></Lottie>
            </div>
          </div>
          {/* head ends */}
          <div className="flex flex-col items-center">
            <div className="text-white text-base lg:text-4xl">Red Team</div>
            <div className="text-white text-xs lg:text-2xl">Rank 1</div>
          </div>
        </div>
        {/* rank 1 ends */}

        {/* rank 3 starts */}
        <div className="mt-14 lg:mt-32 flex flex-col items-center z-10">
          {/* head starts */}
          <div className="relative w-[80px] h-[80px] lg:w-[140px] lg:h-[140px] flex justify-center items-center border-[4px] lg:border-[8px] rounded-[50%] border-[rgba(255,255,255,0.20)]">
            <Image
              className="w-full bg-[#ABDCFF] rounded-[50%]"
              alt="team logo"
              src={green_team_logo}
            ></Image>
            <div className="flex items-center justify-center w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] bg-[rgba(255,255,255,0.20)] rounded-[50%] absolute right-[-20%] bottom-[0px]">
              <Lottie animationData={bronzeGem} play loop></Lottie>
            </div>
          </div>
          {/* head ends */}
          <div className="flex flex-col items-center">
            <div className="text-white text-base lg:text-4xl">Green Team</div>
            <div className="text-white text-xs lg:text-2xl">Rank 3</div>
          </div>
        </div>
        {/* rank 3 ends */}
      </div>
      {/* top standing ends */}

      {/* upcomming matches starts */}
      <div className="px-4 sm:px-[76px] flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="text-[#FFF] text-[20px] sm:text-[32px] font-semibold">
            Upcoming Matches
          </div>
          <div className="text-white text-xs sm:text-base cursor-pointer underline underline-offset-2">
            View more
          </div>
        </div>

        <div className="flex flex-col w-full gap-6">
          {homeSchedule.map((eachEle, index) => (
            <div key={index}>
              {/* for desktop */}
              <div className="hidden lg:flex justify-between items-center bg-[#1F1F1F] border border-[#2F2F2F] rounded-2xl py-4 px-[18px]">
                {/* left */}
                <div className="flex items-center gap-3">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.0003 29.3333C14.1559 29.3333 12.4225 28.9833 10.8003 28.2833C9.1781 27.5833 7.76699 26.6333 6.56699 25.4333C5.36699 24.2333 4.41699 22.8222 3.71699 21.2C3.01699 19.5778 2.66699 17.8444 2.66699 16C2.66699 14.1555 3.01699 12.4222 3.71699 10.8C4.41699 9.17777 5.36699 7.76666 6.56699 6.56666C7.76699 5.36666 9.1781 4.41666 10.8003 3.71666C12.4225 3.01666 14.1559 2.66666 16.0003 2.66666C17.8448 2.66666 19.5781 3.01666 21.2003 3.71666C22.8225 4.41666 24.2337 5.36666 25.4337 6.56666C26.6337 7.76666 27.5837 9.17777 28.2837 10.8C28.9837 12.4222 29.3337 14.1555 29.3337 16C29.3337 17.8444 28.9837 19.5778 28.2837 21.2C27.5837 22.8222 26.6337 24.2333 25.4337 25.4333C24.2337 26.6333 22.8225 27.5833 21.2003 28.2833C19.5781 28.9833 17.8448 29.3333 16.0003 29.3333ZM22.667 12.6667L24.467 12.0667L25.0003 10.2667C24.2892 9.19999 23.4337 8.28332 22.4337 7.51666C21.4337 6.74999 20.3337 6.17777 19.1337 5.79999L17.3337 7.06666V8.93332L22.667 12.6667ZM9.33366 12.6667L14.667 8.93332V7.06666L12.867 5.79999C11.667 6.17777 10.567 6.74999 9.56699 7.51666C8.56699 8.28332 7.71144 9.19999 7.00033 10.2667L7.53366 12.0667L9.33366 12.6667ZM7.93366 22.9333L9.46699 22.8L10.467 21L8.53366 15.2L6.66699 14.5333L5.33366 15.5333C5.33366 16.9778 5.53366 18.2944 5.93366 19.4833C6.33366 20.6722 7.00033 21.8222 7.93366 22.9333ZM16.0003 26.6667C16.5781 26.6667 17.1448 26.6222 17.7003 26.5333C18.2559 26.4444 18.8003 26.3111 19.3337 26.1333L20.267 24.1333L19.4003 22.6667H12.6003L11.7337 24.1333L12.667 26.1333C13.2003 26.3111 13.7448 26.4444 14.3003 26.5333C14.8559 26.6222 15.4225 26.6667 16.0003 26.6667ZM13.0003 20H19.0003L20.867 14.6667L16.0003 11.2667L11.2003 14.6667L13.0003 20ZM24.067 22.9333C25.0003 21.8222 25.667 20.6722 26.067 19.4833C26.467 18.2944 26.667 16.9778 26.667 15.5333L25.3337 14.6L23.467 15.2L21.5337 21L22.5337 22.8L24.067 22.9333Z"
                      fill="#F7F7F7"
                    />
                  </svg>
                  <div className="text-[#F7F7F7] text-2xl font-semibold capitalize">
                    {eachEle.game}
                  </div>
                </div>
                {/* middel */}
                <div className="flex items-center gap-7">
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      alt="team 1"
                      className="w-[48px] h-[48px]"
                      src={
                        eachEle.team1.teamName === "Red team"
                          ? red_team_logo
                          : eachEle.team1.teamName === "Blue team"
                          ? blue_team_logo
                          : green_team_logo
                      }
                    ></Image>

                    <div className="text-white text-sm font-medium">
                      {eachEle.team1.teamName === "Red team"
                        ? "Red Team"
                        : eachEle.team1.teamName === "Blue team"
                        ? "Blue Team"
                        : "Green Team"}
                    </div>
                  </div>
                  <div className="text-[#939393] text-xl font-semibold">Vs</div>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      alt="team 2"
                      className="w-[48px] h-[48px]"
                      src={
                        eachEle.team2.teamName === "Red team"
                          ? red_team_logo
                          : eachEle.team2.teamName === "Blue team"
                          ? blue_team_logo
                          : green_team_logo
                      }
                    ></Image>

                    <div className="text-white text-sm font-medium">
                      {eachEle.team2.teamName === "Red team"
                        ? "Red Team"
                        : eachEle.team2.teamName === "Blue team"
                        ? "Blue Team"
                        : "Green Team"}
                    </div>
                  </div>
                </div>
                {/* left */}
                <div className="max-w-[300px] flex flex-col gap-[10px]">
                  <div className="text-[#E0E0E0] font-normal text-lg">{formatedDateToStr}</div>
                  <div className="flex items-center justify-between w-full gap-12">
                    <div className="flex items-center gap-1">
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.3 17.2L16.7 15.8L13 12.1V7.5H11V12.9L15.3 17.2ZM12 22.5C10.6167 22.5 9.31667 22.2375 8.1 21.7125C6.88333 21.1875 5.825 20.475 4.925 19.575C4.025 18.675 3.3125 17.6167 2.7875 16.4C2.2625 15.1833 2 13.8833 2 12.5C2 11.1167 2.2625 9.81667 2.7875 8.6C3.3125 7.38333 4.025 6.325 4.925 5.425C5.825 4.525 6.88333 3.8125 8.1 3.2875C9.31667 2.7625 10.6167 2.5 12 2.5C13.3833 2.5 14.6833 2.7625 15.9 3.2875C17.1167 3.8125 18.175 4.525 19.075 5.425C19.975 6.325 20.6875 7.38333 21.2125 8.6C21.7375 9.81667 22 11.1167 22 12.5C22 13.8833 21.7375 15.1833 21.2125 16.4C20.6875 17.6167 19.975 18.675 19.075 19.575C18.175 20.475 17.1167 21.1875 15.9 21.7125C14.6833 22.2375 13.3833 22.5 12 22.5ZM12 20.5C14.2167 20.5 16.1042 19.7208 17.6625 18.1625C19.2208 16.6042 20 14.7167 20 12.5C20 10.2833 19.2208 8.39583 17.6625 6.8375C16.1042 5.27917 14.2167 4.5 12 4.5C9.78333 4.5 7.89583 5.27917 6.3375 6.8375C4.77917 8.39583 4 10.2833 4 12.5C4 14.7167 4.77917 16.6042 6.3375 18.1625C7.89583 19.7208 9.78333 20.5 12 20.5Z"
                          fill="#878787"
                        />
                      </svg>
                      <div className="text-[#E0E0E0] font-normal text-lg">6:00 PM</div>
                    </div>

                    <Link
                      target="_Blank"
                      href={
                        "https://www.google.com/maps/place/City+Turf/@19.2660505,72.9744644,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7bb909626a193:0x812370cfd90179f0!8m2!3d19.2660455!4d72.9770393!16s%2Fg%2F11f4m74sp_?entry=ttu"
                      }
                      className="flex items-center gap-1"
                    >
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 16.975C13.65 15.6417 14.8958 14.3583 15.7375 13.125C16.5792 11.8917 17 10.7333 17 9.65C17 8.71667 16.8292 7.92083 16.4875 7.2625C16.1458 6.60417 15.725 6.07083 15.225 5.6625C14.725 5.25417 14.1833 4.95833 13.6 4.775C13.0167 4.59167 12.4833 4.5 12 4.5C11.5167 4.5 10.9833 4.59167 10.4 4.775C9.81667 4.95833 9.275 5.25417 8.775 5.6625C8.275 6.07083 7.85417 6.60417 7.5125 7.2625C7.17083 7.92083 7 8.71667 7 9.65C7 10.7333 7.42083 11.8917 8.2625 13.125C9.10417 14.3583 10.35 15.6417 12 16.975ZM12 19.5C9.65 17.7667 7.89583 16.0833 6.7375 14.45C5.57917 12.8167 5 11.2167 5 9.65C5 8.46667 5.2125 7.42917 5.6375 6.5375C6.0625 5.64583 6.60833 4.9 7.275 4.3C7.94167 3.7 8.69167 3.25 9.525 2.95C10.3583 2.65 11.1833 2.5 12 2.5C12.8167 2.5 13.6417 2.65 14.475 2.95C15.3083 3.25 16.0583 3.7 16.725 4.3C17.3917 4.9 17.9375 5.64583 18.3625 6.5375C18.7875 7.42917 19 8.46667 19 9.65C19 11.2167 18.4208 12.8167 17.2625 14.45C16.1042 16.0833 14.35 17.7667 12 19.5ZM12 11.5C12.55 11.5 13.0208 11.3042 13.4125 10.9125C13.8042 10.5208 14 10.05 14 9.5C14 8.95 13.8042 8.47917 13.4125 8.0875C13.0208 7.69583 12.55 7.5 12 7.5C11.45 7.5 10.9792 7.69583 10.5875 8.0875C10.1958 8.47917 10 8.95 10 9.5C10 10.05 10.1958 10.5208 10.5875 10.9125C10.9792 11.3042 11.45 11.5 12 11.5ZM5 22.5V20.5H19V22.5H5Z"
                          fill="#0698D6"
                        />
                      </svg>
                      <div className="text-[#0698D6] text-lg font-normal">LY Turf</div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* for mobile */}
              <div className="flex flex-col gap-2 py-4 px-[18px] bg-[#1F1F1F] border border-[#2F2F2F] rounded-2xl lg:hidden">
                <div className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99967 14.6667C7.07745 14.6667 6.21079 14.4917 5.39967 14.1417C4.58856 13.7917 3.88301 13.3167 3.28301 12.7167C2.68301 12.1167 2.20801 11.4111 1.85801 10.6C1.50801 9.78888 1.33301 8.92222 1.33301 8C1.33301 7.07777 1.50801 6.21111 1.85801 5.4C2.20801 4.58888 2.68301 3.88333 3.28301 3.28333C3.88301 2.68333 4.58856 2.20833 5.39967 1.85833C6.21079 1.50833 7.07745 1.33333 7.99967 1.33333C8.9219 1.33333 9.78856 1.50833 10.5997 1.85833C11.4108 2.20833 12.1163 2.68333 12.7163 3.28333C13.3163 3.88333 13.7913 4.58888 14.1413 5.4C14.4913 6.21111 14.6663 7.07777 14.6663 8C14.6663 8.92222 14.4913 9.78888 14.1413 10.6C13.7913 11.4111 13.3163 12.1167 12.7163 12.7167C12.1163 13.3167 11.4108 13.7917 10.5997 14.1417C9.78856 14.4917 8.9219 14.6667 7.99967 14.6667ZM11.333 6.33333L12.233 6.03333L12.4997 5.13333C12.1441 4.6 11.7163 4.14166 11.2163 3.75833C10.7163 3.37499 10.1663 3.08888 9.56634 2.89999L8.66634 3.53333V4.46666L11.333 6.33333ZM4.66634 6.33333L7.33301 4.46666V3.53333L6.43301 2.89999C5.83301 3.08888 5.28301 3.37499 4.78301 3.75833C4.28301 4.14166 3.85523 4.6 3.49967 5.13333L3.76634 6.03333L4.66634 6.33333ZM3.96634 11.4667L4.73301 11.4L5.23301 10.5L4.26634 7.6L3.33301 7.26666L2.66634 7.76666C2.66634 8.48888 2.76634 9.14722 2.96634 9.74166C3.16634 10.3361 3.49967 10.9111 3.96634 11.4667ZM7.99967 13.3333C8.28856 13.3333 8.5719 13.3111 8.84967 13.2667C9.12745 13.2222 9.39968 13.1556 9.66634 13.0667L10.133 12.0667L9.69967 11.3333H6.29967L5.86634 12.0667L6.33301 13.0667C6.59967 13.1556 6.8719 13.2222 7.14967 13.2667C7.42745 13.3111 7.71079 13.3333 7.99967 13.3333ZM6.49967 10H9.49967L10.433 7.33333L7.99967 5.63333L5.59967 7.33333L6.49967 10ZM12.033 11.4667C12.4997 10.9111 12.833 10.3361 13.033 9.74166C13.233 9.14722 13.333 8.48888 13.333 7.76666L12.6663 7.3L11.733 7.6L10.7663 10.5L11.2663 11.4L12.033 11.4667Z"
                      fill="#F7F7F7"
                    />
                  </svg>
                  <div className="text-base text-[#F7F7F7] font-semibold">{eachEle.game}</div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  {/* team 1 */}
                  <div className="flex flex-col items-center gap-3">
                    <Image
                      alt="team 1"
                      className="w-[36px] h-[36px]"
                      src={
                        eachEle.team1.teamName === "Red team"
                          ? red_team_logo
                          : eachEle.team1.teamName === "Blue team"
                          ? blue_team_logo
                          : green_team_logo
                      }
                    ></Image>
                    <div className="text-white font-semibold text-sm">
                      {eachEle.team1.teamName === "Red team"
                        ? "Red Team"
                        : eachEle.team1.teamName === "Blue team"
                        ? "Blue Team"
                        : "Green Team"}
                    </div>
                  </div>
                  <div className="text-[#939393] font-semibold text-sm">Vs</div>
                  {/* team 2 */}
                  <div className="flex flex-col items-center gap-3">
                    <Image
                      alt="team 2"
                      className="w-[36px] h-[36px]"
                      src={
                        eachEle.team2.teamName === "Red team"
                          ? red_team_logo
                          : eachEle.team2.teamName === "Blue team"
                          ? blue_team_logo
                          : green_team_logo
                      }
                    ></Image>
                    <div className="text-white font-semibold text-sm">
                      {eachEle.team2.teamName === "Red team"
                        ? "Red Team"
                        : eachEle.team2.teamName === "Blue team"
                        ? "Blue Team"
                        : "Green Team"}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-[#E0E0E0] text-xs font-normal">{formatedDateToStr}</div>
                  <div className="flex items-center gap-[14px]">
                    <div className="flex items-center gap-[2px]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.1997 11.1333L11.133 10.2L8.66634 7.73334V4.66668H7.33301V8.26668L10.1997 11.1333ZM7.99967 14.6667C7.07745 14.6667 6.21079 14.4917 5.39967 14.1417C4.58856 13.7917 3.88301 13.3167 3.28301 12.7167C2.68301 12.1167 2.20801 11.4111 1.85801 10.6C1.50801 9.7889 1.33301 8.92223 1.33301 8.00001C1.33301 7.07779 1.50801 6.21112 1.85801 5.40001C2.20801 4.5889 2.68301 3.88334 3.28301 3.28334C3.88301 2.68334 4.58856 2.20834 5.39967 1.85834C6.21079 1.50834 7.07745 1.33334 7.99967 1.33334C8.9219 1.33334 9.78856 1.50834 10.5997 1.85834C11.4108 2.20834 12.1163 2.68334 12.7163 3.28334C13.3163 3.88334 13.7913 4.5889 14.1413 5.40001C14.4913 6.21112 14.6663 7.07779 14.6663 8.00001C14.6663 8.92223 14.4913 9.7889 14.1413 10.6C13.7913 11.4111 13.3163 12.1167 12.7163 12.7167C12.1163 13.3167 11.4108 13.7917 10.5997 14.1417C9.78856 14.4917 8.9219 14.6667 7.99967 14.6667ZM7.99967 13.3333C9.47745 13.3333 10.7358 12.8139 11.7747 11.775C12.8136 10.7361 13.333 9.47779 13.333 8.00001C13.333 6.52223 12.8136 5.2639 11.7747 4.22501C10.7358 3.18612 9.47745 2.66668 7.99967 2.66668C6.5219 2.66668 5.26356 3.18612 4.22467 4.22501C3.18579 5.2639 2.66634 6.52223 2.66634 8.00001C2.66634 9.47779 3.18579 10.7361 4.22467 11.775C5.26356 12.8139 6.5219 13.3333 7.99967 13.3333Z"
                          fill="#878787"
                        />
                      </svg>
                      <div className="text-[#E0E0E0] text-xs font-normal">6:00 PM</div>
                    </div>
                    <Link
                      target="_Blank"
                      href={
                        "https://www.google.com/maps/place/City+Turf/@19.2660505,72.9744644,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7bb909626a193:0x812370cfd90179f0!8m2!3d19.2660455!4d72.9770393!16s%2Fg%2F11f4m74sp_?entry=ttu"
                      }
                      className="flex items-center gap-[2px]"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.99967 10.9833C9.09967 10.0945 9.93023 9.2389 10.4913 8.41668C11.0525 7.59445 11.333 6.82223 11.333 6.10001C11.333 5.47779 11.2191 4.94723 10.9913 4.50834C10.7636 4.06945 10.483 3.7139 10.1497 3.44168C9.81634 3.16945 9.45523 2.97223 9.06634 2.85001C8.67745 2.72779 8.3219 2.66668 7.99967 2.66668C7.67745 2.66668 7.3219 2.72779 6.93301 2.85001C6.54412 2.97223 6.18301 3.16945 5.84967 3.44168C5.51634 3.7139 5.23579 4.06945 5.00801 4.50834C4.78023 4.94723 4.66634 5.47779 4.66634 6.10001C4.66634 6.82223 4.9469 7.59445 5.50801 8.41668C6.06912 9.2389 6.89967 10.0945 7.99967 10.9833ZM7.99967 12.6667C6.43301 11.5111 5.26356 10.3889 4.49134 9.30001C3.71912 8.21112 3.33301 7.14445 3.33301 6.10001C3.33301 5.31112 3.47467 4.61945 3.75801 4.02501C4.04134 3.43057 4.40523 2.93334 4.84967 2.53334C5.29412 2.13334 5.79412 1.83334 6.34967 1.63334C6.90523 1.43334 7.45523 1.33334 7.99967 1.33334C8.54412 1.33334 9.09412 1.43334 9.64967 1.63334C10.2052 1.83334 10.7052 2.13334 11.1497 2.53334C11.5941 2.93334 11.958 3.43057 12.2413 4.02501C12.5247 4.61945 12.6663 5.31112 12.6663 6.10001C12.6663 7.14445 12.2802 8.21112 11.508 9.30001C10.7358 10.3889 9.56634 11.5111 7.99967 12.6667ZM7.99967 7.33334C8.36634 7.33334 8.68023 7.20279 8.94134 6.94168C9.20245 6.68057 9.33301 6.36668 9.33301 6.00001C9.33301 5.63334 9.20245 5.31945 8.94134 5.05834C8.68023 4.79723 8.36634 4.66668 7.99967 4.66668C7.63301 4.66668 7.31912 4.79723 7.05801 5.05834C6.7969 5.31945 6.66634 5.63334 6.66634 6.00001C6.66634 6.36668 6.7969 6.68057 7.05801 6.94168C7.31912 7.20279 7.63301 7.33334 7.99967 7.33334ZM3.33301 14.6667V13.3333H12.6663V14.6667H3.33301Z"
                          fill="#0698D6"
                        />
                      </svg>

                      <div className="text-[#0698D6] text-sm font-normal">LY Turf</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* upcomming matches ends */}

      {/* Gallery starts */}
      <div className="px-4 sm:px-[76px] flex flex-col gap-4 pb-20">
        <div className="flex items-center justify-between">
          <div className="text-[#FFF] text-[20px] sm:text-[32px] font-semibold">Gallery</div>
          <div className="text-white text-xs sm:text-base cursor-pointer underline underline-offset-2">
            View more
          </div>
        </div>
        <div className="text-white text-sm sm:text-2xl">
          A sneak peak highlights of our last year matches
        </div>
        {/* gallery cards starts */}
        <div className="flex flex-col items-center gap-5 lg:flex-row lg:gap-6 lg:justify-between">
          {homeGallery.slice(0, 3).map((eachEle, index) => (
            <div
              key={index}
              className="h-[210px] w-full lg:h-[264px] lg:max-w-[412px] relative flex items-end justify-center"
            >
              <img src={eachEle.img} alt="img" className="w-full h-full"></img>
              <div className="text-white text-base font-semibold sm:text-[20px] absolute bottom-[24px] text-center">
                played last year
              </div>
            </div>
          ))}
        </div>
        {/* gallery cards ends */}
      </div>
      {/* Gallery ends */}
      {/* footer starts */}
      {/* <Footer /> */}
      {/* footer ends */}
    </div>
  );
}

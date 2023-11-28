import cricketicon from "@/app/images/cricket-icon.svg";
import footballicon from "@/app/images/FootballIcon.svg";
import blueteam from "@/app/images/blueteamlogo.png";
import greenteam from "@/app/images/greenteamlogo.png";
import tbdlogo from "@/app/images/TBDlogo.png";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

interface MatchListItemProps {
  matchData: {
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
  };
}

const Matchcard: React.FC<MatchListItemProps> = ({
  matchData,
}: MatchListItemProps) => {
  const formattedDate = (inputDate: string) => {
    return moment(inputDate, "DD-MM-YYYY").format("Do, MMMM YYYY");
  };

  return (
    <div className="w-full bg-[#1F1F1F] flex flex-col items-center pt-4 rounded-2xl">
      {/* game card schedule */}
      <div
        className={`w-full flex flex-col md:flex-row justify-between items-center px-[18px] gap-6 md:gap-0 ${
          matchData.winningStatus ? "pb-2" : "pb-4"
        }`}
      >
        <div className="game w-full md:w-auto flex items-center justify-between">
          <div className="md:w-[130px] lg:w-[190px] flex flex-col gap-2 md:gap-3">
            <div className="flex items-center gap-2 md:gap-3">
              {matchData.game === "cricket" ? (
                <Image
                  src={cricketicon}
                  alt="cricket"
                  className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                ></Image>
              ) : matchData.game === "football" ? (
                <Image
                  src={footballicon}
                  alt="football"
                  className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                ></Image>
              ) : null}
              <h5 className="text-[#F7F7F7] text-base md:text-lg lg:text-2xl font-semibold capitalize">
                {matchData.game}
              </h5>
            </div>
            {matchData.team1.teamName && matchData.team2.teamName ? (
              ""
            ) : (
              <div className="hidden md:block bg-[#FBC02D] w-12 md:w-[68px] text-center rounded-3xl px-1 md:px-2 py-[2px]">
                <h2 className="text-sm font-medium leading-4 text-[#111]">
                  Final
                </h2>
              </div>
            )}
          </div>
          {matchData.winningStatus ? (
            <Link
              href=""
              className="text-[#FBC02D] md:hidden text-sm font-medium underline leading-5 tracking-[0.14px]"
            >
              Check score
            </Link>
          ) : matchData.team1.teamName === "" &&
            matchData.team2.teamName === "" ? (
            <div className="md:hidden bg-[#FBC02D] w-12 md:w-[68px] text-center rounded-3xl px-1 md:px-2 py-[2px]">
              <h2 className="text-sm md:text-xs font-medium leading-4 text-[#111]">
                Final
              </h2>
            </div>
          ) : null}
        </div>
        <div className="team flex items-center gap-8 md:gap-7">
          <div className="px-4 py-1 flex flex-col gap-2 items-center text-center">
            {matchData.team1.teamName === "Green Team" && (
              <Image
                src={greenteam}
                className="w-9 h-9 md:w-12 md:h-12"
                alt="blue team"
              ></Image>
            )}

            {matchData.team1.teamName === "Red Team" && (
              <Image
                src={blueteam}
                className="w-9 h-9 md:w-12 md:h-12"
                alt="blue team"
              ></Image>
            )}

            {matchData.team1.teamName === "Blue Team" && (
              <Image
                src={blueteam}
                className="w-9 h-9 md:w-12 md:h-12"
                alt="blue team"
              ></Image>
            )}

            {matchData.team1.teamName === "" && (
              <Image
                src={tbdlogo}
                className="w-9 h-9 md:w-12 md:h-12"
                alt="TBD"
              ></Image>
            )}
            <h2 className="text-white text-sm font-medium">
              {matchData.team1.teamName ? matchData.team1.teamName : "TBD"}
            </h2>
          </div>
          <h1 className="text-[#939393] text-sm md:text-xl font-semibold leading-10">
            Vs
          </h1>
          <div className="px-4 py-1 flex flex-col gap-2 items-center text-center">
            {matchData.team2.teamName === "Green Team" && (
              <Image
                src={greenteam}
                className="w-9 h-9 md:w-12 md:h-12"
                alt="blue team"
              ></Image>
            )}

            {matchData.team2.teamName === "Red Team" && (
              <Image
                src={blueteam}
                className="w-9 h-9 md:w-12 md:h-12"
                alt="blue team"
              ></Image>
            )}

            {matchData.team2.teamName === "Blue Team" && (
              <Image
                src={blueteam}
                className="w-9 h-9 md:w-12 md:h-12"
                alt="blue team"
              ></Image>
            )}

            {matchData.team2.teamName === "" && (
              <Image
                src={tbdlogo}
                className="w-9 h-9 md:w-12 md:h-12"
                alt="TBD"
              ></Image>
            )}
            <h2 className="text-white text-sm font-medium">
              {matchData.team2.teamName ? matchData.team2.teamName : "TBD"}
            </h2>
          </div>
        </div>

        <div className="date w-full md:w-[300px] flex flex-row md:flex-col justify-between gap-[10px]">
          <h3 className="text-[#E0E0E0] text-xs md:text-base lg:text-lg font-normal">
            {formattedDate(matchData.matchDate)}
          </h3>
          <div className="">
            {matchData.winningStatus ? (
              <Link
                href=""
                className="hidden md:block text-[#FBC02D] md:text-base lg:text-lg underline leading-5"
              >
                Check score
              </Link>
            ) : (
              <div className="flex gap-[14px] md:gap-[20px] text-white">
                <div className="flex gap-[2px]">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 md:w-6 md:h-6"
                  >
                    <path
                      d="M10.2002 11.1333L11.1335 10.2L8.66683 7.73331V4.66665H7.3335V8.26665L10.2002 11.1333ZM8.00016 14.6666C7.07794 14.6666 6.21127 14.4916 5.40016 14.1416C4.58905 13.7916 3.8835 13.3166 3.2835 12.7166C2.6835 12.1166 2.2085 11.4111 1.8585 10.6C1.5085 9.78887 1.3335 8.9222 1.3335 7.99998C1.3335 7.07776 1.5085 6.21109 1.8585 5.39998C2.2085 4.58887 2.6835 3.88331 3.2835 3.28331C3.8835 2.68331 4.58905 2.20831 5.40016 1.85831C6.21127 1.50831 7.07794 1.33331 8.00016 1.33331C8.92238 1.33331 9.78905 1.50831 10.6002 1.85831C11.4113 2.20831 12.1168 2.68331 12.7168 3.28331C13.3168 3.88331 13.7918 4.58887 14.1418 5.39998C14.4918 6.21109 14.6668 7.07776 14.6668 7.99998C14.6668 8.9222 14.4918 9.78887 14.1418 10.6C13.7918 11.4111 13.3168 12.1166 12.7168 12.7166C12.1168 13.3166 11.4113 13.7916 10.6002 14.1416C9.78905 14.4916 8.92238 14.6666 8.00016 14.6666ZM8.00016 13.3333C9.47794 13.3333 10.7363 12.8139 11.7752 11.775C12.8141 10.7361 13.3335 9.47776 13.3335 7.99998C13.3335 6.5222 12.8141 5.26387 11.7752 4.22498C10.7363 3.18609 9.47794 2.66665 8.00016 2.66665C6.52238 2.66665 5.26405 3.18609 4.22516 4.22498C3.18627 5.26387 2.66683 6.5222 2.66683 7.99998C2.66683 9.47776 3.18627 10.7361 4.22516 11.775C5.26405 12.8139 6.52238 13.3333 8.00016 13.3333Z"
                      fill="#878787"
                    />
                  </svg>
                  <h4 className="text-xs md:text-lg font-normal leading-4 text-[#E0E0E0]">
                    6:00 PM
                  </h4>
                </div>
                <div className="flex">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 md:w-6 md:h-6"
                  >
                    <path
                      d="M8.00016 10.9833C9.10016 10.0944 9.93072 9.23887 10.4918 8.41665C11.0529 7.59442 11.3335 6.8222 11.3335 6.09998C11.3335 5.47776 11.2196 4.9472 10.9918 4.50831C10.7641 4.06942 10.4835 3.71387 10.1502 3.44165C9.81683 3.16942 9.45572 2.9722 9.06683 2.84998C8.67794 2.72776 8.32238 2.66665 8.00016 2.66665C7.67794 2.66665 7.32238 2.72776 6.9335 2.84998C6.54461 2.9722 6.1835 3.16942 5.85016 3.44165C5.51683 3.71387 5.23627 4.06942 5.0085 4.50831C4.78072 4.9472 4.66683 5.47776 4.66683 6.09998C4.66683 6.8222 4.94738 7.59442 5.5085 8.41665C6.06961 9.23887 6.90016 10.0944 8.00016 10.9833ZM8.00016 12.6666C6.4335 11.5111 5.26405 10.3889 4.49183 9.29998C3.71961 8.21109 3.3335 7.14442 3.3335 6.09998C3.3335 5.31109 3.47516 4.61942 3.7585 4.02498C4.04183 3.43054 4.40572 2.93331 4.85016 2.53331C5.29461 2.13331 5.79461 1.83331 6.35016 1.63331C6.90572 1.43331 7.45572 1.33331 8.00016 1.33331C8.54461 1.33331 9.09461 1.43331 9.65016 1.63331C10.2057 1.83331 10.7057 2.13331 11.1502 2.53331C11.5946 2.93331 11.9585 3.43054 12.2418 4.02498C12.5252 4.61942 12.6668 5.31109 12.6668 6.09998C12.6668 7.14442 12.2807 8.21109 11.5085 9.29998C10.7363 10.3889 9.56683 11.5111 8.00016 12.6666ZM8.00016 7.33331C8.36683 7.33331 8.68072 7.20276 8.94183 6.94165C9.20294 6.68053 9.3335 6.36665 9.3335 5.99998C9.3335 5.63331 9.20294 5.31942 8.94183 5.05831C8.68072 4.7972 8.36683 4.66665 8.00016 4.66665C7.6335 4.66665 7.31961 4.7972 7.0585 5.05831C6.79738 5.31942 6.66683 5.63331 6.66683 5.99998C6.66683 6.36665 6.79738 6.68053 7.0585 6.94165C7.31961 7.20276 7.6335 7.33331 8.00016 7.33331ZM3.3335 14.6666V13.3333H12.6668V14.6666H3.3335Z"
                      fill="#0698D6"
                    />
                  </svg>
                  <Link
                    href=""
                    className="text-[#0698D6] text-xs md:text-lg font-normal leading-4 underline"
                  >
                    LY TURF
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* result strip */}
      {matchData.matchStatus !== "pending" && (
        <div
          className="w-full p-2 rounded-bl-2xl rounded-br-2xl pt-2"
          style={{
            background: "linear-gradient(180deg, #8350ED 0%, #6F00C7 100%)",
          }}
        >
          <h1 className="font-sans text-center text-white uppercase text-sm md:text-base font-bold leading-[18px] tracking-wide">
            {matchData.winningStatus}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Matchcard;

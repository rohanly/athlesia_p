import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative">
      {/* desktop start */}
      <div className="bg-[#5E35B1] hidden lg:flex justify-evenly items-center">
        {/* left starts */}
        <div className="flex flex-col justify-between h-[180px]">
          <Image className="w-[252px] h-[100px]" alt="logo" src={logo}></Image>
          <div className="flex justify-between items-center gap-6">
            <div className="flex flex-col items-start gap-2">
              <div className="text-white text-xs">Powered by </div>
              <div className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M32 16.4368C32 25.2743 24.8366 32.4353 16 32.4353C7.16336 32.4353 0 25.2713 0 16.4368C0 7.6024 7.16336 0.435303 16 0.435303C24.8366 0.435303 32 7.59935 32 16.4368Z"
                    fill="#F8DF00"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M26.4154 12.8453H24.7818C24.7818 10.8573 23.1665 9.24189 21.1787 9.24189V7.60815C24.0673 7.60815 26.4154 9.95953 26.4154 12.8453Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.4806 21.0205C10.6745 21.0205 10.021 20.3731 10.0088 19.5669V19.5608C10.0088 19.5547 10.0088 19.5517 10.0088 19.5486V14.9222V9.25757H7.06836V19.2707C7.06836 21.2404 8.28668 22.9261 10.0088 23.6223C10.5493 23.8391 11.1386 23.9613 11.7554 23.9613H12.9493V21.0205C12.9523 21.0205 11.505 21.0205 11.4806 21.0205Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.9284 12.2103V12.4699H18.9254V16.6291H18.9192C18.9192 17.4414 18.2597 18.0979 17.4475 18.0979C16.6353 18.0979 15.9788 17.4414 15.9788 16.6291V12.4668V12.2103H13.0322V16.6291C13.0322 19.069 15.0109 21.0478 17.4505 21.0478C17.9696 21.0478 18.4643 20.9531 18.9284 20.7882V22.4983C18.9284 22.5014 18.9284 22.5075 18.9284 22.5105V22.5167C18.9192 23.3198 18.2658 23.9702 17.4597 23.9702C17.4383 23.9702 15.988 23.9702 15.988 23.9702V26.911H17.1818C17.7986 26.911 18.388 26.7918 18.9284 26.572C20.6505 25.8788 21.8689 24.1931 21.8689 22.2204V12.2073H18.9284V12.2103Z"
                    fill="white"
                  />
                </svg>
                <div className="text-white text-sm">Lemon Yellow LLP</div>
              </div>
            </div>
            <div className="w-[1px] h-full bg-[rgba(255,255,255,0.30)]"></div>
            <div className="flex flex-col items-start gap-2">
              <div className="text-white text-xs">Co-Powered by </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="106" height="33" viewBox="0 0 106 33" fill="none">
                <path
                  d="M16 32.4353C24.8366 32.4353 32 25.2719 32 16.4353C32 7.59875 24.8366 0.435303 16 0.435303C7.16345 0.435303 0 7.59875 0 16.4353C0 25.2719 7.16345 32.4353 16 32.4353Z"
                  fill="#F5DD01"
                />
                <path d="M26.7604 12.8443H25.1265C25.1265 10.8566 23.5111 9.24125 21.5234 9.24125V7.60742C24.4127 7.60742 26.7604 9.95816 26.7604 12.8443Z" fill="white" />
                <path
                  d="M11.8273 21.0198C11.0212 21.0198 10.3658 20.3705 10.3566 19.5675V19.5613C10.3566 19.5582 10.3566 19.5521 10.3566 19.549V14.9213V9.25977H7.41504V19.272C7.41504 21.2444 8.6335 22.9305 10.3566 23.6228C10.8981 23.8413 11.4858 23.9613 12.1043 23.9613H13.2981V21.0198C13.2981 21.0198 11.8489 21.0198 11.8273 21.0198Z"
                  fill="white"
                />
                <path
                  d="M19.2735 12.2074V12.4658H19.2704V16.6259H19.2642C19.2642 17.4382 18.6058 18.0966 17.7935 18.0966C16.9812 18.0966 16.3227 17.4382 16.3227 16.6259V12.4628V12.2074H13.375V16.6259C13.375 19.0659 15.3535 21.0443 17.7935 21.0443C18.3135 21.0443 18.8088 20.9489 19.2704 20.7859V22.4966C19.2704 22.4997 19.2704 22.5059 19.2704 22.5089V22.5151C19.2612 23.3182 18.6058 23.9674 17.7996 23.9674C17.7781 23.9674 16.3288 23.9674 16.3288 23.9674V26.9089H17.5227C18.1412 26.9089 18.7288 26.7889 19.2704 26.5705C20.9935 25.8781 22.2119 24.192 22.2119 22.2197V12.2074H19.2735Z"
                  fill="white"
                />
                <path
                  d="M46.1285 17.3584H39.5624C39.6208 18.1738 39.9347 18.8322 40.5039 19.3369C41.0701 19.8384 41.787 20.0907 42.6516 20.0907C43.1378 20.0907 43.587 20.0045 43.9962 19.8292C44.4024 19.6569 44.7562 19.3984 45.0547 19.0599L45.6516 19.7461C45.3039 20.1645 44.8701 20.4815 44.347 20.6999C43.8239 20.9184 43.2516 21.0292 42.6239 21.0292C41.8178 21.0292 41.1039 20.8568 40.4824 20.5153C39.8608 20.1707 39.3747 19.6968 39.027 19.0907C38.6793 18.4845 38.5039 17.7984 38.5039 17.0322C38.5039 16.2661 38.6701 15.5799 39.0024 14.9738C39.3347 14.3676 39.7931 13.8938 40.3747 13.5553C40.9562 13.2168 41.6116 13.0476 42.3378 13.0476C43.0639 13.0476 43.7162 13.2168 44.2916 13.5553C44.867 13.8938 45.3224 14.3645 45.6485 14.9645C45.9778 15.5676 46.1408 16.2537 46.1408 17.0322L46.1285 17.3584ZM40.4331 14.6815C39.9193 15.1645 39.6301 15.7922 39.5593 16.5707H45.1255C45.0547 15.7953 44.7654 15.1645 44.2516 14.6815C43.7378 14.1984 43.1008 13.9584 42.3347 13.9584C41.5808 13.9584 40.947 14.1984 40.4331 14.6815Z"
                  fill="white"
                />
                <path
                  d="M61.0112 13.8968C61.5742 14.463 61.8542 15.2999 61.8542 16.4045V20.9553H60.7958V16.5091C60.7958 15.6938 60.5989 15.0722 60.205 14.6445C59.8112 14.2169 59.2573 14.0014 58.5404 14.0014C57.725 14.0014 57.0819 14.2538 56.6142 14.7553C56.1466 15.2569 55.9127 15.9522 55.9127 16.8353V20.9553H54.8542V16.5091C54.8542 15.6938 54.6573 15.0722 54.2635 14.6445C53.8696 14.2169 53.3096 14.0014 52.5835 14.0014C51.7773 14.0014 51.1373 14.2538 50.6665 14.7553C50.1958 15.2569 49.9589 15.9522 49.9589 16.8353V20.9553H48.9004V13.1061H49.9158V14.5399C50.1927 14.063 50.5835 13.6938 51.0789 13.4353C51.5773 13.1768 52.1496 13.0476 52.7958 13.0476C53.4512 13.0476 54.0204 13.1861 54.5035 13.4661C54.9866 13.7461 55.3466 14.1584 55.5866 14.7061C55.8758 14.1892 56.2912 13.783 56.8327 13.4907C57.3742 13.1984 57.9927 13.0507 58.6912 13.0507C59.6758 13.0476 60.4512 13.3307 61.0112 13.8968Z"
                  fill="white"
                />
                <path d="M65.332 13.1061H66.3905V20.9553H65.332V13.1061Z" fill="white" />
                <path
                  d="M76.2948 13.9061C76.8764 14.4784 77.1687 15.3122 77.1687 16.4045V20.9553H76.1102V16.5091C76.1102 15.6938 75.9071 15.0722 75.4979 14.6445C75.0887 14.2169 74.5071 14.0014 73.7533 14.0014C72.9071 14.0014 72.2394 14.2538 71.7471 14.7553C71.2548 15.2569 71.0087 15.9522 71.0087 16.8353V20.9553H69.9502V13.1061H70.9656V14.5522C71.2548 14.0753 71.6548 13.703 72.1656 13.4415C72.6794 13.1768 73.2733 13.0476 73.9502 13.0476C74.9287 13.0476 75.7102 13.3338 76.2948 13.9061Z"
                  fill="white"
                />
                <path
                  d="M87.5074 17.3584H80.9413C80.9997 18.1738 81.3136 18.8322 81.8828 19.3369C82.449 19.8384 83.1659 20.0907 84.0305 20.0907C84.5167 20.0907 84.9659 20.0045 85.3751 19.8292C85.7813 19.6569 86.1351 19.3984 86.4336 19.0599L87.0305 19.7461C86.6828 20.1645 86.249 20.4815 85.7259 20.6999C85.2028 20.9184 84.6305 21.0292 84.0028 21.0292C83.1967 21.0292 82.4828 20.8568 81.8613 20.5153C81.2397 20.1707 80.7536 19.6968 80.4059 19.0907C80.0582 18.4845 79.8828 17.7984 79.8828 17.0322C79.8828 16.2661 80.049 15.5799 80.3813 14.9738C80.7136 14.3676 81.172 13.8938 81.7536 13.5553C82.3351 13.2168 82.9905 13.0476 83.7167 13.0476C84.4428 13.0476 85.0951 13.2168 85.6705 13.5553C86.2459 13.8938 86.7013 14.3645 87.0274 14.9645C87.3567 15.5676 87.5197 16.2537 87.5197 17.0322L87.5074 17.3584ZM81.8151 14.6815C81.3013 15.1645 81.012 15.7922 80.9413 16.5707H86.5074C86.4367 15.7953 86.1474 15.1645 85.6336 14.6815C85.1197 14.1984 84.4828 13.9584 83.7167 13.9584C82.9628 13.9584 82.329 14.1984 81.8151 14.6815Z"
                  fill="white"
                />
                <path
                  d="M96.6327 13.9061C97.2142 14.4784 97.5065 15.3122 97.5065 16.4045V20.9553H96.4481V16.5091C96.4481 15.6938 96.245 15.0722 95.8358 14.6445C95.4266 14.2169 94.845 14.0014 94.0912 14.0014C93.245 14.0014 92.5773 14.2538 92.085 14.7553C91.5927 15.2569 91.3465 15.9522 91.3465 16.8353V20.9553H90.2881V13.1061H91.3035V14.5522C91.5927 14.0753 91.9927 13.703 92.5035 13.4415C93.0173 13.1768 93.6112 13.0476 94.2881 13.0476C95.2666 13.0476 96.0512 13.3338 96.6327 13.9061Z"
                  fill="white"
                />
                <path
                  d="M105.117 20.4784C104.917 20.6569 104.671 20.7953 104.378 20.8876C104.086 20.983 103.778 21.0292 103.461 21.0292C102.726 21.0292 102.157 20.8322 101.76 20.4322C101.363 20.0353 101.163 19.4722 101.163 18.7461V14.0015H99.7598V13.1061H101.163V11.3892H102.221V13.1061H104.554V14.0015H102.221V18.6876C102.221 19.1553 102.338 19.5123 102.572 19.7553C102.806 19.9984 103.141 20.1215 103.581 20.1215C103.8 20.1215 104.012 20.0876 104.215 20.0169C104.418 19.9461 104.597 19.8476 104.744 19.7184L105.117 20.4784Z"
                  fill="white"
                />
                <path
                  d="M65.8465 5.00134C65.8557 6.65365 64.5234 8.00443 62.8711 8.01366C64.5265 8.00443 65.8742 9.33675 65.8834 10.9891C65.8742 9.33675 67.2065 7.98597 68.8588 7.97674C67.2034 7.98597 65.8557 6.65365 65.8465 5.00134Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* left ends */}
        {/* footer image */}
        <svg className="" width="214" height="287" viewBox="0 0 214 287" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.1">
            <path
              d="M121.123 9.38012C90.8108 84.2447 193.328 200.87 101.028 279.809C99.8363 280.828 98.3037 281.507 96.6008 281.507C95.0681 281.507 93.5355 280.998 92.1732 279.979C90.8108 278.961 89.9593 277.603 89.6187 276.075C89.2782 274.547 89.4485 272.849 90.1297 271.491C130.83 184.913 -44.4034 93.7513 111.076 0.892066C112.268 0.213022 113.801 -0.1265 115.163 0.0432609C116.525 0.213022 117.888 0.722305 119.08 1.74087C120.102 2.75944 120.953 3.94775 121.294 5.30584C121.634 6.49416 121.634 8.02203 121.123 9.38012Z"
              fill="white"
            />
            <path
              d="M16.7165 107.502C-37.4373 176.425 57.417 216.149 56.2249 273.868C56.2249 275.396 56.5655 276.923 57.5872 278.112C58.4387 279.3 59.8011 280.319 61.3337 280.658C62.8664 280.998 64.399 280.998 65.7614 280.488C67.1237 279.979 68.3158 278.961 69.1673 277.603C98.1174 225.656 30.3401 167.088 28.9777 111.746C28.9777 110.388 28.4668 108.86 27.6153 107.672C26.7638 106.483 25.5717 105.635 24.2094 105.125C22.847 104.616 21.3144 104.616 19.952 104.956C18.5896 105.295 17.5679 106.483 16.7165 107.502Z"
              fill="white"
            />
            <path
              d="M142.896 75.2473C148.005 139.587 204.032 202.738 132.167 277.433C131.146 278.451 130.635 279.809 130.635 281.167C130.635 282.525 130.975 283.884 131.827 285.072C132.678 286.09 133.87 286.939 135.233 287.109C136.595 287.279 137.957 287.109 139.15 286.43C281.686 202.398 181.894 148.414 153.965 73.0404C153.454 71.6823 152.603 70.6637 151.411 69.9846C150.219 69.3056 148.856 69.1359 147.494 69.3056C146.132 69.4754 144.94 70.3242 144.088 71.3428C143.237 72.3613 142.896 73.8892 142.896 75.2473Z"
              fill="white"
            />
          </g>
        </svg>

        <div className="flex flex-col gap-10 w-[444px]">
          <div className="text-[#CDCDCD] text-xl">
            Athlesia is gives a platform to all the Fitness Thursday trainings performed their final test. Athlesia taps into our sporty spirits with a creative twist that culminates into a
            spectacular event to behold.
          </div>
          <div className="flex items-center gap-5">
            <Link href={"https://www.instagram.com/lemonyellowllp/"} target="_blank">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="4" stroke="white" strokeWidth="1.5" />
                <circle cx="18" cy="6" r="1" fill="white" />
                <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.5" />
              </svg>
            </Link>
            <Link href={"https://www.youtube.com/channel/UC7fttRvh6g3F3u7bOyvXipw"} target="_blank">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="3" width="20" height="18" rx="4" stroke="white" strokeWidth="1.5" />
                <path
                  d="M10.4472 8.72361L15.2111 11.1056C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2764C9.78231 15.6088 9 15.1253 9 14.382V9.61803C9 8.87465 9.78231 8.39116 10.4472 8.72361Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
            <Link href={"https://in.linkedin.com/company/lemonyellow-net"} target="_blank">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="2" stroke="white" strokeWidth="1.5" />
                <path d="M2 8.5H6V22H2V8.5Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                <path
                  d="M9 22H13V15C13 13.8954 13.8954 13 15 13C16.1046 13 17 13.8954 17 15V22H21V15C21 11.6863 18.3137 9 15 9C14.2987 9 13.6256 9.12031 13 9.34141V8.5H9V22ZM9 22V15"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link href={"https://lemonyellow.design/"} target="_blank">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12C22 10.3431 17.5228 9 12 9C6.47715 9 2 10.3431 2 12M22 12C22 13.6569 17.5228 15 12 15C6.47715 15 2 13.6569 2 12M12 22C6.47715 22 2 17.5228 2 12M12 22C14.2091 22 16 17.5228 16 12C16 6.47715 14.2091 2 12 2M12 22C9.79086 22 8 17.5228 8 12C8 6.47715 9.79086 2 12 2M2 12C2 6.47715 6.47715 2 12 2"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      {/* desktop ends */}

      {/* mobile starts */}
      <div className="bg-[#5E35B1] lg:hidden flex flex-col gap-8 py-6 px-4">
        <div className="flex items-center justify-between gap-3  h-[56px]">
          <Image alt="logo" className="w-[100px] h-[44px]" src={logo}></Image>
          <div className="w-[1px] h-full bg-[rgba(255,255,255,0.30)]"></div>
          <div className="gridFooterMobile">
            {/* <div className="flex items-center gap-2"> */}
            <div className="text-[#FFF] text-[10px]">Powered by </div>
            {/* <div className="flex items-center gap-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 12.0011C24 18.6293 18.6275 24 12 24C5.37252 24 0 18.627 0 12.0011C0 5.37533 5.37252 0 12 0C18.6275 0 24 5.37304 24 12.0011Z"
                  fill="#F8DF00"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.8113 9.3075H18.5861C18.5861 7.81652 17.3746 6.60494 15.8838 6.60494V5.37964C18.0502 5.37964 19.8113 7.14317 19.8113 9.3075Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.61092 15.4389C8.00634 15.4389 7.51626 14.9534 7.5071 14.3487V14.3441C7.5071 14.3396 7.5071 14.3373 7.5071 14.335V10.8652V6.6167H5.30176V14.1266C5.30176 15.6038 6.2155 16.8681 7.5071 17.3903C7.91244 17.5529 8.35443 17.6445 8.81702 17.6445H9.71245V15.4389C9.71474 15.4389 8.62924 15.4389 8.61092 15.4389Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.1966 8.83127V9.02594H14.1943V12.1453H14.1897C14.1897 12.7545 13.695 13.2469 13.0859 13.2469C12.4767 13.2469 11.9843 12.7545 11.9843 12.1453V9.02365V8.83127H9.77441V12.1453C9.77441 13.9753 11.2584 15.4594 13.0882 15.4594C13.4775 15.4594 13.8485 15.3884 14.1966 15.2647V16.5473C14.1966 16.5495 14.1966 16.5541 14.1966 16.5564V16.561C14.1897 17.1634 13.6996 17.6512 13.095 17.6512C13.079 17.6512 11.9912 17.6512 11.9912 17.6512V19.8568H12.8866C13.3492 19.8568 13.7912 19.7674 14.1966 19.6025C15.4882 19.0826 16.4019 17.8184 16.4019 16.3388V8.82898H14.1966V8.83127Z"
                  fill="white"
                />
              </svg>
              <div className="text-white text-xs">Lemon Yellow LLP</div>
            </div> */}
            <svg width="124" height="24" viewBox="0 0 124 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 12.0011C24 18.6293 18.6275 24 12 24C5.37252 24 0 18.627 0 12.0011C0 5.37533 5.37252 0 12 0C18.6275 0 24 5.37304 24 12.0011Z"
                fill="#F8DF00"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.8113 9.3075H18.5861C18.5861 7.81652 17.3746 6.60494 15.8838 6.60494V5.37964C18.0502 5.37964 19.8113 7.14317 19.8113 9.3075Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.61092 15.4389C8.00634 15.4389 7.51626 14.9534 7.5071 14.3487V14.3441C7.5071 14.3396 7.5071 14.3373 7.5071 14.335V10.8652V6.6167H5.30176V14.1266C5.30176 15.6038 6.2155 16.8681 7.5071 17.3903C7.91244 17.5529 8.35443 17.6445 8.81702 17.6445H9.71245V15.4389C9.71474 15.4389 8.62924 15.4389 8.61092 15.4389Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.1966 8.83127V9.02594H14.1943V12.1453H14.1897C14.1897 12.7545 13.695 13.2469 13.0859 13.2469C12.4767 13.2469 11.9843 12.7545 11.9843 12.1453V9.02365V8.83127H9.77441V12.1453C9.77441 13.9753 11.2584 15.4594 13.0882 15.4594C13.4775 15.4594 13.8485 15.3884 14.1966 15.2647V16.5473C14.1966 16.5495 14.1966 16.5541 14.1966 16.5564V16.561C14.1897 17.1634 13.6996 17.6512 13.095 17.6512C13.079 17.6512 11.9912 17.6512 11.9912 17.6512V19.8568H12.8866C13.3492 19.8568 13.7912 19.7674 14.1966 19.6025C15.4882 19.0826 16.4019 17.8184 16.4019 16.3388V8.82898H14.1966V8.83127Z"
                fill="white"
              />
              <path
                d="M29.8 15.208H33.64V16H28.96V7.6H29.8V15.208ZM37.1901 9.856C38.0781 9.856 38.7941 10.172 39.3381 10.804C39.8901 11.428 40.1661 12.168 40.1661 13.024C40.1661 13.112 40.1581 13.236 40.1421 13.396H34.8741C34.9541 14.004 35.2101 14.488 35.6421 14.848C36.0821 15.2 36.6221 15.376 37.2621 15.376C37.7181 15.376 38.1101 15.284 38.4381 15.1C38.7741 14.908 39.0261 14.66 39.1941 14.356L39.8901 14.764C39.6261 15.188 39.2661 15.524 38.8101 15.772C38.3541 16.02 37.8341 16.144 37.2501 16.144C36.3061 16.144 35.5381 15.848 34.9461 15.256C34.3541 14.664 34.0581 13.912 34.0581 13C34.0581 12.104 34.3501 11.356 34.9341 10.756C35.5181 10.156 36.2701 9.856 37.1901 9.856ZM37.1901 10.624C36.5661 10.624 36.0421 10.812 35.6181 11.188C35.2021 11.556 34.9541 12.036 34.8741 12.628H39.3501C39.2701 11.996 39.0261 11.504 38.6181 11.152C38.2101 10.8 37.7341 10.624 37.1901 10.624ZM47.8219 9.856C48.4939 9.856 49.0339 10.072 49.4419 10.504C49.8579 10.936 50.0659 11.52 50.0659 12.256V16H49.2739V12.256C49.2739 11.736 49.1379 11.336 48.8659 11.056C48.6019 10.768 48.2499 10.624 47.8099 10.624C47.3139 10.624 46.9099 10.792 46.5979 11.128C46.2939 11.456 46.1419 11.972 46.1419 12.676V16H45.3499V12.256C45.3499 11.728 45.2219 11.324 44.9659 11.044C44.7179 10.764 44.3779 10.624 43.9459 10.624C43.4659 10.624 43.0579 10.792 42.7219 11.128C42.3859 11.464 42.2179 11.98 42.2179 12.676V16H41.4259V10H42.2179V10.876C42.6499 10.196 43.2619 9.856 44.0539 9.856C44.9179 9.856 45.5259 10.22 45.8779 10.948C46.3099 10.22 46.9579 9.856 47.8219 9.856ZM56.6258 15.244C56.0178 15.844 55.2738 16.144 54.3938 16.144C53.5138 16.144 52.7658 15.844 52.1498 15.244C51.5418 14.636 51.2378 13.888 51.2378 13C51.2378 12.112 51.5418 11.368 52.1498 10.768C52.7658 10.16 53.5138 9.856 54.3938 9.856C55.2738 9.856 56.0178 10.16 56.6258 10.768C57.2418 11.368 57.5498 12.112 57.5498 13C57.5498 13.888 57.2418 14.636 56.6258 15.244ZM52.7138 14.692C53.1698 15.148 53.7298 15.376 54.3938 15.376C55.0578 15.376 55.6178 15.148 56.0738 14.692C56.5298 14.228 56.7578 13.664 56.7578 13C56.7578 12.336 56.5298 11.776 56.0738 11.32C55.6178 10.856 55.0578 10.624 54.3938 10.624C53.7298 10.624 53.1698 10.856 52.7138 11.32C52.2578 11.776 52.0298 12.336 52.0298 13C52.0298 13.664 52.2578 14.228 52.7138 14.692ZM61.6832 9.856C62.4112 9.856 62.9832 10.08 63.3992 10.528C63.8232 10.968 64.0352 11.564 64.0352 12.316V16H63.2432V12.316C63.2432 11.78 63.0992 11.364 62.8112 11.068C62.5312 10.772 62.1312 10.624 61.6112 10.624C61.0352 10.624 60.5672 10.808 60.2072 11.176C59.8472 11.536 59.6672 12.096 59.6672 12.856V16H58.8752V10H59.6672V10.936C60.1152 10.216 60.7872 9.856 61.6832 9.856ZM74.7466 7.6L71.7106 12.556V16H70.8706V12.532L67.8466 7.6H68.7946L71.3026 11.716L73.7986 7.6H74.7466ZM77.28 9.856C78.168 9.856 78.884 10.172 79.428 10.804C79.98 11.428 80.256 12.168 80.256 13.024C80.256 13.112 80.248 13.236 80.232 13.396H74.964C75.044 14.004 75.3 14.488 75.732 14.848C76.172 15.2 76.712 15.376 77.352 15.376C77.808 15.376 78.2 15.284 78.528 15.1C78.864 14.908 79.116 14.66 79.284 14.356L79.98 14.764C79.716 15.188 79.356 15.524 78.9 15.772C78.444 16.02 77.924 16.144 77.34 16.144C76.396 16.144 75.628 15.848 75.036 15.256C74.444 14.664 74.148 13.912 74.148 13C74.148 12.104 74.44 11.356 75.024 10.756C75.608 10.156 76.36 9.856 77.28 9.856ZM77.28 10.624C76.656 10.624 76.132 10.812 75.708 11.188C75.292 11.556 75.044 12.036 74.964 12.628H79.44C79.36 11.996 79.116 11.504 78.708 11.152C78.3 10.8 77.824 10.624 77.28 10.624ZM81.5158 16V7.24H82.3078V16H81.5158ZM83.9884 16V7.24H84.7804V16H83.9884ZM91.4891 15.244C90.8811 15.844 90.1371 16.144 89.2571 16.144C88.3771 16.144 87.6291 15.844 87.0131 15.244C86.4051 14.636 86.1011 13.888 86.1011 13C86.1011 12.112 86.4051 11.368 87.0131 10.768C87.6291 10.16 88.3771 9.856 89.2571 9.856C90.1371 9.856 90.8811 10.16 91.4891 10.768C92.1051 11.368 92.4131 12.112 92.4131 13C92.4131 13.888 92.1051 14.636 91.4891 15.244ZM87.5771 14.692C88.0331 15.148 88.5931 15.376 89.2571 15.376C89.9211 15.376 90.4811 15.148 90.9371 14.692C91.3931 14.228 91.6211 13.664 91.6211 13C91.6211 12.336 91.3931 11.776 90.9371 11.32C90.4811 10.856 89.9211 10.624 89.2571 10.624C88.5931 10.624 88.0331 10.856 87.5771 11.32C87.1211 11.776 86.8931 12.336 86.8931 13C86.8931 13.664 87.1211 14.228 87.5771 14.692ZM100.728 10H101.544L99.6961 16H98.8321L97.2841 11.164L95.7361 16H94.8721L93.0241 10H93.8401L95.3161 14.98L96.8881 10H97.6801L99.2521 14.98L100.728 10ZM106.698 15.208H110.538V16H105.858V7.6H106.698V15.208ZM112.581 15.208H116.421V16H111.741V7.6H112.581V15.208ZM120.624 7.6C121.376 7.6 122.004 7.852 122.508 8.356C123.012 8.86 123.264 9.488 123.264 10.24C123.264 10.992 123.012 11.62 122.508 12.124C122.004 12.628 121.376 12.88 120.624 12.88H118.464V16H117.624V7.6H120.624ZM120.624 12.088C121.144 12.088 121.572 11.916 121.908 11.572C122.252 11.22 122.424 10.776 122.424 10.24C122.424 9.704 122.252 9.264 121.908 8.92C121.572 8.568 121.144 8.392 120.624 8.392H118.464V12.088H120.624Z"
                fill="white"
              />
            </svg>

            {/* </div> */}
            {/* <div className="flex items-center gap-2"> */}
            <div className="text-[#FFF] text-[10px]">Co-Powered by </div>
            <svg width="79" height="24" viewBox="0 0 79 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37259 0 0 5.37258 0 12C0 18.6274 5.37259 24 12 24Z" fill="#F5DD01" />
              <path d="M20.0703 9.30694H18.8449C18.8449 7.81617 17.6333 6.60464 16.1426 6.60464V5.37927C18.3095 5.37927 20.0703 7.14233 20.0703 9.30694Z" fill="white" />
              <path
                d="M8.87076 15.4385C8.26614 15.4385 7.7746 14.9516 7.76768 14.3493V14.3447C7.76768 14.3424 7.76768 14.3377 7.76768 14.3354V10.8647V6.61853H5.56152V14.1277C5.56152 15.607 6.47537 16.8716 7.76768 17.3908C8.17383 17.5547 8.6146 17.6447 9.07845 17.6447H9.97383V15.4385C9.97383 15.4385 8.88691 15.4385 8.87076 15.4385Z"
                fill="white"
              />
              <path
                d="M14.4551 8.82922V9.02306H14.4528V12.1431H14.4482C14.4482 12.7523 13.9543 13.2462 13.3451 13.2462C12.7359 13.2462 12.242 12.7523 12.242 12.1431V9.02075V8.82922H10.0312V12.1431C10.0312 13.9731 11.5151 15.4569 13.3451 15.4569C13.7351 15.4569 14.1066 15.3854 14.4528 15.2631V16.5461C14.4528 16.5484 14.4528 16.5531 14.4528 16.5554V16.56C14.4459 17.1623 13.9543 17.6492 13.3497 17.6492C13.3336 17.6492 12.2466 17.6492 12.2466 17.6492V19.8554H13.142C13.6059 19.8554 14.0466 19.7654 14.4528 19.6015C15.7451 19.0823 16.6589 17.8177 16.6589 16.3385V8.82922H14.4551Z"
                fill="white"
              />
              <path
                d="M34.5964 12.6923H29.6718C29.7156 13.3038 29.951 13.7977 30.3779 14.1762C30.8025 14.5523 31.3402 14.7415 31.9887 14.7415C32.3533 14.7415 32.6902 14.6769 32.9972 14.5454C33.3018 14.4162 33.5672 14.2223 33.791 13.9685L34.2387 14.4831C33.9779 14.7969 33.6525 15.0346 33.2602 15.1985C32.8679 15.3623 32.4387 15.4454 31.9679 15.4454C31.3633 15.4454 30.8279 15.3162 30.3618 15.06C29.8956 14.8015 29.531 14.4462 29.2702 13.9915C29.0095 13.5369 28.8779 13.0223 28.8779 12.4477C28.8779 11.8731 29.0025 11.3585 29.2518 10.9038C29.501 10.4492 29.8449 10.0938 30.281 9.84C30.7172 9.58616 31.2087 9.45923 31.7533 9.45923C32.2979 9.45923 32.7872 9.58616 33.2187 9.84C33.6502 10.0938 33.9918 10.4469 34.2364 10.8969C34.4833 11.3492 34.6056 11.8638 34.6056 12.4477L34.5964 12.6923ZM30.3249 10.6846C29.9395 11.0469 29.7225 11.5177 29.6695 12.1015H33.8441C33.791 11.52 33.5741 11.0469 33.1887 10.6846C32.8033 10.3223 32.3256 10.1423 31.751 10.1423C31.1856 10.1423 30.7102 10.3223 30.3249 10.6846Z"
                fill="white"
              />
              <path
                d="M45.7589 10.0962C46.1812 10.5208 46.3912 11.1485 46.3912 11.9769V15.39H45.5973V12.0554C45.5973 11.4438 45.4496 10.9777 45.1543 10.6569C44.8589 10.3362 44.4435 10.1746 43.9058 10.1746C43.2942 10.1746 42.8119 10.3639 42.4612 10.74C42.1104 11.1162 41.935 11.6377 41.935 12.3V15.39H41.1412V12.0554C41.1412 11.4438 40.9935 10.9777 40.6981 10.6569C40.4027 10.3362 39.9827 10.1746 39.4381 10.1746C38.8335 10.1746 38.3535 10.3639 38.0004 10.74C37.6473 11.1162 37.4696 11.6377 37.4696 12.3V15.39H36.6758V9.50309H37.4373V10.5785C37.645 10.2208 37.9381 9.94385 38.3096 9.75C38.6835 9.55615 39.1127 9.45923 39.5973 9.45923C40.0889 9.45923 40.5158 9.56307 40.8781 9.77307C41.2404 9.98307 41.5104 10.2923 41.6904 10.7031C41.9073 10.3154 42.2189 10.0108 42.625 9.79155C43.0312 9.57232 43.495 9.46154 44.0189 9.46154C44.7573 9.45923 45.3389 9.67154 45.7589 10.0962Z"
                fill="white"
              />
              <path d="M48.999 9.50305H49.7929V15.3899H48.999V9.50305Z" fill="white" />
              <path
                d="M57.2214 10.1031C57.6575 10.5323 57.8767 11.1577 57.8767 11.9769V15.39H57.0829V12.0554C57.0829 11.4438 56.9306 10.9777 56.6237 10.6569C56.3167 10.3362 55.8806 10.1746 55.3152 10.1746C54.6806 10.1746 54.1798 10.3639 53.8106 10.74C53.4414 11.1162 53.2567 11.6377 53.2567 12.3V15.39H52.4629V9.50309H53.2244V10.5877C53.4414 10.23 53.7414 9.95077 54.1244 9.75462C54.5098 9.55616 54.9552 9.45923 55.4629 9.45923C56.1967 9.45923 56.7829 9.67385 57.2214 10.1031Z"
                fill="white"
              />
              <path
                d="M65.6306 12.6923H60.706C60.7498 13.3038 60.9852 13.7977 61.4121 14.1762C61.8367 14.5523 62.3744 14.7415 63.0229 14.7415C63.3875 14.7415 63.7244 14.6769 64.0313 14.5454C64.336 14.4162 64.6013 14.2223 64.8252 13.9685L65.2729 14.4831C65.0121 14.7969 64.6867 15.0346 64.2944 15.1985C63.9021 15.3623 63.4729 15.4454 63.0021 15.4454C62.3975 15.4454 61.8621 15.3162 61.396 15.06C60.9298 14.8015 60.5652 14.4462 60.3044 13.9915C60.0437 13.5369 59.9121 13.0223 59.9121 12.4477C59.9121 11.8731 60.0367 11.3585 60.286 10.9038C60.5352 10.4492 60.879 10.0938 61.3152 9.84C61.7513 9.58616 62.2429 9.45923 62.7875 9.45923C63.3321 9.45923 63.8213 9.58616 64.2529 9.84C64.6844 10.0938 65.026 10.4469 65.2706 10.8969C65.5175 11.3492 65.6398 11.8638 65.6398 12.4477L65.6306 12.6923ZM61.3613 10.6846C60.976 11.0469 60.759 11.5177 60.706 12.1015H64.8806C64.8275 11.52 64.6106 11.0469 64.2252 10.6846C63.8398 10.3223 63.3621 10.1423 62.7875 10.1423C62.2221 10.1423 61.7467 10.3223 61.3613 10.6846Z"
                fill="white"
              />
              <path
                d="M72.4753 10.1031C72.9114 10.5323 73.1306 11.1577 73.1306 11.9769V15.39H72.3368V12.0554C72.3368 11.4438 72.1845 10.9777 71.8776 10.6569C71.5706 10.3362 71.1345 10.1746 70.5691 10.1746C69.9345 10.1746 69.4337 10.3639 69.0645 10.74C68.6953 11.1162 68.5106 11.6377 68.5106 12.3V15.39H67.7168V9.50309H68.4783V10.5877C68.6953 10.23 68.9953 9.95077 69.3783 9.75462C69.7637 9.55616 70.2091 9.45923 70.7168 9.45923C71.4506 9.45923 72.0391 9.67385 72.4753 10.1031Z"
                fill="white"
              />
              <path
                d="M78.837 15.0323C78.687 15.1661 78.5024 15.2699 78.2832 15.3392C78.064 15.4107 77.8332 15.4453 77.5955 15.4453C77.044 15.4453 76.617 15.2976 76.3193 14.9976C76.0216 14.7 75.8716 14.2776 75.8716 13.733V10.1746H74.8193V9.50304H75.8716V8.21533H76.6655V9.50304H78.4147V10.1746H76.6655V13.6892C76.6655 14.0399 76.7532 14.3077 76.9286 14.49C77.1039 14.6723 77.3555 14.7646 77.6855 14.7646C77.8493 14.7646 78.0086 14.7392 78.1609 14.6861C78.3132 14.633 78.447 14.5592 78.5578 14.4623L78.837 15.0323Z"
                fill="white"
              />
              <path
                d="M49.3849 3.42456C49.3918 4.66379 48.3926 5.67688 47.1533 5.6838C48.3949 5.67688 49.4056 6.67612 49.4126 7.91535C49.4056 6.67612 50.4049 5.66303 51.6441 5.65611C50.4026 5.66303 49.3918 4.66379 49.3849 3.42456Z"
                fill="white"
              />
            </svg>
            {/* </div> */}
          </div>
        </div>
        <div className="text-white text-sm">
          Athlesia is gives a platform to all the Fitness Thursday trainings performed their final test. Athlesia taps into our sporty spirits with a creative twist that culminates into a spectacular
          event to behold.
        </div>
        <div className="flex items-center gap-5">
          <Link href={"https://www.instagram.com/lemonyellowllp/"} target="_blank">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="4" stroke="white" strokeWidth="1.5" />
              <circle cx="18" cy="6" r="1" fill="white" />
              <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.5" />
            </svg>
          </Link>
          <Link href={"https://www.youtube.com/channel/UC7fttRvh6g3F3u7bOyvXipw"} target="_blank">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="3" width="20" height="18" rx="4" stroke="white" strokeWidth="1.5" />
              <path
                d="M10.4472 8.72361L15.2111 11.1056C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2764C9.78231 15.6088 9 15.1253 9 14.382V9.61803C9 8.87465 9.78231 8.39116 10.4472 8.72361Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Link>

          <Link href={"https://in.linkedin.com/company/lemonyellow-net"} target="_blank">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="2" stroke="white" strokeWidth="1.5" />
              <path d="M2 8.5H6V22H2V8.5Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
              <path
                d="M9 22H13V15C13 13.8954 13.8954 13 15 13C16.1046 13 17 13.8954 17 15V22H21V15C21 11.6863 18.3137 9 15 9C14.2987 9 13.6256 9.12031 13 9.34141V8.5H9V22ZM9 22V15"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link href={"https://lemonyellow.design/"} target="_blank">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12C22 10.3431 17.5228 9 12 9C6.47715 9 2 10.3431 2 12M22 12C22 13.6569 17.5228 15 12 15C6.47715 15 2 13.6569 2 12M12 22C6.47715 22 2 17.5228 2 12M12 22C14.2091 22 16 17.5228 16 12C16 6.47715 14.2091 2 12 2M12 22C9.79086 22 8 17.5228 8 12C8 6.47715 9.79086 2 12 2M2 12C2 6.47715 6.47715 2 12 2"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </Link>
        </div>
        <div className="absolute bottom-1 right-1">
          <svg width="100" height="132" viewBox="0 0 100 132" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.1">
              <path
                d="M56.5954 4.31166C42.4304 38.7239 90.3366 92.3321 47.2051 128.617C46.6481 129.085 45.9319 129.397 45.1361 129.397C44.4199 129.397 43.7037 129.163 43.0671 128.695C42.4304 128.227 42.0325 127.603 41.8734 126.9C41.7142 126.198 41.7938 125.418 42.1122 124.794C61.1314 84.9971 -20.7549 43.0937 51.9002 0.410047C52.4573 0.0979176 53.1735 -0.058147 53.8102 0.0198853C54.4468 0.0979176 55.0834 0.332014 55.6405 0.800208C56.118 1.2684 56.5158 1.81462 56.675 2.43888C56.8341 2.98511 56.8341 3.6874 56.5954 4.31166Z"
                fill="white"
              />
              <path
                d="M7.8115 49.4144C-17.4942 81.0953 26.8306 99.3547 26.2735 125.886C26.2735 126.588 26.4327 127.29 26.9102 127.836C27.308 128.383 27.9447 128.851 28.6609 129.007C29.3771 129.163 30.0932 129.163 30.7299 128.929C31.3665 128.695 31.9235 128.226 32.3214 127.602C45.8496 103.725 14.1777 76.8035 13.5411 51.3652C13.5411 50.7409 13.3023 50.0386 12.9044 49.4924C12.5066 48.9462 11.9495 48.556 11.3129 48.3219C10.6763 48.0878 9.96007 48.0878 9.32345 48.2439C8.68682 48.4 8.20939 48.9462 7.8115 49.4144Z"
                fill="white"
              />
              <path
                d="M66.7775 34.5881C69.1648 64.1622 95.3459 93.19 61.7641 127.524C61.2866 127.992 61.0479 128.616 61.0479 129.241C61.0479 129.865 61.2071 130.489 61.605 131.035C62.0028 131.504 62.5599 131.894 63.1965 131.972C63.8331 132.05 64.4697 131.972 65.0267 131.66C131.633 93.0339 85.0008 68.2198 71.9501 33.5737C71.7113 32.9495 71.3134 32.4813 70.7564 32.1691C70.1994 31.857 69.5627 31.779 68.9261 31.857C68.2894 31.935 67.7324 32.3252 67.3345 32.7934C66.9366 33.2616 66.7775 33.9639 66.7775 34.5881Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
      </div>
      {/* mobile ends */}
    </div>
  );
}
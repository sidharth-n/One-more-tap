import React from "react";
import SecondsLeft from "./components/SecondsLeft.tsx";
import BeatsLeft from "./components/BeatsLeft";
import DaysLeft from "./components/DaysLeft";
import MinutesLeft from "./components/MinutesLeft";
import BreathsLeft from "./components/BreathsLeft";
import WeeksLeft from "./components/WeeksLeft";
import MonthsLeft from "./components/MonthsLeft";
import HoursLeft from "./components/HoursLeft";

interface Review {
  value: string;
}

const ResultPage: React.FC<{ age: number }> = ({ age }) => {
  const maxAge = 73.16;
  const progress = parseFloat(((age / maxAge) * 100).toFixed(1));

  console.log(age, maxAge, progress);
  const ageLeft = (maxAge - age).toFixed(2);
  return (
    <div className="content-area flex flex-col justify-center items-stretch gap-4 p-4 pb-6">
      <li className="flex items-center gap-4">
        <img
          src="https://openclipart.org/image/800px/248459"
          alt=""
          className="h-16 w-16 rounded-xl object-cover"
        />

        <div>
          <h3 className="text-[15px] text-gray-900 ">Your Life Status</h3>
          <div>
            <span id="ProgressLabel" className="sr-only">
              Loading
            </span>

            <div
              role="progressbar"
              aria-labelledby="ProgressLabel"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              className="block rounded-full bg-gray-200"
            >
              <span
                className="block h-4 rounded-full bg-indigo-600 text-center text-[10px]/4"
                style={{ width: `${progress}%` }}
              >
                <span className="font-bold text-white"> {`${progress}%`} </span>
              </span>
            </div>
          </div>
          <dl className="mt-0.5 space-y-px text-[12px] text-gray-500">
            <div className="flex flex-col">
              <dd className="inline">{`your age : ${age}`}</dd>
              <dd className="inline">current life expectancy : 73.16</dd>
            </div>
          </dl>
        </div>
      </li>
      <h2 class="text-3xl font-bold sm:text-4xl self-center">
        Remaining assets
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-calendar-days"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
            <path d="M8 14h.01" />
            <path d="M12 14h.01" />
            <path d="M16 14h.01" />
            <path d="M8 18h.01" />
            <path d="M12 18h.01" />
            <path d="M16 18h.01" />
          </svg>
          <h2 className="mt-2 font-bold">Years</h2>
          <div className="flow-root mt-3">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              {ageLeft}
            </dl>
          </div>
        </a>
        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-calendar"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
          <h2 className="mt-2 font-bold">Months </h2>
          <div className="flow-root mt-3">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <MonthsLeft timeLeft={ageLeft} />
            </dl>
          </div>
        </a>
        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-gantt-chart-square"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M9 8h7" />
            <path d="M8 12h6" />
            <path d="M11 16h5" />
          </svg>
          <h2 className="mt-2 font-bold">Weeks </h2>
          <div className="flow-root mt-3">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <WeeksLeft timeLeft={ageLeft} />
            </dl>
          </div>
        </a>
        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-cloud-sun"
          >
            <path d="M12 2v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="M20 12h2" />
            <path d="m19.07 4.93-1.41 1.41" />
            <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
            <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
          </svg>
          <h2 className="mt-2 font-bold">Days </h2>
          <div className="flow-root mt-3">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <DaysLeft timeLeft={ageLeft} />
            </dl>
          </div>
        </a>
        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-hourglass"
          >
            <path d="M5 22h14" />
            <path d="M5 2h14" />
            <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
            <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
          </svg>
          <h2 className="mt-2 font-bold">Hours </h2>
          <div className="flow-root mt-3">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <HoursLeft timeLeft={ageLeft} />
            </dl>
          </div>
        </a>
        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-alarm-clock"
          >
            <circle cx="12" cy="13" r="8" />
            <path d="M12 9v4l2 2" />
            <path d="M5 3 2 6" />
            <path d="m22 6-3-3" />
            <path d="M6.38 18.7 4 21" />
            <path d="M17.64 18.67 20 21" />
          </svg>
          <h2 className="mt-2 font-bold">Minutes </h2>
          <div className="flow-root mt-3">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <MinutesLeft timeLeft={ageLeft} />
            </dl>
          </div>
        </a>
        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-timer-reset"
          >
            <path d="M10 2h4" />
            <path d="M12 14v-4" />
            <path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" />
            <path d="M9 17H4v5" />
          </svg>
          <h2 className="mt-2 font-bold">Seconds </h2>
          <div className="flow-root mt-3">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <SecondsLeft timeLeft={ageLeft} />
            </dl>
          </div>
        </a>
        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-heart-pulse"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
          </svg>
          <h2 className="mt-2 font-bold">Heartbeats </h2>
          <div className="flow-root mt-3">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <BeatsLeft timeLeft={ageLeft} />
            </dl>
          </div>
        </a>
        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-sunrise"
          >
            <path d="M12 2v8" />
            <path d="m4.93 10.93 1.41 1.41" />
            <path d="M2 18h2" />
            <path d="M20 18h2" />
            <path d="m19.07 10.93-1.41 1.41" />
            <path d="M22 22H2" />
            <path d="m8 6 4-4 4 4" />
            <path d="M16 18a4 4 0 0 0-8 0" />
          </svg>
          <h2 className="mt-2 font-bold">Sunrises </h2>
          <div className="flow-root mt-3">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <DaysLeft timeLeft={ageLeft} />
            </dl>
          </div>
        </a>
        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-refresh-ccw"
          >
            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
            <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
            <path d="M16 16h5v5" />
          </svg>
          <h2 className="mt-2 font-bold">Breaths </h2>
          <div className="flow-root mt-3">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <BreathsLeft timeLeft={ageLeft} />
            </dl>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ResultPage;

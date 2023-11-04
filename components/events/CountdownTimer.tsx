import { useState, useEffect } from 'react';
import CountdownTimerProps from '@interfaces/events/CountdownTimer';

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState(
    targetDate.getTime() - Date.now()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(targetDate.getTime() - Date.now());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
  const seconds = Math.floor((timeRemaining / 1000) % 60);

  return (
    <div className="grid grid-cols-4 gap-2 xl:gap-4">
      <div className="flex flex-col items-center rounded-xl border-b-4 border-gray-400 bg-white p-2 xl:border-b-8">
        <p className="text-sm font-bold md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl">
          {days}
        </p>
        <p className="text-xs font-bold 2xl:text-base">DAYS</p>
      </div>
      <div className="flex flex-col items-center rounded-xl border-b-4 border-gray-400 bg-white p-2 xl:border-b-8">
        <p className="text-sm font-bold md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl">
          {hours}
        </p>
        <p className="text-xs font-bold 2xl:text-base">HRS</p>
      </div>
      <div className="flex flex-col items-center rounded-xl border-b-4 border-gray-400 bg-white p-2 xl:border-b-8">
        <p className="text-sm font-bold md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl">
          {minutes}
        </p>
        <p className="text-xs font-bold 2xl:text-base">MINS</p>
      </div>
      <div className="flex flex-col items-center rounded-xl border-b-4 border-gray-400 bg-white p-2 xl:border-b-8">
        <p className="text-sm font-bold md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl">
          {seconds}
        </p>
        <p className="text-xs font-bold 2xl:text-base">SECS</p>
      </div>
    </div>
  );
};

export default CountdownTimer;

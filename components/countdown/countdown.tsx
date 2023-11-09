"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  startDate?: Date;
};

const Separator = () => <span className="items-center flex md:px-2">:</span>;

const Countdown = ({ startDate }: Props) => {
  const [countDownTime, setCountDownTIme] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const secondTimer: any = useRef(null);

  const getTimeDifference = (countDownDate: any) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownDate - currentTime;
    const days = Math.floor(timeDiffrence / (24 * 60 * 60 * 1000));
    const hours = Math.floor(
      (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDiffrence % (60 * 1000)) / 1000);
    if (timeDiffrence < 0) {
      if (secondTimer.current) {
        secondTimer.current.className = "";
      }

      setCountDownTIme({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });

      clearInterval(
        setInterval(() => {
          getTimeDifference(countDownDate.getTime());
        }, 1000)
      );
    } else {
      if (secondTimer.current) {
        secondTimer.current.className = "";
        secondTimer.current.className = "animate-timer";
      }

      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };

  const startCountDown = useCallback(() => {
    const customDate = startDate ? startDate : new Date();
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth(),
      customDate.getDate(),
      customDate.getHours(),
      customDate.getMinutes(),
      customDate.getSeconds()
    );

    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, [getTimeDifference, startDate]);

  useEffect(() => {
    startCountDown();
  }, [startCountDown]);

  return (
    <div className="flex gap-3 sm:gap-1 flex-row overflow-hidden md:text-sm text-[11px] font-medium">
      <div className="flex flex-col">
        <div className="">
          <div className="h-full flex justify-center">
            <div
              className={
                countDownTime?.days >= 0 &&
                countDownTime?.hours == 23 &&
                countDownTime?.minutes == 59 &&
                countDownTime?.seconds == 59
                  ? "animate-timer"
                  : ""
              }
            >
              {countDownTime?.days}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="md:text-sm text-[11px] font-medium text-center">
            Hari
          </span>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col">
        <div className="">
          <div className="h-full flex justify-center">
            <div
              className={
                countDownTime?.hours >= 0 &&
                countDownTime?.minutes == 59 &&
                countDownTime?.seconds == 59
                  ? "animate-timer"
                  : ""
              }
            >
              {countDownTime?.hours}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="md:text-sm text-[11px] font-medium text-center">
            Jam
          </span>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col">
        <div className="">
          <div className="h-full flex justify-center">
            <div
              className={
                countDownTime?.minutes >= 0 && countDownTime?.seconds == 59
                  ? "animate-timer"
                  : ""
              }
            >
              {countDownTime?.minutes}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="md:text-sm text-[11px] font-medium text-center">
            Menit
          </span>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col">
        <div className="">
          <div className="h-full flex justify-center  overflow-hidden md:text-sm text-[11px] font-medium">
            <div ref={secondTimer}>{countDownTime?.seconds}</div>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="md:text-sm text-[11px] font-medium text-center">
            Detik
          </span>
        </div>
      </div>
    </div>
  );
};
export default Countdown;

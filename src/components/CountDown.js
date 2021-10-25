import "./CountDown.css";
import { useState, useEffect } from "React";

const CountDown = (props) => {
  const [days, setDays] = useState(10);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(10);

  const countdown = () => {
    const endDate = new Date("Dec 25, 2021 16:00:00").getTime();
    const today = new Date().getTime();

    const timeDiff = endDate - today;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let timeDays = Math.floor(timeDiff / days);
    let timeHours = Math.floor((timeDiff % days) / hours);
    let timeMintues = Math.floor((timeDiff % hours) / minutes);
    let timeSeconds = Math.floor((timeDiff % minutes) / seconds);

    setDays(timeDays);
    setHours(timeHours);
    setMinutes(timeMintues);
    setSeconds(timeSeconds);
  };
  useEffect(() => {
    setInterval(countdown, 1000);
  });
};

export default CountDown;

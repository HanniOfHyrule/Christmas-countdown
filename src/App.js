/* eslint-disable jsx-a11y/img-redundant-alt */
import "./App.css";
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import background from "./images/8121.jpg";

function App() {
  const [days, setDays] = useState("H");
  const [hours, setHours] = useState("O");
  const [minutes, setMinutes] = useState("H");
  const [seconds, setSeconds] = useState("O");

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

  return (
    <>
      <section className="container">
        <h1>Christmas CountDown</h1>
        <div className="countdown">
          <article>
            <p>{days}</p>
            <h3>Days</h3>
          </article>
          <article>
            <p>{hours}</p>
            <h3>Hours</h3>
          </article>
          <article>
            <p>{minutes}</p>
            <h3>min</h3>
          </article>
          <arcticle>
            <p>{seconds}</p>
            <h3>sec</h3>
          </arcticle>
        </div>
      </section>
    </>
  );
}

export default App;

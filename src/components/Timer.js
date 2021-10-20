import "./Timer.css";

const Timer = () => {
  const countDownDate = new Date("Dec 24, 2021 16:00:00");

  const todaysDate = setInterval(function () {
    const now = new Date("Oct 20, 2021 09:34:15").getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      distance / (1000 * 60 * 60 * 24) / (1000 * 60 * 60)
    );
    const Miuntes = Math.floor(distance / (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(distance / (1000 * 60) / 1000);
  });
  return (
    <div className="header-Christmas">
      <h1 className="countdown">Christmas Countdown: {countDownDate}</h1>
    </div>
  );
};

export default Timer;

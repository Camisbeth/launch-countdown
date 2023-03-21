import { useState, useEffect, useMemo } from "react";

function Number(props) {
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = props.targetDate - now;
      setDistance(distance);
    }, 1000);

    return () => clearInterval(interval);
  }, [props.targetDate]);

  const [days, hours, minutes, seconds] = useMemo(() => {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
  }, [distance]);

  return (
    <section className="sectionCards">
      <section className="sectionDaysAndNumbers">
        <p className="number">{days}</p>
        <p className="titleCard">DAYS</p>
      </section>

      <section className="sectionDaysAndNumbers">
        <p className="number">{hours}</p>
        <p className="titleCard">HOURS</p>
      </section>

      <section className="sectionDaysAndNumbers">
        <p className="number">{minutes}</p>
        <p className="titleCard">MINUTES</p>
      </section>

      <section className="sectionDaysAndNumbers">
        <p className="number">{seconds}</p>
        <p className="titleCard">SECONDS</p>
      </section>
    </section>
  );
}

export default Number;

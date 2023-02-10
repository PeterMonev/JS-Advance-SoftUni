function timeToWalk(distance, footstep, kmh) {
  "use strict";

  const distanceMeters = distance * footstep;
  const speedPersec = kmh / 3.6;
  const time = distanceMeters / speedPersec;
  const rest = Math.floor(distanceMeters / 500);

  const timeMin = Math.floor(time / 60);
  const timeSec = Math.round(time - timeMin * 60);
  const timeHour = Math.floor(time / 3600);

  console.log(
    (timeHour < 10 ? "0" : "") +
      timeHour +
      ":" +
      (timeMin + rest < 10 ? "0" : "") +
      (timeMin + rest) +
      ":" +
      (timeSec < 10 ? "0" : "") +
      timeSec
  );
}
timeToWalk(4000, 0.6, 5);

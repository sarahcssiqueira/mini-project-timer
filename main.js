let defaultEndDate = new Date("Dec 31, 2022 23:59:59");

let x = setInterval(() => {
  let now = new Date().getTime();
  let distance = defaultEndDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
  let seconds = Math.floor(distance % (1000 * 60) / (1000));

  
  document.getElementById('days').innerHTML = `${days}`;
  document.getElementById('hours').innerHTML = `${hours}`;
  document.getElementById('minutes').innerHTML = `${minutes}`;
  document.getElementById('seconds').innerHTML = `${seconds}`;

  if (distance < 0) {
    clearInterval (x);
    document.getElementById('demo').innerHTML="Expired";
  };

}, 1000);
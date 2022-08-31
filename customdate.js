const form = document.querySelector("#setDate");

form.addEventListener("click", function getInputDate(e){
  e.preventDefault();

  const formInput = document.querySelector("#inputDate");
  const inputDate = formInput.value;
  
  return(inputDate);

});

// let endDate = getInputDate()

//

let defaultEndDate = new Date("Dec 31, 2022 23:59:59");

let x = setInterval(() => {
  let now = new Date().getTime();
  let distance = defaultEndDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
  let seconds = Math.floor(distance % (1000 * 60) / (1000));

  document.getElementById('demo').innerHTML = `${days} d  ${hours} h  ${minutes} m  ${seconds} s  `;

  if (distance < 0) {
    clearInterval (x);
    document.getElementById('demo').innerHTML="Expired";
  };

}, 1000);
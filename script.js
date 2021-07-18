window.onload = function () {
  let rating = document.getElementById("rate").value;
  let ratingValue = document.getElementById("rateValue");
  ratingValue.innerHTML = rating + "%";
};
function compute(e) {
  e.preventDefault();

  let ammount = document.getElementById("principal");
  let ineterestRate = document.getElementById("rate").value;
  let years = document.getElementById("years").value;
  let result = document.getElementById("result");
  let year = parseInt(new Date().getFullYear()) + +years;
  if (!ammount.value || ammount.value <= 0) {
    result.style.color = "red";
    result.innerHTML =
      "Error : please provide a valid positive ammount number! ";
    ammount.focus();
  } else {
    result.style.color = "black";
    result.innerHTML =
      "if you deposit <span>" +
      ammount.value +
      "</span>,<br/>at an interest rate of <span>" +
      ineterestRate +
      "%</span>.<br/>You will receive an ammount of <span> " +
      ((ammount.value * ineterestRate) / 100) * years +
      "</span>,<br/>in the year <span>" +
      year +
      "</span>";
  }
}

function handleChange(e) {
  let ratingValue = document.getElementById("rateValue");
  ratingValue.innerHTML = e.target.value + "%";
}

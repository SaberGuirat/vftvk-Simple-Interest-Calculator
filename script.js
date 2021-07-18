window.onload = function () {
  let rating = document.getElementById("rate").value;
  let ratingValue = document.getElementById("rateValue");
  ratingValue.innerHTML = rating + "%";
};
function compute(e) {
  e.preventDefault();

  let ammount = document.getElementById("principal").value;
  let ineterestRate = document.getElementById("rate").value;
  let years = document.getElementById("years").value;
  let result = document.getElementById("result");
  let year = parseInt(new Date().getFullYear()) + +years;
  if (!ammount || !ineterestRate || !years) {
    result.style.color = "red";
    result.innerHTML = "Error please fill in all fields ! ";
  } else {
    result.style.color = "black";
    result.innerHTML =
      "if you deposit " +
      ammount +
      ",<br/>at an interest rate of " +
      ineterestRate +
      "%.<br/>You will receive an ammount of " +
      ((ammount * ineterestRate) / 100) * years +
      ",<br/>in the year " +
      year;
  }
}

function handleChange(e) {
  let ratingValue = document.getElementById("rateValue");
  ratingValue.innerHTML = e.target.value + "%";
}

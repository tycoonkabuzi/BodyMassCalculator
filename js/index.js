const imperial = document.getElementById("imperial");
const metric = document.getElementById("metric");
const normalMesure = document.querySelector(".header__container__form__input");
const differentMesure = document.querySelector(
  ".header__container__form__inputImperial"
);
const height = document.getElementById("height");
const weight = document.getElementById("weight");
weight.addEventListener("change", () => {
  bmiCalculation(weight.value, height.value);
});
// pass from one measurement to another
imperial.addEventListener("click", () => {
  differentMesure.style.display = "grid";
  normalMesure.style.display = "none";
});
metric.addEventListener("click", () => {
  normalMesure.style.display = "grid";
  differentMesure.style.display = "none";
});

function bmiCalculation(weight, height) {
  const bmi = document.querySelector(
    ".header__container__form__banner__result h2"
  );
  const descriptionBarner = document.querySelector(
    ".header__container__form__banner"
  );
  const description = document.querySelector(
    ".header__container__form__banner__resume p"
  );

  let heightInMetters = height / 100;

  //console.log();
  let result = weight / Math.pow(heightInMetters, 2);

  bmi.innerText = result.toFixed(1);

  fromMetricToImperial(weight, heightInMetters);
  let gradientBlue = "linear-gradient( to right,#345ff6,#587dff)";
  let gradientOrange = "linear-gradient( to right,#d88423,#d68b34)";
  let gradientGreen = "linear-gradient( to right,#25a939,#39ae4b)";

  let gradientRed = "linear-gradient( to right,#b71515,#d24848)";
  switch (true) {
    case result < 18.5:
      descriptionBarner.style.background = gradientGreen;
      description.innerText =
        "Your BMI suggest that you  are underweight, you should try to eat more in order to add some weight, in order to be healthy ";

      break;
    case result >= 18.5 && result <= 24.9:
      descriptionBarner.style.background = gradientBlue;
      description.innerText =
        "Your BMI suggest that you you're healthy weight. Your ideal weight is between 63.5kg - 85.6kg .";
      break;
    case result >= 25 && result <= 29.9:
      descriptionBarner.style.background = gradientOrange;
      description.innerText =
        "Your BMI suggest that you're overweight, it is ideal for you to think about loosing some weight";
      break;
    case result >= 30:
      descriptionBarner.style.background = gradientRed;
      description.innerText =
        "Your BMI suggest that you're in obesity,Think about getting a Gym membership, it would help.";
      break;
    default:
      descriptionBarner.style.background = "purpule";
      console.log("No Data");
  }
}
function fromMetricToImperial(weight, height) {
  const feetsDom = document.getElementById("feet");
  const inchesDom = document.getElementById("inches");
  const stonesDom = document.getElementById("stones");
  const poundsDom = document.getElementById("pounds");
  let inches = height * 39.3701;
  let feets = Math.floor(inches / 12);
  let inchesRemaining = Math.round(inches % 12);
  let pounds = weight * 2.20462;
  let stones = Math.floor(pounds / 14);
  let remainingPounds = Math.round(pounds % 14);
  console.log(remainingPounds);
  feetsDom.value = feets;
  inchesDom.value = inchesRemaining;
  stonesDom.value = stones;
  poundsDom.value = remainingPounds;
}

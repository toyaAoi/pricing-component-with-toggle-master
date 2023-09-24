const swtch = document.getElementsByClassName("switch");
const toggler = document.getElementById("toggler");
const basicPrice = document.getElementById("basic-price");
const professionalPrice = document.getElementById("professional-price");
const masterPrice = document.getElementById("master-price");

let plan = 0;

const monthly = function () {
  toggler.style.transform = "translate(90%)";
  basicPrice.innerHTML = "19.99";
  professionalPrice.innerHTML = "24.99";
  masterPrice.innerHTML = "39.99";
  plan = 0;
};

const anually = function () {
  toggler.style.transform = "translate(0)";
  basicPrice.innerHTML = "199.99";
  professionalPrice.innerHTML = "249.99";
  masterPrice.innerHTML = "399.99";
  plan = 1;
};

swtch[0].addEventListener("click", function () {
  if (plan === 1) {
    monthly();
  } else if (plan === 0) {
    anually();
  }
});

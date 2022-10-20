var rating = document.querySelector(".main-container");
var thankYou = document.querySelector(".thank-you");
var submitButton = document.getElementById("submit");
var rateAgainButton = document.getElementById("rate-again");
var rates = document.querySelectorAll(".btn");
var span = document.getElementById("your-rating");
var rate;

submitButton.addEventListener("click", function() {
  thankYou.classList.remove("hidden");
  rating.classList.add("hidden");
});

rateAgainButton.addEventListener("click", function() {
  thankYou.classList.add("hidden");
  rating.classList.remove("hidden");
});

for(i of rates){
  i.addEventListener("click", function(){
    span.innerHTML = this.innerHTML;
  })
}

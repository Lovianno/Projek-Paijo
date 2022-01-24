// pop up 1
const container = document.querySelector(".container");
const button1 = document.getElementById("button1");

button1.addEventListener("click", function (e) {
  container.style.display = "none";
  container2.style.display = "block";
  // containerBonus.style.display = "block";
  e.preventDefault();
});
button1.addEventListener("click", tampilNama);

// pop up bonus
const containerBonus = document.querySelector(".containerBonus");
const submitBonus = document.querySelector(".buttonBonus");

buttonBonus.addEventListener("click", function () {
  container.style.display = "none";
});
// pop up 2
var audio = new Audio("music/Dandelions.mp3");
const button2 = document.getElementById("button2");
const container2 = document.querySelector(".container2");
button2.addEventListener("click", function (event) {
  container3.style.display = "block";
  container2.style.display = "none";
  audio.play();

  event.preventDefault();
});

// pop up 3
const button3 = document.getElementById("button3");
const container3 = document.querySelector(".container3");
const button4 = document.getElementById("button4");
button3.addEventListener("click", function (event) {
  container3.style.display = "none";
  containerFoto.style.display = "block";
  container4total.style.display = "flex";
  container4.style.display="block"
  setTimeout(function(){
    button4.style.display = "block";
  },12000)
  // gsap
  hasil = tampilNama();
  gsap.to(".p1", { duration: 12, text: "Bahkan gula pun akan kalah manisnya ketika kamu tersenyum kepadaku.<br> Dari: Aku, untuk : " + hasil + " ❤️"  });
  // end gsap
  event.preventDefault();
  namaHalo.innerHTML=hasil;
  p0.style.display="inline-block"
});
// pop up 4
const container4total = document.querySelector(".container4total");
const container4 = document.querySelector(".container4");
const containerFoto = document.querySelector(".containerFoto");
const p0 = document.querySelector('.p0');
let namaHalo = document.getElementById('namaHalo');

gsap.registerPlugin(TextPlugin);

// gsap.to(".p1", { duration: 3, text: "Bahkan gula pun akan kalah manisnya ketika kamu tersenyum kepadaku." });

// pop up 5
const container5 = document.querySelector(".container5");
const button51 = document.getElementById("button51");
const button52 = document.getElementById("button52");

button4.addEventListener("click", function () {
  container5.style.display = "block";
  container4total.style.display="none";
  let nama5 = document.getElementById("nama5");
  hasil = tampilNama();
  nama5.innerHTML = hasil;
});

button51.addEventListener("click", function () {
  container61.style.display = "block";
  container5.style.display = "none";
});
button52.addEventListener("click", function () {
  container62.style.display = "block";
  container5.style.display = "none";
});

// pop up 6.1
const button61 = document.getElementById("button61");
const container61 = document.querySelector(".container61");
// slider
function slider() {
  let range = document.getElementById("range").value;
  let rangeAngka = document.getElementById("rangeAngka");
  let rangeAngka2 = document.getElementById("rangeAngka2");
  rangeAngka.innerHTML = range;
  rangeAngka2.innerHTML = range;
}
range.addEventListener("input", slider);
// end slider
button61.addEventListener("click", function () {
  container61.style.display = "none";
  container71.style.display = "block";
});

button61.addEventListener("click", slider);

// pop up 7.1
const container71 = document.querySelector(".container71");
const button71 = document.getElementById("button71");
button71.addEventListener("click", function () {
  container71.style.display = "none";
  button4.style.display="none";
  buttonEnd1.style.display="block";
  container4total.style.display="flex";
});

// pop up 62
const button62 = document.getElementById("button62");
const container62 = document.querySelector(".container62");
button62.addEventListener("click", function () {
  container62.style.display = "none";
  container4total.style.display="flex";
  button4.style.display="none";
  buttonEnd2.style.display="block";
});

// Last BUtton
const buttonEnd1   = document.getElementById('buttonEnd');
const buttonEnd2 = document.getElementById('buttonEnd1');

buttonEnd1.addEventListener('click',function(){
  nama=tampilNama()
  let range = document.getElementById("range").value;
  document.location.href="https://api.whatsapp.com/send?phone=&text=Hai,%20aku%20"+nama+", mau bilang kalau aku Sayang Kamu *"+ range + "%*";
})
buttonEnd2.addEventListener('click',function(){
  nama=tampilNama()
  document.location.href="https://api.whatsapp.com/send?phone=&text=Hai,%20aku%20"+nama+", mau%20bilang%20kalo%20aku%20*Gak Sayang*%20sama%20Kamu🙏🏻";
})

// --- Function Nama--- //

function tampilNama() {
  const containerBonus = document.querySelector(".containerBonus");
  const container2 = document.querySelector(".container2");
  let inp = document.querySelector("input").value;
  let hasil = document.getElementById("nama");
  hasil.innerHTML = inp;

  if (inp.length < 1) {
    // (inp.length < 1)
    containerBonus.style.display = "block";
    container2.style.display = "none";
  }
  return inp;
}
// function rulesNama() {
//   let inp = document.querySelector("input").value;
//   let hasil = document.getElementById("nama");
//   hasil.innerHTML = inp;
//   if (inp) return false;
// }

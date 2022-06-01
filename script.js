let angkakm = document.getElementById("Km");
let angkahm = document.getElementById("Hm");
let angkadam = document.getElementById("Dam");
let angkam = document.getElementById("M");
let angkadm = document.getElementById("Dm");
let angkacm = document.getElementById("Cm");
let angkamm = document.getElementById("Mm");

angkakm.addEventListener("change", () => {
  km = angkakm.value;
  angkahm.value = (km * 10).toFixed(2);
  angkadam.value = (km * 100).toFixed(2);
  angkam.value = (km * 1000).toFixed(2);
  angkadm.value = (km * 10000).toFixed(2);
  angkacm.value = (km * 100000).toFixed(2);
  angkamm.value = (km * 1000000).toFixed(2);
});

angkahm.addEventListener("change", () => {
  hm = angkahm.value;
  angkakm.value = (hm / 10).toFixed(2);
  angkadam.value = (hm * 10).toFixed(2);
  angkam.value = (hm * 100).toFixed(2);
  angkadm.value = (hm * 1000).toFixed(2);
  angkacm.value = (hm * 10000).toFixed(2);
  angkamm.value = (hm * 100000).toFixed(2);
});

angkadam.addEventListener("change", () => {
  dam = angkadam.value;
  angkakm.value = (dam / 100).toFixed(2);
  angkahm.value = (dam / 10).toFixed(2);
  angkam.value = (dam * 10).toFixed(2);
  angkadm.value = (dam * 100).toFixed(2);
  angkacm.value = (dam * 1000).toFixed(2);
  angkamm.value = (dam * 10000).toFixed(2);
});

angkam.addEventListener("change", () => {
  m = angkam.value;
  angkakm.value = (m / 1000).toFixed(2);
  angkahm.value = (m / 100).toFixed(2);
  angkadam.value = (m / 10).toFixed(2);
  angkadm.value = (m * 10).toFixed(2);
  angkacm.value = (m * 100).toFixed(2);
  angkamm.value = (m * 1000).toFixed(2);
});

angkadm.addEventListener("change", () => {
  dam = angkadam.value;
  angkakm.value = (dam / 10000).toFixed(2);
  angkahm.value = (dam / 1000).toFixed(2);
  angkam.value = (dam / 100).toFixed(2);
  angkadam.value = (dam / 10).toFixed(2);
  angkacm.value = (dam * 10).toFixed(2);
  angkamm.value = (dam * 100).toFixed(2);
});

angkacm.addEventListener("change", () => {
  cm = angkacm.value;
  angkakm.value = (cm / 100000).toFixed(2);
  angkahm.value = (cm / 10000).toFixed(2);
  angkam.value = (cm / 1000).toFixed(2);
  angkadam.value = (cm / 100).toFixed(2);
  angkadm.value = (cm / 10).toFixed(2);
  angkamm.value = (cm * 10).toFixed(2);
});

angkamm.addEventListener("change", () => {
  mm = angkamm.value;
  angkakm.value = (mm / 1000000).toFixed(2);
  angkahm.value = (mm / 100000).toFixed(2);
  angkam.value = (mm / 10000).toFixed(2);
  angkadam.value = (mm / 1000).toFixed(2);
  angkadm.value = (mm / 100).toFixed(2);
  angkacm.value = (mm / 10).toFixed(2);
});

let buttonclear = document.getElementById("buttonclear");

buttonclear.addEventListener("click", () => {
  angkakm.value = "";
  angkahm.value = "";
  angkadam.value = "";
  angkam.value = "";
  angkadm.value = "";
  angkacm.value = "";
  angkamm.value = "";
});

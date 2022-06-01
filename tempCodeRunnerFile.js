let angkakm = document.getElementById("Km");
let angkahm = document.getElementById("Hm");
let angkadam = document.getElementById("Dam");
let angkam = document.getElementById("M");
let angkadm = document.getElementById("Dm");
let angkacm = document.getElementById("Cm");
let angkamm = document.getElementById("Mm");

let darikm = () => {
  let km = angkakm.value;
  angkahm.value = (km * 10).toFixed(2);
  angkadam.value = (km * 100).toFixed(2);
  angkam.value = (km * 1000).toFixed(2);
  angkadm.value = (km * 10000).toFixed(2);
  angkacm.value = (km * 100000).toFixed(2);
  angkamm.value = (km * 1000000).toFixed(2);
};

angkakm.addEventListener("input", darikm);

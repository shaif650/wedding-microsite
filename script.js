const countdownEl = document.getElementById("countdown");
const targetDate = new Date("2025-09-20T00:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  countdownEl.innerText = `${days}h ${hours}j ${minutes}m ${seconds}s`;
}, 1000);
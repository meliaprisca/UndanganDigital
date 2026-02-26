function openInvite() {
    document.getElementById("opening").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
    document.getElementById("bg-music").play();
}

// Countdown
const eventDate = new Date("2026-03-11T15:30:00").getTime();
const countdownEl = document.getElementById("countdown");

setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        countdownEl.innerHTML = "Acara sedang berlangsung";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    countdownEl.innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit`;
}, 1000);

// RSVP demo
document.getElementById("rsvp-form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Terima kasih atas konfirmasinya 💐");
    e.target.reset();
});
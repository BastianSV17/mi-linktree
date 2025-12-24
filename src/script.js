const links = [
    {
        name: "Facebook",
        url: "https://facebook.com/",
        icon: "fa-brands fa-facebook-f",
        color: "#1877F2"
    },
    {
        name: "Instagram",
        url: "https://instagram.com/",
        icon: "fa-brands fa-instagram",
        color: "#E4405F"
    },
    {
        name: "YouTube",
        url: "https://youtube.com/",
        icon: "fa-brands fa-youtube",
        color: "#FF0000"
    },
    {
        name: "Spotify",
        url: "https://open.spotify.com/",
        icon: "fa-brands fa-spotify",
        color: "#1DB954"
    },
    {
        name: "WhatsApp",
        url: "https://wa.me/591XXXXXXXX",
        icon: "fa-brands fa-whatsapp",
        color: "#25D366"
    }
];

const container = document.getElementById("links");

links.forEach(l => {
    const a = document.createElement("a");
    a.href = l.url;
    a.target = "_blank";
    a.className = "link";
    a.style.background = l.color;

    a.innerHTML = `<i class="${l.icon}"></i> ${l.name}`;

    container.appendChild(a);
});

const btn = document.getElementById("darkModeBtn");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
    body.classList.add("light");
}

btn.addEventListener("click", () => {
    body.classList.toggle("light");
    localStorage.setItem("theme", body.classList.contains("light") ? "light" : "dark");
});

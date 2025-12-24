const links = [
    {
        name: "Facebook",
        url: "https://www.facebook.com/IglesiaMayorazgoUCE",
        icon: "fa-brands fa-facebook-f",
        color: "#1877F2"
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/iglesiamayorazgo/",
        icon: "fa-brands fa-instagram",
        color: "#E4405F"
    },
    {
        name: "YouTube",
        url: "https://www.youtube.com/@iglesiamayorazgouce9420",
        icon: "fa-brands fa-youtube",
        color: "#FF0000"
    },
    {
        name: "Spotify",
        url: "https://open.spotify.com/show/156K4T7PQsteEFsH28y8jI?si=f5941c8f68964770",
        icon: "fa-brands fa-spotify",
        color: "#1DB954"
    },
    {
        name: "TikTok",
        url: "https://www.tiktok.com/@iglesia.mayorazgo",
        icon: "fa-brands fa-tiktok",
        color: "#000000"
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

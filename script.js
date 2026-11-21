function enterWebsite() {

    document.getElementById("welcome").classList.add("hidden");

    document.getElementById("main").classList.remove("hidden");
const music = document.getElementById("background-music");

if (music) {
    music.volume = 0.35;
    music.play();
}
}

function showRoom(room) {

    let content = "";

    if (room === "gifts") {
    content = `
        <h2>🎁 Your Gifts!</h2>
        <p>Three little surprises are waiting for you.</p>

        <button onclick="openGift(1)">🎁 Gift 1</button>
        <button onclick="openGift(2)">🎁 Gift 2</button>
        <button onclick="openGift(3)">🎁 Gift 3</button>

        <div id="gift-message"></div>
    `;
}

   else if (room === "gallery") {
    content = `
        <h2>📸 Memory Lane</h2>

        <p class="gallery-subtitle">
            Little moments, beautiful memories. 💗
        </p>

        <div class="photo-gallery">

            <div class="polaroid">
                <img
                    src="https://picsum.photos/seed/memory1/400/400"
                    alt="Memory one"
                    onclick="openPhoto(this.src, this.alt)"
                >
                <p>Beautiful beginnings 🌸</p>
            </div>

            <div class="polaroid">
                <img
                    src="https://picsum.photos/seed/memory2/400/400"
                    alt="Memory two"
                    onclick="openPhoto(this.src, this.alt)"
                >
                <p>Little moments ✨</p>
            </div>

            <div class="polaroid">
                <img
                    src="https://picsum.photos/seed/memory3/400/400"
                    alt="Memory three"
                    onclick="openPhoto(this.src, this.alt)"
                >
                <p>Unforgettable days 💕</p>
            </div>

            <div class="polaroid">
                <img
                    src="https://picsum.photos/seed/memory4/400/400"
                    alt="Memory four"
                    onclick="openPhoto(this.src, this.alt)"
                >
                <p>Forever special 🎀</p>
            </div>

        </div>

        <div id="photo-modal" class="photo-modal"
             onclick="closePhoto()">

            <span class="close-photo">&times;</span>

            <img id="enlarged-photo" src="" alt="Enlarged memory">

        </div>
    `;
}


   else if (room === "letter") {

    content = `
        <div class="letter-room">

            <h2>💌 A Letter For You</h2>

            <p>Someone has written something special...</p>

            <div class="envelope" onclick="openLetter()">
                <div class="envelope-icon">💌</div>
                <p>CLICK TO OPEN</p>
            </div>

            <div id="letter-content"></div>

        </div>
    `;
}

   else if (room === "cake") {

    content = `
        <div class="birthday-room">

            <h2>🎂 The Birthday Celebration!</h2>

            <p>Make a wish. Something magical might happen! ✨</p>

            <div class="birthday-cake">

                <div class="candles">
                    <span class="candle">🕯️</span>
                    <span class="candle">🕯️</span>
                    <span class="candle">🕯️</span>
                </div>

                <div class="cake-top"></div>
                <div class="cake-middle"></div>
                <div class="cake-bottom"></div>

            </div>

            <button id="blow-button" onclick="blowCandles()">
                Blow the Candles! 🌬️
            </button>

            <div id="birthday-message"></div>

            <div id="confetti-container"></div>

        </div>
    `;
}
    document.getElementById("room-content").innerHTML = content;

}
function openGift(number) {

    let messages = {
        1: "Thank you for being in my life 💗",
        2: "May your life always be filled with happiness! 🌸",
        3: "The world is a little brighter with you in it! ✨"
    };

    let gift = document.getElementById("gift-message");

    gift.innerHTML = `
        <div class="gift-reveal">
            <div class="gift-animation">🎁</div>
            <h2> SURPRISE! 🎉 </h2>
            <p>${messages[number]}</p>
            <button onclick="closeGift()">Close Gift</button>
        </div>
    `;

}
function closeGift() {
    document.getElementById("gift-message").innerHTML = "";
}
function celebrate() {

    document.getElementById("room-content").innerHTML = `
        <h1>🎉 HAPPY BIRTHDAY! 🎉</h1>
        <p>May this year bring you countless beautiful moments! 💗</p>
        <h2>🎂🎈✨🎁</h2>
    `;

}
function openPhoto(src, description) {

    document.getElementById("photo-modal").style.display = "flex";

    document.getElementById("enlarged-photo").src = src;

    document.getElementById("enlarged-photo").alt = description;

}

function closePhoto() {

    document.getElementById("photo-modal").style.display = "none";

}
function revealSecret(number) {

    let secrets = {

        1: "You make ordinary moments extraordinary. 💗",

        2: "Some people are simply irreplaceable. 🌸",

        3: "Here's a little reminder: you deserve all the happiness in the universe! ✨"

    };

    document.getElementById("secret-message").innerHTML = `
        <div class="secret-card">
            <h2>✨ A little secret...</h2>
            <p>${secrets[number]}</p>
        </div>
    `;

}
function openLetter() {

    let message = `Happy Birthday Priyakhee 😊💗
    Thank you for being in my life and motivating me at my lowest 💟
    May your life be fiilled with happiness and may you get everything you deserve😸✨
    Stay blessed and keep smiling 💐 
    Feel so lucky to have someone like you in my life 🥺💖
    Once again best wishes dear 🤗`;

    let container = document.getElementById("letter-content");

    container.innerHTML = `
        <div class="letter-paper">
            <h3>To Someone Special 🌷</h3>
            <p id="typed-letter"></p>
        </div>
    `;

    let index = 0;

    let typing = setInterval(() => {

        if (index < message.length) {

            document.getElementById("typed-letter").innerHTML +=
                message.charAt(index) === "\n" ? "<br>" : message.charAt(index);

            index++;

        } else {

            clearInterval(typing);

        }

    }, 35);

}
function blowCandles() {

    document.querySelectorAll(".candle").forEach(candle => {
        candle.innerHTML = "💨";
    });

    document.getElementById("blow-button").disabled = true;

    document.getElementById("birthday-message").innerHTML = `
        <div class="celebration-message">
            <h1>HAPPY BIRTHDAY! 🎉</h1>
            <p>May all your beautiful wishes come true! 💗</p>
            <h2>🎈🎁🌸✨</h2>
        </div>
    `;

    launchConfetti();

}

function launchConfetti() {

    const container = document.getElementById("confetti-container");

    const emojis = ["🎉", "🎊", "💗", "✨", "🌸", "🎈"];

    for (let i = 0; i < 45; i++) {

        let piece = document.createElement("span");

        piece.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        piece.className = "confetti";

        piece.style.left = Math.random() * 100 + "%";

        piece.style.animationDelay = Math.random() * 2 + "s";

        container.appendChild(piece);

    }

}
// BACKGROUND BIRTHDAY MUSIC 🎵

const birthdayMusic = document.getElementById("background-music");

if (birthdayMusic) {

    birthdayMusic.volume = 0.35;

    function startBirthdayMusic() {

        birthdayMusic.play().catch(error => {
            console.log("Music could not start:", error);
        });

        document.removeEventListener("click", startBirthdayMusic);
        document.removeEventListener("touchstart", startBirthdayMusic);
    }

    // Try automatic playback
    window.addEventListener("load", () => {
        startBirthdayMusic();
    });

    // If the browser blocks autoplay, start after the first interaction
    document.addEventListener("click", startBirthdayMusic);
    document.addEventListener("touchstart", startBirthdayMusic);
}
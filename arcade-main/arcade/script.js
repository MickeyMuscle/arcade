document.addEventListener("DOMContentLoaded", function () {
    const gameStatus = document.getElementById("game-status");

    document.getElementById("start-game").addEventListener("click", function () {
        gameStatus.textContent = "Game Started! Prepare for battle!";
        gameStatus.style.color = "lime";
    });

    document.getElementById("leaderboard").addEventListener("click", function () {
        gameStatus.textContent = "Leaderboard Coming Soon!";
        gameStatus.style.color = "yellow";
    });

    document.getElementById("settings").addEventListener("click", function () {
        gameStatus.textContent = "Settings Under Construction!";
        gameStatus.style.color = "red";
    });
});

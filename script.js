document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("circle-container");

    // 產生隨機移動的圓形
    for (let i = 0; i < 20; i++) {
        const movingCircle = document.createElement("div");
        movingCircle.classList.add("moving-circle");
        movingCircle.style.width = `${Math.random() * 50 + 20}px`; // 圓形大小隨機
        movingCircle.style.height = movingCircle.style.width;
        movingCircle.style.left = `${Math.random() * 100}vw`; // 隨機水平位置
        movingCircle.style.top = `${Math.random() * 100}vh`; // 隨機垂直位置
        movingCircle.style.animationDuration = `${Math.random() * 5 + 3}s`; // 移動速度隨機
        container.appendChild(movingCircle);
    }
});
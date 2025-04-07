// 等待頁面完全加載
window.onload = function() {
  // 創建隨機圓形的函數
  function createRandomCircles(num) {
      const container = document.getElementById('circle-container');
      
      for (let i = 0; i < num; i++) {
          const circle = document.createElement('div');
          circle.classList.add('circle');
          
          // 設定隨機大小
          const size = Math.floor(Math.random() * (50 - 30 + 1)) + 30; // 範圍為30~50
          circle.style.width = `${size}px`;
          circle.style.height = `${size}px`;
          
          // 設定隨機顏色
          const r = Math.floor(Math.random() * 256);
          const g = Math.floor(Math.random() * 256);
          const b = Math.floor(Math.random() * 256);
          circle.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
          
          // 設定隨機位置
          const x = Math.floor(Math.random() * window.innerWidth);
          const y = Math.floor(Math.random() * window.innerHeight);
          circle.style.left = `${x}px`;
          circle.style.top = `${y}px`;
          
          container.appendChild(circle);
      }
  }

  // 呼叫函數來創建40個圓形
  createRandomCircles(40);

  // 設定滑鼠移動改變圓形大小
  function adjustCircleSizeOnMouseMove(event) {
      const circles = document.querySelectorAll('.circle');
      
      circles.forEach(circle => {
          // 計算圓形與滑鼠的距離
          const rect = circle.getBoundingClientRect();
          const circleCenterX = rect.left + rect.width / 2;
          const circleCenterY = rect.top + rect.height / 2;
          
          const distance = Math.sqrt(Math.pow(event.clientX - circleCenterX, 2) + Math.pow(event.clientY - circleCenterY, 2));
          
          // 根據距離來改變圓形的大小
          const newSize = Math.max(30, 50 - distance / 10); // 最大50，最小30
          circle.style.width = `${newSize}px`;
          circle.style.height = `${newSize}px`;
      });
  }

  // 監聽滑鼠移動事件來改變圓形的大小
  document.addEventListener('mousemove', adjustCircleSizeOnMouseMove);
};

// JavaScript部分

// ①: ブラウザによって読み込まれたら、要素を非表示にするコード
document.addEventListener('DOMContentLoaded', function() {
    // 初期表示時に非表示にする場合
    hideElements();
  
    // ③: 要素がクリックされたら非表示にする関数
    function hideOnClick(elementClass) {
      const elements = document.getElementsByClassName(elementClass);
      for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function() {
          this.style.display = 'none';
        });
      }
    }
  
    // 要素がクリックされたら非表示にする関数を適用
    hideOnClick('hideBlock');
  });
  
  // ②: 要素を表示させる関数
  function showElements() {
    const elements = document.getElementsByClassName('hideBlock');
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = 'block'; // または 'inline-block', 'flex' など適切なスタイルに変更
    }
  }
  
  // ①で非表示にする場合はこの関数を呼び出す
  function hideElements() {
    const elements = document.getElementsByClassName('hideBlock');
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = 'none';
    }
  }
  
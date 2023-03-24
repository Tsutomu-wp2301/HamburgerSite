// サイドメニューの高さをページ全体に合わせる
let elements = document.querySelectorAll('.my-element'); // クラス名が "my-element" の要素を全て取得する
let totalHeight = 0; // 合計値を格納する変数を初期化する

for (let i = 0; i < elements.length; i++) {
  totalHeight += elements[i].clientHeight; // 要素の高さを取得し、合計値に加算する
}

let myElement = document.getElementById('target-element');
myElement.style.height = totalHeight + 'px';
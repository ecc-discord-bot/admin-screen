// jQueryのインポート
import $ from "jquery";

// dropプラグインの定義
// 即時関数
(function ($) {
  $.fn.drop = function () {
    return this.each(function () {
      const obj = $(this);

      const drop = {
        arr: obj.text().split(""),

        range: {
          min: 1,
          max: 100,
        },

        // スタイルを動的に生成してヘッド内に追加する
        styles: function () {
          let dropDelays = "\n";

          for (let i = this.range.min; i <= this.range.max; i++) {
            dropDelays += `.ld${i} { animation-delay: 1.${i}s; }\n`;
          }

          $("head").append(`<style>${dropDelays}</style>`);
        },

        // テキストの各文字にアニメーションを適用する
        main: function () {
          let dp = 0;
          obj.text("");

          $.each(this.arr, (index: number, value: string) => {
            dp = randomInt(drop.range.min, drop.range.max);

            // スペースを$nbsp;に変換
            if (value === " ") value = "&nbsp;";

            obj.append(`<span class="drop ld${dp}">${value}</span>`);
          });
        },
      };

      // スタイルを生成
      drop.styles();

      // アニメーションを初期化
      drop.main();
    });
  };

  // ランダムな整数を生成する関数
  function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
})(jQuery);

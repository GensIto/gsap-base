// typical import
import gsap from "gsap";
// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";

// この宣言でこの宣言で機能するようになる
gsap.registerPlugin(ScrollTrigger);

// 動かす要素 .js-demo-section
document.querySelectorAll(".js-demo-section").forEach((item) => {
    item.addEventListener("click", () => {
        gsap.to(".js-demo-section", {
            x: 800, //横に?px動かす
            // scale: 2,
            autoAlpha: 1, //opacity: 1;とvisibility：visible;がつく
            rotation: 360, // 開始〜終了までの間で?度回転する
            duration: 10, // アニメーションの秒間
            scrollTrigger: {
                //ここ以下はスクロールイベントが入るのでClick Eventに使うとクリック後にスクロールで起爆する
                trigger: ".js-trigger", //アニメーションが始まるトリガーとなる要素
                //start: "トリガー位置 ブラウザの位置"
                start: "0px", //アニメーションが始まる位置を指定
                end: "500px", //アニメーションが終わる位置を指定
                scrub: true, // アニメーションをスクロール量にリンクさせる
                markers: true, //アニメーションのdebagしやすくなる
                toggleClass: { targets: ".js-demo-section", className: "active" },
            },
        });
    });
});
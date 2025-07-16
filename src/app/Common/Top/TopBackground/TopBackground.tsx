import { animate } from "animejs";
import React, { useEffect, useState, useMemo } from "react";

import bgColors from "../../../../const/bgColors";
import styles from "./TopBackground.module.scss";

const NUM_ANIMATIONS = 10; // アニメーションの数を定数化
const NUM_COLOR_BALLS = 128;

// 乱数生成関数
function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const TopBackground: React.FC = () => {
  const [animes, setAnimes] = useState<string[]>([]);
  const randomCache = Array.from({ length: NUM_ANIMATIONS }, () =>
    random(1, 6)
  );
  const bgColorCache = useMemo(() => {
    return Array.from(
      { length: NUM_COLOR_BALLS },
      () => bgColors[random(0, bgColors.length - 1)]
    );
  }, []);

  useEffect(() => {
    // 背景アニメーション用のcssを作成
    const animesCreate = [];
    for (let i = 0; i < NUM_ANIMATIONS; i++) {
      let anime = "";
      for (let j = 0; j < NUM_COLOR_BALLS; j++) {
        const scale = random(2, 4);
        const tmpAnime = `radial-gradient(${
          bgColorCache[j]
        } 30%,transparent 50%) ${random(15, 85)}% ${random(
          15,
          85
        )}% / ${scale}% ${scale}% no-repeat`;
        if (anime === "") {
          anime += tmpAnime;
        } else {
          anime += ", " + tmpAnime;
        }
      }
      animesCreate.push(anime);
    }
    setAnimes(animesCreate);

    // 文字のアニメーションが完了してから背景を出す
    const animation = animate("#bgContainer", {
      opacity: 1,
      delay: 3000,
      duration: 3000,
      easing: "easeInOutQuart",
    });

    // GPUアクセラレーションを有効化
    const bgContainer = document.getElementById("bgContainer");
    if (bgContainer) {
      bgContainer.style.willChange = "opacity, transform";
    }

    // クリーンアップ処理
    return () => {
      if (bgContainer) {
        bgContainer.style.willChange = "";
      }
      animation.pause();
    };
  }, [bgColorCache]);

  return (
    <div className={styles.bgContainer} id="bgContainer">
      {animes.map((anime: string, index: number) => {
        return (
          <div
            className={`${styles.background} ${
              styles[`bgRotate${randomCache[index % randomCache.length]}`]
            }`}
            style={{
              background: anime,
              animationDelay: `-${index * 2}s`,
            }}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default TopBackground;

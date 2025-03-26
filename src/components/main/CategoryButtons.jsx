import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./CategoryBtns.module.css";

const foreignTextsObject = {
  Kor: {
    all: "전체",
    love: "연애",
    characteristic: "성격",
  },
  Eng: {
    all: "All",
    love: "Love",
    characteristic: "Personality",
  },
  JP: {
    all: "All",
    love: "Love",
    characteristic: "Personality",
  },
};

function CategoryButtons() {
  const [searchParams] = useSearchParams();
  const [language, setLanguage] = useState("Kor");
  const navigate = useNavigate();

  // 허용된 카테고리 값
  const allowedCategories = ["love", "characteristic", "all"];

  useEffect(() => {
    const currentLang = searchParams.get("lang") || "Kor";
    setLanguage(currentLang);
  }, [searchParams]);

  const onCategoryButtonClick = (category) => {
      

    // 1. 유효하지 않은 카테고리일 경우 홈으로 이동
    if (!allowedCategories.includes(category)) {
      alert("잘못된 카테고리입니다!");
      navigate(`/?lang=${language}`);
      return;
    }

    // 2. 유효한 경우 카테고리 페이지로 이동
    navigate(`/test/${category}`);
  };

  return (
    <div className={styles.categoryBtnContainer}>
      <button
        className={styles.categoryButton}
        onClick={() => onCategoryButtonClick("all")}
      >
        {foreignTextsObject[language]?.all || "All"}
      </button>

      <button
        className={styles.categoryButton}
        onClick={() => onCategoryButtonClick("love")}
      >
        {foreignTextsObject[language]?.love || "Love"}
      </button>

      <button
        className={styles.categoryButton}
        onClick={() => onCategoryButtonClick("characteristic")}
      >
        {foreignTextsObject[language]?.characteristic || "Personality"}
      </button>
    </div>
  );
}

export default CategoryButtons;


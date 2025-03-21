// src/components/test/GoToHomeButton.jsx
import React from "react";

function GoToHomeButton() {
  return (
    <button onClick={() => window.location.href = "/"}>
      홈으로 가기
    </button>
  );
}

export default GoToHomeButton;

import { useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";
import { TESTS } from "../data/TESTS";
import IntroRenderer from "../components/test/IntroRenderer";

function Test() {

  const navigate = useNavigate();
  const { testParam } = useParams(); // URL에서 test 이름 받아옴
  const [currentTest, setCurrentTest] = useState(null);

  useEffect(() => {
    // testParam에 해당하는 테스트가 TESTS 목록에 있는지 확인
    //1. testParam이 우리 DB에 존재하는가 필터링
    //1-1. 존재하지 않으면 안내/Home routing
    //1-2. 존재하면 해당 테스트ㅡ이 콘텐츠를 렌러링
    const theTest = TESTS.find((test) => test?.info?.mainUrl === testParam);
    if (!theTest) {
      alert("❗해당 테스트는 존재하지 않습니다!");
      return navigate("/"); // 없으면 홈으로 보내기
    }
    setCurrentTest(theTest); // 있으면 해당 테스트 저장
  }, [testParam, navigate]);

  return (
    <div>
      <IntroRenderer currentTest={currentTest} />
    </div>
  );
}

export default Test;

//root/personalColor/result/ENFP


import { useState } from "react";
import client from "../entities";

function LoginForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    // form 태그로 전달한 이벤트는 React.FormEvent 타입
    event.preventDefault();
    // 새로고침을 방지하기 위해서 입력해야 함.

    const response = await client.post("/login", {
      id: id,
      password: password,
    });

    if (response.status === 200) {
      console.log("로그인 완료!");
      // 토큰 저장, 홈 화면으로 이동 등의 작업을 수행함.
    } else {
      console.log("로그인 실패...");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={id} onChange={(e) => setId(e.target.value)}></input>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={handleSubmit}>로그인</button>
      </form>
    </>
  );
}

export default LoginForm;

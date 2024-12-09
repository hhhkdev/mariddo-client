import { useState } from "react";
import client from "../entities";
import logo from "../assets/Logo.png";
import styled from "@emotion/styled";
import { NoRoom } from "./NotFound/NoRoom";

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
    <Wrapper>
      <NoRoom></NoRoom>
      <img src={logo} width={"297px"}></img>
      <div className="subtitle">
        채팅과 함께하는 <b>마니또</b> 서비스
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디"
        ></input>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
        ></input>
        <button onClick={handleSubmit}>로그인</button>
      </form>
      <div className="signup">
        <u>회원가입</u> | <u>비밀번호 찾기</u>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: right;

  img {
    margin-top: 180px;
  }
  .subtitle {
    margin-top: 20px;
    margin-bottom: 40px;
    color: #704a11;
  }
  input {
    width: 352px;
    height: 45px;
    border: 1px solid #5f3c08;
    border-radius: 8px;
    font-size: 16px;
    letter-spacing: -3%;
    padding-left: 18px;
    box-sizing: border-box;
    background-color: #fff7ec;
  }

  button {
    border: none;
    background-color: #5f3c08;
    color: #ffefd6;
    padding: 9px 18px;
    border-radius: 8px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .signup {
    margin-top: 20px;
    color: #4a2f07;
  }
`;

export default LoginForm;

import styled from "@emotion/styled";
import BreadGray from "../../assets/BreadGray.svg";

export const NoChat = () => {
  return (
    <Wrapper>
      <img src={BreadGray} width={"130px;"}></img>
      <div className="no-chat-text">
        <b>아직 시작한 채팅이 없어요!</b>
        <br />
        좌측 사이드바에서 채팅을 시작할 수 있어요.
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  .no-chat-text {
    color: #808080;
    text-align: center;
    font-size: 20px;
    letter-spacing: -0.03em;
  }
`;

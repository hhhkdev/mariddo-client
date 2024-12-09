import styled from "@emotion/styled";
import BreadGray from "../../assets/BreadGray.svg";

export const NoRoom = () => {
  return (
    <Wrapper>
      <img src={BreadGray} width={"130px;"}></img>
      <div className="no-room-text">
        <b>아직 참여하고 있는 마니또가 없어요!</b>
        <br />
        좌측 사이드바에서 방을 추가해주세요.
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

  .no-room-text {
    color: #808080;
    text-align: center;
  }
`;

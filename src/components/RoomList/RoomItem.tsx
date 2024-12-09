import styled from "@emotion/styled";

interface Room {
    room_id: number,
    title: string,

    currentPeople: number,
    PeopleLimit: number,
    
    lastChatting: {
        sender: string,
        sendContent: string,
        sendTime: Date,
    }

    chatCount: number
}
// props의 타입 매기는 방법을 알아봐야 함.
function RoomItem(props: Room) {
    props.room_id++;
    return(<Wrapper>
        
    </Wrapper>)
}

const Wrapper = styled.div``

export default RoomItem
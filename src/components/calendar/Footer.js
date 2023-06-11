import { styled } from "styled-components"

const Footer = ({
    currentWeekToToday,
    selectedDate,
    getEventByDate,
    deleteEvent
}) => {
    const isEventSelected = !!getEventByDate(selectedDate).length

    return (
        <Container>
            <Button onClick={() => currentWeekToToday()}>
                Today
            </Button>
            {isEventSelected && (
                <Button onClick={() => deleteEvent(selectedDate)}>
                    Delete
                </Button>
            )}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    display: flex;
    height: 70px;
    background-color: #efeeeeff;
    padding-inline: 20px;
    border-top: 1px solid #e4e4e4ff;
`

const Button = styled.div`
    padding-inline: 10px;
    color: red;
    cursor: pointer;
    font-weight: bold;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    &:hover {
        color: #e00202;
    }

    @media (max-width: 480px) {
        padding-inline: 5px;
    }
`

export default Footer
import { styled } from "styled-components"

const IconButton = ({
    icon: Icon,
    iconSize,
    iconColor,
    onClick
}) => {
    return (
        <Button onClick={onClick}>
            <Icon size={iconSize || 28} color={iconColor} />
        </Button>
    )
}

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: inherit;
    cursor: pointer;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    &:hover {
      background-color: #d2d1d1;
    }
`

export default IconButton
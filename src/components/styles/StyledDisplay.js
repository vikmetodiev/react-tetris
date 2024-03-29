import styled from "styled-components"


export const StyledDisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 0 0 20px 0;
    padding 20px;
    border 4px dashed  #333;
    min-height: 40px;
    width: 100%;
    color: ${props => (props.gameOver? 'tomato' : '#101')};
    background: #090;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
`
import styled from "styled-components"

export const Container = styled.div`
    width: 30em;
    height: 30em;
    background-color: #e6e4e4;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const Form = styled.form`
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: space-evenly;
    align-items: center;
    h1 {
        font-size: 22px;
        font-weight: 600;
    }
`
import styled from "styled-components"

export const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #af5e5e;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    border-radius: 3px;
    width: 90%;
    height: 90vh;
    background-color: #e6e4e4;
`

export const HeaderBox = styled.div`
    width: 100%;
    height: 130px;
    background-color: #535353;
    display: flex;
    align-items: center;

    div {
        display: flex;
        align-items: center;
        padding: 25px;
    }
    
    h1 {
        font-size: 25px;
        font-weight: 900;
        color: #F5F5F5;
        font-family: 'Roboto Mono', sans-serif;
        padding: 15px;
    }
`

export const Content = styled.div`
    padding: 50px;
    h2 {
        font-size: 22px;
        font-weight: 900;
        font-family: 'Nunito', sans-serif;
    }
`

export const CreateTeam = styled.div`
    max-width: 800px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
    input {
        padding: 5px 20px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-right: 5px;
        height: 25px;
    }

    button {
        border-radius: 3px;
        border: none;
        height: 35px;
        width: 130px;
        background-color: #af5e5e;
        color: #F5F5F5;
        &:hover {
            cursor: pointer;
            background-image: linear-gradient(to right, #eb3941, #f15e64, #e14e53, #e2373f);  box-shadow: 0 5px 15px rgba(242, 97, 103, .4);
        }
    }
`

export const Box = styled.div`
    max-width: 50rem;
    height: 25em;
    overflow: auto;
`

export const CardTeam = styled.div`
    max-width: 70%;
    font-family: 'Roboto Mono', monospace;
    max-width: 45em;
    height: 40px;
    margin: 15px;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    h3 {
        font-size: 16px;
        font-weight: 600;
        text-transform: uppercase;
    }
`

export const CardForm = styled.div`
    a:link, a:visited,  a:hover, a:active {
        color: #000000;
        text-decoration: none;
    }
    height: 20px;
    max-width: 30em;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    margin-left: 20px;
    display: flex;
    padding: 5px;

    p {
        font-size: 14px;
        margin-left: 10px;
        max-width: 40ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`
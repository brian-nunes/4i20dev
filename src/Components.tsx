import styled, { keyframes } from 'styled-components';

export const MainPage = styled.div`
    background-image: url("./torcida-bg.jpeg");
    background-size:cover;
    display: flex;
    place-content: stretch center;
    -webkit-box-pack: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    height: 98.3vh;
    width: 99vw;
    margin: 0px;
`

const spin = keyframes`
    0% {
    transform: rotateY(0deg);
    }
    100% {
    transform: rotateY(-360deg);
    }
`

export const SpinnigVscLogo = styled.img`
    height: 500px;
    width: 500px;
    margin: 40px;
    animation: ${spin} 4s linear infinite
`

const anim_popoutin = keyframes`
    0% {
    color: red;
    transform: scale(1);
    opacity: 1;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0);
    }
    50% {
    color: white;
    transform: scale(1.3);
    opacity: 1;
    text-shadow: 3px 10px 5px rgba(0, 0, 0, 0.5);
    }
    100% {
    color: red;
    transform: scale(1);
    opacity: 1;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0);
    }
`

export const CongratsText = styled.div`
    font-family: "Lucida Console", Monaco, monospace;
    font-size: 40px;
    letter-spacing: 6px;
    word-spacing: 0px;
    color: #FFFFFF;
    font-weight: 700;
    text-decoration: none solid rgb(68, 68, 68);
    font-style: normal;
    font-variant: small-caps;
    text-transform: none;
    animation: ${anim_popoutin} 3.5s ease infinite;
`

export const DataText = styled.div`
    font-family: "Lucida Console", Monaco, monospace;
    font-size: 30px;
    letter-spacing: 3px;
    word-spacing: 0px;
    color: #FFFFFF;
    font-weight: 700;
    text-decoration: none solid rgb(68, 68, 68);
    font-style: normal;
    text-transform: none;
    margin: 10px;
`

export const ErrorText = styled.div`
    font-family: "Lucida Console", Monaco, monospace;
    font-size: 30px;
    letter-spacing: 6px;
    word-spacing: 0px;
    color: red;
    font-weight: 700;
    font-style: normal;
`

export const GetNftButton = styled.button`
    box-shadow:inset 1px 1px 2px -2px #ffffff;
    background:linear-gradient(to bottom, #ffffff 5%, #000000 100%);
    background-color:#ffffff;
    border-radius:12px;
    border:1px solid #080808;
    display:inline-block;
    cursor:pointer;
    color:#ff0000;
    font-family:Courier New;
    font-size:28px;
    font-weight:bold;
    font-style:italic;
    padding:10px 20px;
    text-decoration:none;
    text-shadow:1px 2px 2px #000000;

    &:hover {
    background:linear-gradient(to bottom, #000000 5%, #ffffff 100%);
    background-color:#000000;
    }
    &:active {
    position:relative;
    top:1px;
    }
`
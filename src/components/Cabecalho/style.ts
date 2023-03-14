import styled from "styled-components";

export const Cabecalho = styled.header`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #fff;
    height: 112px;
    margin: 50px 80px;
    border: 1px solid #D7E5F2;
    border-radius: 4px;
    align-content: baseline;
    

    h2{
        font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #05032E;
    padding-left: 40px;
    margin-top: 50px
 
    }

    span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        align-content: flex-start;
        padding-left: 10px;
        margin-top: 50px
    }

    button {
        flex-direction: flex;
        margin-left: 75%; 
        margin-right: 10%;
        align-items: center;
        margin-top: -30px

    }
`;

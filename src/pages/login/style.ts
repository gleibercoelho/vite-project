import styled from "styled-components";

export const ContainerLogin = styled.div`
    background: var(--backgoround-login);
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;

`;

export const FirstColumn = styled.div`
    width: 70%;
`;
export const FormColumn = styled.div`
    width: 30%;
    padding: 0 1.875rem;
    justify-content: center;

    img{
        
        padding: 0 30%;
        margin: 0;
    }
`;
export const FormLogin = styled.form``;

export const ContainerInput = styled.div`

    margin: 1rem 0;

    label {
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.1875rem;
        color: var(--blue-700);
        
}

    input{
        margin-top: 0.4375rem;
        background: #ffffff;
        border: 1px solid var(--grey300);
        width: 100%;
        padding: 0.4rem 0.75rem
    }
`;
export const ContainerButtons = styled.div`
        margin: 3.5625rem 0;
        display: flex;
        flex-direction: column;
        align-items: column;
        justify-content: center;  
        
        p{
            margin-top: 0.8rem
        }
        `;
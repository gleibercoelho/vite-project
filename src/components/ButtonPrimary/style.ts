import styled from "styled-components";

export const Button = styled.button`
    background: var(--blue-700);
    border-radius: 5px;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: #fff;
    padding: 8px 68px;
    border: none;
    
    &:disabled {
        cursor: not-allowed;
        opacity: 0.7;

    }

`
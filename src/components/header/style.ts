import styled from "styled-components";



export const HeaderNav = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FFFFFF;
    height: 4.25rem;
`;

export const ContentLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 3.5rem;
    nav {
        display: flex;
        align-items: center;
        gap: 3.125rem;
        a {
            display: flex;
            align-items: center;
            font-weight: 600;
            font-size: 0.875rem;
            line-height: 1.3125rem;
            color: var(--grey-400);
            text-decoration: none;
            gap: 4px;
        }
    }
`;

export const LogoIManager = styled.img`
    width: 60px;
    height: 60px;
`;

export const ContentImageUser = styled.div`
    img {
        border: 2px solid #134E87;
        width: 60px;
        height: 60px;
        border-radius: 100%;
        margin-right: 20px
    }
`;
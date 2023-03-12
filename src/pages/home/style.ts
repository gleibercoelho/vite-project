import styled from "styled-components";

export const ContainerHome = styled.div`
    background: var(--background);
    height: calc(100vh - 4.25rem);
    padding: 55px 120px;
`;

export const ContentTitle = styled.div`
    margin-bottom: 40px;
    h1{
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.375rem;
        color: var(--blue-500);
    }
    p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.1875rem;
        color: var(--grey-400);
    }
`;

export const ContentBody = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 60px;
`;
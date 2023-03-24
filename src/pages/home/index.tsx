import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header";
import { Card } from "../../components/Card";
import { ContainerHome, ContentTitle, ContentBody } from "./style";
import { cardsHome } from "../../components/utils/DataCards";



export function Home() {

    /* metodo 2 
    const navigate = useNavigate();
    useEffect(() =>{
        const infoUserStorage = localStorage.getItem('@userInformationAccount');
        if (infoUserStorage) {
            console.log(infoUserStorage)
        }else {
            navigate('/login');
        }
    }, []) */
    return (
        <>
        <Header/>
        <ContainerHome>
            <ContentTitle>
                <h1>Olá. Gleiber</h1>
                <p>O que deseja acessar? Escolha abaixo.</p>
            </ContentTitle>
            <ContentBody>
                {cardsHome.map(card => (
                    <Card key={card.id} title={card.title} description={card.description} goToUrl={card.goTo}></Card>
                ))}                
            </ContentBody>
        </ContainerHome>
        </>
    )
}
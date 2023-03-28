import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header";
import { Card } from "../../components/Card";
import { ContainerHome, ContentTitle, ContentBody } from "./style";
import { cardsHome } from "../../components/utils/DataCards";
import { useSelector } from "react-redux";
import { IUserInfo, IUserReducer } from "../../components/utils/types";



export function Home() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState<IUserInfo>()
    const userInfos = useSelector((state: IUserReducer) => state.userReduce)
    console.log(userInfos);

    function splitName(name: string | undefined) {
        if(name) {const nameFormated = name.split(' ')
        return nameFormated[0];}
        else {
            return "";
        }
        
    }

    useEffect(() => {
        const infoUserStorage = localStorage.getItem('@userInformationAccount');
        if (infoUserStorage) {
            setUserInfo(JSON.parse(infoUserStorage))
            
        } else {
            navigate('/login');
        }
    }, [])
    return (
        <>
            <Header urlImage={userInfo?.imageUser} />
            <ContainerHome>
                <ContentTitle>
                    <h1>Olá, {splitName(userInfo?.name)}</h1>
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
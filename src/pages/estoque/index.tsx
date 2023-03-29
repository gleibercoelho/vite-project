import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header";
import { Cabecalho } from "../../components/Cabecalho/style";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import {ContainerEstoque, ContentTitleEstoque} from './style';
import { Trash, Pencil } from "@phosphor-icons/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { IUserInfo, IUserReducer } from "../../components/utils/types";




export function Estoque() {

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
    useEffect(() =>{
        const infoUserStorage = localStorage.getItem('@userInformationAccount');
        if (infoUserStorage) {
            setUserInfo(JSON.parse(infoUserStorage))
        }else {
            navigate('/login');
        }
    }, [])
    return (
        <>
            <Header urlImage={userInfo?.imageUser} />
            <Cabecalho>
                <h2>Olá, {splitName(userInfo?.name)}</h2> <span> Gerencie o estoque ou acadastre um novo produto</span>
                <ButtonPrimary title={"Novo produto"}>
                    <button>Nova venda</button>
                </ButtonPrimary>
            </Cabecalho>
            <ContainerEstoque>
                <ContentTitleEstoque>
                <table>
                        <tr>
                            <th>Codigo</th>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Em estoque</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>1432</td>
                            <td>Carburador</td>                        
                            <td>R$ 500,00</td>
                            <td>30</td>
                            <td><Trash size={32} color="#ff0000" weight="fill" /><Pencil size={32} color="#2b00ff" /></td>
                        </tr>
                        <tr>
                            <td>1432</td>
                            <td>Carburador</td>                        
                            <td>R$ 500,00</td>
                            <td>30</td>
                            <td><Trash size={32} color="#ff0000" weight="fill" /><Pencil size={32} color="#2b00ff" /></td>
                        </tr>
                        <tr>
                            <td>1432</td>
                            <td>Carburador</td>                        
                            <td>R$ 500,00</td>
                            <td>30</td>
                            <td><Trash size={32} color="#ff0000" weight="fill" /><Pencil size={32} color="#2b00ff" /></td>
                        </tr>
                        <tr>
                            <td>1432</td>
                            <td>Carburador</td>                        
                            <td>R$ 500,00</td>
                            <td>30</td>
                            <td><Trash size={32} color="#ff0000" weight="fill" /><Pencil size={32} color="#2b00ff" /></td>
                        </tr>
                        <tr>
                            <td>1432</td>
                            <td>Carburador</td>                        
                            <td>R$ 500,00</td>
                            <td>30</td>
                            <td><Trash size={32} color="#ff0000" weight="fill" /><Pencil size={32} color="#2b00ff" /></td>
                        </tr>
                    </table>
                </ContentTitleEstoque>
                
            </ContainerEstoque>
        </>
    )
}

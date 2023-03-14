import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { Button } from "../../components/ButtonPrimary/style";
import { Cabecalho } from "../../components/Cabecalho/style";
import { Header } from "../../components/header";
import { Plus, Rows } from "@phosphor-icons/react";
import { ContentBodyVendas, ContainerVendas, ContentTitleVendas } from "./style";
import { Tabela } from "../../components/Tabela";



export function Vendas() {

    const navigate = useNavigate();
    useEffect(() => {
        const infoUserStorage = localStorage.getItem('@userInformationAccount');
        if (infoUserStorage) {
            console.log(infoUserStorage)
        } else {
            navigate('/login');
        }
    }, [])
    return (
        <>
            <Header />
            <Cabecalho>
                <h2>Olá, Gleiber!</h2> <span> Gerencie as vendas abaixo ou abra uma nova</span>
                <ButtonPrimary title={"Nova venda"}>
                    <button>Nova venda</button>
                </ButtonPrimary>
            </Cabecalho>
            <ContainerVendas>
                <ContentTitleVendas>
                    <table>
                        <tr>
                            <th>Data de Venda</th>
                            <th>Produto</th>
                            <th>Vendedor</th>
                            <th>Valor</th>
                            <th>Forma de pagamento</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>13/03/2023</td>
                            <td>Carburador</td>
                            <td>Gleiber Coelho</td>
                            <td>R$ 500,00</td>
                            <td>Crédito</td>
                            <td>icon</td>
                        </tr>
                        <tr>
                            <td>13/03/2023</td>
                            <td>Carburador</td>
                            <td>Gleiber Coelho</td>
                            <td>R$ 500,00</td>
                            <td>Crédito</td>
                            <td>icon</td>
                        </tr>
                        <tr>
                            <td>13/03/2023</td>
                            <td>Carburador</td>
                            <td>Gleiber Coelho</td>
                            <td>R$ 500,00</td>
                            <td>Crédito</td>
                            <td>icon</td>
                        </tr>
                        <tr>
                            <td>13/03/2023</td>
                            <td>Carburador</td>
                            <td>Gleiber Coelho</td>
                            <td>R$ 500,00</td>
                            <td>Crédito</td>
                            <td>icon</td>
                        </tr>
                    </table>
                </ContentTitleVendas>
                <ContentBodyVendas>
                    {/* <Tabela/> */}
                </ContentBodyVendas>
            </ContainerVendas>
        </>
    )
}


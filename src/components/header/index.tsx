import { NavLink } from "react-router-dom";
import { House, Package, CurrencyCircleDollar } from "@phosphor-icons/react";
import { HeaderNav, ContentLinks, ContentImageUser, LogoIManager } from './style';
import IconPng from '../../assets/icons/IconPng.png';
import iconUserPng from "../../assets/icons/IconuserPng.png"

type IHeaderProps = {
    urlImage: string | undefined;
}


export const Header =  ({urlImage} : IHeaderProps) => {
    return(
        <HeaderNav>
            <ContentLinks>
                <LogoIManager src={IconPng}/>
                <nav>
                    <NavLink to="/"  title="Home">
                        <House size={16} color="#50555a"/>
                        <span>Home</span>
                    </NavLink>
                    <NavLink to="/vendas" title="Vendas">
                        <CurrencyCircleDollar size={16} color="#50555a"/>
                        <span>Vendas</span>
                    </NavLink>
                    <NavLink to="/estoque" title="Estoque">
                        <Package size={16} color="#50555a"/>
                        <span>Estoque</span>
                    </NavLink> 
                </nav>
            </ContentLinks>
            <ContentImageUser>
                <img src={urlImage ? urlImage : iconUserPng} alt="foto do usuário" />
            </ContentImageUser>
        </HeaderNav>
    )
}
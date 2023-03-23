import { FormEvent, useState } from 'react';
import LoginImagePng from '../../assets/images/LoginImagePng.png';
import IconPng from '../../assets/icons/IconPng.png';
import { ContainerLogin, FirstColumn, FormColumn, FormLogin, ContainerInput, ContainerButtons, } from './style';
import { ButtonPrimary } from '../../components/ButtonPrimary';
import { useNavigate } from "react-router-dom";
import * as z from "zod";
import {useForm} from 'react-hook-form';
import { loginFormSchema } from './schema';
import { zodResolver } from "@hookform/resolvers/zod"
import { login } from '../../services/login.service';

type LoginFormInputs = z.infer<typeof loginFormSchema>

export function Login() {
    const navigate = useNavigate();

   /* metodo 1   
   const [emailUser, setEmailUser] =  useState('');
    const [passwordUser, setPasswordUser] =  useState(''); */


    const {register, handleSubmit, formState: {isSubmitting}} = useForm<LoginFormInputs>({
        resolver: zodResolver(loginFormSchema)
    });

    /* metodo 1 
     function handleSubmitLogin(event: FormEvent){
        event.preventDefault();
        console.log('funcionou');
        if(emailUser.length === 0 || passwordUser.length === 0){
            alert('digite seu email e senha');
            
        } else {
            const infoUser = {
                email: emailUser
                
            }
            localStorage.setItem('@userInformationAccount', JSON.stringify(infoUser));
            navigate('/');
        }
    };
   */
 /* 2 async */ function handleSubmitLogin(data: LoginFormInputs){
    login()
    .then((response) => {
        console.log(response);
        /* localStorage.setItem('@userInformationAccount', JSON.stringify({email: data.email})); */
            /*3 navigate('/'); */
    })
    .catch((error) => {
        console.log(error);
    } )
    /* metodo 2 
    await new Promise ((resolve) => setTimeout(resolve, 2000)) */
    
/* 2 console.log(data) */
};

    return (
        <ContainerLogin>
            <FirstColumn>
                <img src={LoginImagePng} alt="" />
            </FirstColumn>
            <FormColumn>
                <img src={IconPng} alt="" />
                <FormLogin onSubmit={handleSubmit(handleSubmitLogin)}>
                    <ContainerInput>
                        <label htmlFor="">Email</label>
                        <input type="text" 
                        {...register('email')} />

                    </ContainerInput>
                    <ContainerInput>
                        <label htmlFor="">Senha</label>
                        <input type="password" 
                        {...register('password')}
                        />

                    </ContainerInput>
                    <ContainerButtons>
                        <ButtonPrimary type="submit" title='Entrar' disabled={isSubmitting} />
                        <p>Primeira vez aqui?<a href="#"> Criar uma conta</a></p>

                    </ContainerButtons>
                </FormLogin>
            </FormColumn>
        </ContainerLogin>
    )
}
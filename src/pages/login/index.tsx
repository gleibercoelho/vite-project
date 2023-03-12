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

type LoginFormInputs = z.infer<typeof loginFormSchema>

export function Login() {
    const navigate = useNavigate();

   /*  const [emailUser, setEmailUser] =  useState('');
    const [passwordUser, setPasswordUser] =  useState(''); */


    const {register, handleSubmit, formState: {isSubmitting}} = useForm<LoginFormInputs>({
        resolver: zodResolver(loginFormSchema)
    });

    /* function handleSubmitLogin(event: FormEvent){
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
 async function handleSubmitLogin(data: LoginFormInputs){
    await new Promise ((resolve) => setTimeout(resolve, 2000))
    localStorage.setItem('@userInformationAccount', JSON.stringify({email: data.email}));
            navigate('/');
 console.log(data)
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
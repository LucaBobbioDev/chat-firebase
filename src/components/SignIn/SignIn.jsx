import React from 'react'

//Google Auth e Firebase
import { auth } from '../../services/firebaseConfig'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

//Icon da biblioteca react-icons
import { FaGoogle } from "react-icons/fa";

//Imagem
import chat from '../../assets/chat.svg'

//Estilização
import './styles.scss'

export const SignIn = () => {
   
    //Função assíncrona que abre um Pop Up de autenticação de contas google
    async function handleGoogleSignIn(){
        const provider = new GoogleAuthProvider();

        //Recebe dois parâmetros
        signInWithPopup(auth, provider)
        .then(
            (result) => console.log(result)
        )
        .catch(
            (error) => console.log(error)
        );
    }

  return (
    <div className='signIn-container'>

        <header className='signIn-header'>
            <h1 className='header-title'>Welcome to FireChat</h1>
            <p className='header-subtitle'>We use Google authentication to make the user's life easier, allowing them to use our application without registering.</p>
        </header>

        <div className='signIn-content'>
            <img src={chat} width={350} alt="Drawing of two people chatting online"/>

            <div className='signIn-login'>
                <h3>Access your account now</h3>
                <button 
                    className='signIn-button'
                    onClick={handleGoogleSignIn}> 
                        Sign In with Google
                    <FaGoogle className='logo-google'/>
                </button>
            </div>

        </div>
    </div>
  )
}

import React from 'react'

//Google Auth
import { auth } from '../../services/firebaseConfig';

//Imagem
import placeholder from '../../assets/placeholder-user.png'

//Estilização
import './styles.scss'

export const ChatMessage = (props) => {
  const { text, photoURL} = props.message;
  
  return (
    <div className='message'>
        <img className='user-img' src={photoURL || placeholder} alt="User profile image" />
        <p>{text}</p>
    </div>
  )
}

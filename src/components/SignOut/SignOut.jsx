import React from 'react'

//Google Auth
import { auth } from '../../services/firebaseConfig'

//Estilização
import './styles.scss'

export const SignOut = () => {
  return (
    auth.currentUser && 
    <button 
      className="signOut-button" 
      onClick={() => auth.signOut()}> 
        Sign Out
    </button>
  );
}

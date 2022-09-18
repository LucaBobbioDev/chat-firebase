//Google Auth e Firebase
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './services/firebaseConfig'

//Componentes
import { SignIn } from './components/SignIn/SignIn'
import { ChatRoom } from './components/ChatRoom/ChatRoom'


//Estilização
import './App.scss'


export default function App() {
  const [user] = useAuthState(auth)

  return (
    <div className="app">
      <section className='app-section'>
        {/*
        Renderezição condicional: 
        Se user está logado -> Componente ChatRoom
        Se não está logado -> Componente SignIn
        */}
        {user? <ChatRoom/> : <SignIn/>}
      </section>

      <footer>
        <p>Luca Bobbio -
          <span> FireChat</span> &copy; 2022
        </p> 
      </footer>

    </div>
  )
}


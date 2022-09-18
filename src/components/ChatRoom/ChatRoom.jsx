import React, { useState } from 'react'

//Google Auth e Firestore Database
import { addDoc, collection, limit, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { databaseApp, auth } from '../../services/firebaseConfig.js';

//Componentes
import { SignOut } from '../SignOut/SignOut.jsx';
import { ChatMessage } from '../ChatMessage/ChatMessage.jsx';

//Icons da biblioteca react-icons
import { BsChatDots, BsCursor } from "react-icons/bs";

//Imagem
import chatting from '../../assets/chatting.svg'

//Estilização
import './styles.scss'

export const ChatRoom = () => {
  const messageRef = collection(databaseApp, "messages");

  const queryMessages = query(messageRef, orderBy("createdAt"), limit(25));

  const [messages] = useCollectionData(queryMessages, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { photoURL, uid } = auth.currentUser;

    await addDoc(messageRef, {
      text: formValue, 
      uid, 
      photoURL, 
      createdAt: serverTimestamp()
    });
    setFormValue('')
  };
  
  return (
    <div className='chatRoom-container'>
      <header className='chatRoom-header'>
          <h1 className='header-title'>FireChat</h1>
          <p className='header-subtitle'>Here you can send a message to anyone who also is in our application.</p>
      </header>
      <div className='chat-container'>
        <div className='chat-header'>
          <p><b>Chat Room</b> <BsChatDots/></p>
          <SignOut/>
        </div>

        <img className='chat-img'src={chatting} alt="Drawing of two people chatting online"/>

        <main className='chat-content'>
          {messages && messages.map((msg, index) => <ChatMessage key={index} message={msg} />)}

          <form className='chat-form' onSubmit={sendMessage}>

            <input 
              className='chat-form-input'
              type="text" 
              placeholder='Write a message' 
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
            />

            <button className='chat-send-button'>
              <BsCursor className='send-logo'/>
            </button>

          </form>
        </main>
      </div>
    </div>
  )
}

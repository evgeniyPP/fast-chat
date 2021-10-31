import { useRef, useState } from 'react';
import { useParams } from 'react-router';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import ChatMessage from './ChatMessage';
import { firebase, auth, firestore } from '../firebase';
import { t } from '../locale/index';

function ChatRoom() {
  const { id: roomId } = useParams();
  const dummy = useRef();

  const messagesRef = firestore.collection('messages');
  const query = messagesRef.where('roomId', '==', roomId).orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  const sendMessage = async e => {
    e.preventDefault();

    if (!formValue.trim()) {
      return;
    }

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      roomId
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

        <div ref={dummy}></div>
      </main>

      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={e => setFormValue(e.target.value)} />
        <button type="submit">{t('Send')}</button>
      </form>
    </>
  );
}

export default ChatRoom;

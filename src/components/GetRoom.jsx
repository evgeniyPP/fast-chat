import { useHistory } from 'react-router';
import { firestore } from '../firebase';

function GetRoom() {
  const history = useHistory();

  const getRoom = async () => {
    const messagesRef = firestore.collection('rooms');
    const { id } = await messagesRef.add({});

    history.push(`/${id}`);
  };

  return <button onClick={getRoom}>Get a new room</button>;
}

export default GetRoom;

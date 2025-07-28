import { useEffect, useState } from 'react';
import { fetchHelloMessage } from '../services/authService';

const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchHelloMessage()
      .then(data => setMessage(data))
      .catch(err => console.error('Error fetching hello message:', err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Backend Message</h1>
      <p className="mt-2">{message}</p>
    </div>
  );
};

export default Home;

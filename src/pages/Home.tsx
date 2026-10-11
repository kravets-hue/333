import React from 'react';
import { Button } from '@/components/ui/Button'; // Імпорт через Alias!

export const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Головна сторінка</h1>
      <p>Це заглушка для перевірки архітектури.</p>
      <Button onClick={() => alert('Кнопка працює!')}>Натисни мене</Button>
    </div>
  );
};
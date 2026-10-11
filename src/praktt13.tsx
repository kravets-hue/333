import  { useState, useEffect } from 'react';

export default function ThemeAndPrefsDebugApp() {
  const [theme, setTheme] = useState<string>('light');
  const [clicks, setClicks] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);


  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);


  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('app-theme', newTheme);
  };

  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'sans-serif', 
      background: theme === 'dark' ? '#222' : '#f9f9f9', 
      color: theme === 'dark' ? '#fff' : '#000', 
      minHeight: '100vh',
      transition: 'all 0.3s'
    }}>
      <h3>Самостійна робота 1.3: Відлагодження стану та сховищ</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <p>Поточна тема: <strong>{theme}</strong></p>
        <button onClick={toggleTheme} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Змінити тему
        </button>
      </div>

      <hr style={{ borderColor: theme === 'dark' ? '#444' : '#ccc' }} />

      <div style={{ marginTop: '20px' }}>
        <p>Кількість кліків (для тестування Profiler): {clicks}</p>
        <button onClick={() => setClicks(c => c + 1)} style={{ padding: '8px 16px', cursor: 'pointer', marginRight: '10px' }}>
          Збільшити лічильник
        </button>
        <button onClick={() => setIsVisible(!isVisible)} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          {isVisible ? 'Приховати елемент' : 'Показати елемент'}
        </button>
      </div>

      {isVisible && (
        <div style={{ marginTop: '15px', padding: '10px', border: '1px dashed gray' }}>
          <p>Цей елемент можна приховувати/показувати для перевірки оновлень DOM у React DevTools.</p>
        </div>
      )}
    </div>
  );
}
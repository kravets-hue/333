import React from 'react';

export const Button = ({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) => {
  return (
    <button 
      onClick={onClick} 
      style={{ padding: '10px 20px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
    >
      {children}
    </button>
  );
};
'use client';

import { useState, useEffect, ReactNode } from 'react';

interface ToastItem {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface WindowWithToast extends Window {
  showToast: (message: string, type: 'success' | 'error' | 'info') => void;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    // Global toast function
    const windowWithToast = globalThis as unknown as WindowWithToast;
    windowWithToast.showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
      const id = Math.random().toString(36);
      setToasts(prev => [...prev, { id, message, type }]);

      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, 3000);
    };
  }, []);

  return (
    <>
      {children}
      <div className="fixed top-4 right-4 z-[9999] space-y-2 pointer-events-none">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className={`p-4 rounded-lg shadow-lg text-white font-medium pointer-events-auto animate-in fade-in slide-in-from-top-4 duration-200 ${
              toast.type === 'success' ? 'bg-green-500' :
              toast.type === 'error' ? 'bg-red-500' :
              'bg-blue-500'
            }`}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </>
  );
}

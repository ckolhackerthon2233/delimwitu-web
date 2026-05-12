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
            className={`p-4 rounded-xl shadow-2xl text-slate-950 font-medium pointer-events-auto animate-in fade-in slide-in-from-top-4 duration-200 border ${
              toast.type === 'success' ? 'bg-white border-green-300' :
              toast.type === 'error' ? 'bg-white border-red-300' :
              'bg-white border-slate-300'
            }`}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </>
  );
}

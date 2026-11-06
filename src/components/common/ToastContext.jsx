import React, { createContext, useContext, useState, useCallback } from 'react';
import SwipeToast from '../SwipeToast';

const ToastContext = createContext({
  showToast: () => {},
});

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const showToast = useCallback(({ title, description = '', icon, duration = 4000 }) => {
    setToast({
      id: Date.now(),
      title,
      description,
      icon,
      duration,
      open: true,
    });
  }, []);

  const handleClose = useCallback(() => {
    setToast((prev) => (prev ? { ...prev, open: false } : null));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div className="fixed bottom-6 right-6 z-[9999] pointer-events-auto">
          <SwipeToast
            key={toast.id}
            title={toast.title}
            description={toast.description}
            icon={toast.icon}
            duration={toast.duration}
            open={toast.open}
            onClose={handleClose}
            background="#13266f"
            color="#fdfcf9"
            fuseColor="#4a6df0"
            radius={22}
          />
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

export default ToastContext;

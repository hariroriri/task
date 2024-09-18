// src/components/NotificationToast.js
import React, { useEffect, useState } from 'react';
import './NotificationToast.css';

const NotificationToast = ({ message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // Hide after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="toast-notification">
      <p>{message}</p>
    </div>
  );
};

export default NotificationToast;

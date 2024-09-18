// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './DataFetching.css';
import './NotificationToast.css';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const DataFetching = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      setData(result.slice(0, 10)); 
    } catch (err) {
      setError('Failed to fetch data');
    }
    setLoading(false);
  };

  const deleteItem = (id) => {
    const filteredData = data.filter(item => item.id !== id);
    setData(filteredData);
    localStorage.setItem('fetchedData', JSON.stringify(filteredData));

    // Show success toast notification
    setToastMessage('Item deleted successfully!');
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 1000);
  };

  return (
    <div className="data-fetching">
      <h2>Data Fetching with Delete Option</h2>
      <button className="fetch-button" onClick={fetchData}>Fetch Data</button>

      {loading && <p className="spinner">Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      <ul className="data-list">
        {data.map(item => (
          <li key={item.id} className="data-item">
            <strong>{item.title}</strong>
            <p>{item.body}</p>
            <button className="delete-button" onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Toast Notification */}
      {toastVisible && (
        <div className="toast-notification success-toast">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default DataFetching;

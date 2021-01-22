import React from 'react';
import Navbar from './components/Navbar';
// import Profile from './components/Profile'
import Routes from './routes';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes />
      <h1>I am App Component!!!</h1>
      <button
        onClick={() => {
          electron.notificationApi.sendNotification('My custom notification!');
        }}
      >
        Notify
      </button>
    </>
  );
}

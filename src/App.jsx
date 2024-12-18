import './App.css';
import NavBar from "./components/NavBar";
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import MailboxDetails from "./components/MailboxDetails"
import MailboxForm from './components/MailboxForm'
import MailboxList from './components/MailboxList'

const App = () => {
  const mailboxExample = {
    _id: 1,
    boxSize: 'Small',
    boxHolder: 'Alex',
  };
  

  const [mailbox, setMailbox]=useState([mailboxExample])

  const addMailbox= (newMailbox)=>{
    newMailbox._id=mailbox.length+1
    setMailbox([...mailbox, newMailbox])
  }
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <h1>Post Office</h1>
        }/>
        <Route path="/mailboxes" element={
          <MailboxList mailbox={mailbox}/>
        }/>
        <Route path="/mailboxForm" element={
          <MailboxForm addMailbox={addMailbox}/>
        }/>
        <Route path="/MailboxDetails/:mailboxId" element={
          <MailboxDetails mailbox={mailbox}/>
        }/>
        <Route path="*" element={
          <h1>Mailbox Not Found!</h1>
        }/>
      </Routes>
    </>
  )
};

export default App;

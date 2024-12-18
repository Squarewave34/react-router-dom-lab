import NavBar from "./components/NavBar";
import { Route, Routes } from 'react-router-dom';
import MailboxDetails from "./components/MailboxDetails"
import MailboxForm from './components/MailboxForm'
import MailboxList from './components/MailboxList'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <h1>home</h1>
        }/>
        <Route path="/mailboxes" element={
          <h1>mailboxes</h1>
        }/>
        <Route path="/mailboxForm" element={
          <h1>mailboxForm</h1>
        }/>
        <Route path="*" element={
          <h1>Mailbox Not Found!</h1>
        }/>
      </Routes>
    </>
  )
};

export default App;

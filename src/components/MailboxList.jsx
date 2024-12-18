import { Link } from 'react-router-dom';

const MailboxList = ({mailbox}) =>{
  return(
    <div>
      {mailbox.map((box, index)=>(
        <div key={index} className="mail-box">
          <Link to={`/MailboxDetails/${box._id}`}>
            {box._id}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default MailboxList
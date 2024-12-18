import { useNavigate, useParams } from "react-router-dom"

const MailboxDetails = ({mailbox}) =>{

  const { mailboxId } = useParams()
  const selectedBox = mailbox.find(box => box._id === +mailboxId)

  if (!selectedBox) {
    return <p>Mailbox not found!</p>
  }

//   <>
//   <dl>
//       <dt>Weight:</dt>
//       <dd>{onePokemon.weight}</dd>
//       <dt>Height:</dt>
//       <dd>{onePokemon.height}</dd>
//   </dl>
//   <button onClick={handleClick}>delete</button>
// </>

  return(
    <div className="center">
      <h1>box number: {selectedBox._id}</h1>
      <h2>size: {selectedBox.boxSize}</h2>
      <h2>Holder: {selectedBox.boxHolder}</h2>
    </div>
  )
}

export default MailboxDetails
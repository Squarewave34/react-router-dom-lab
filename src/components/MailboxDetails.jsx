const MailboxDetails = () =>{

  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  return(
    <h1>Shows details about a specific mailbox</h1>
  )
}

export default MailboxDetails
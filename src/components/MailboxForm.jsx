// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select reference for select

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const initialState = {
  boxSize: 'Small',
  boxHolder: '',
}

const MailboxForm = ({addMailbox})=>{
  const [formData, setFormData] = useState(initialState)
  const navigate=useNavigate()

  const handleChange = (event)=>{
    setFormData({...formData, [event.target.name]:event.target.value})
  }

  const handleSubmit = (event)=>{
    event.preventDefault()
    addMailbox(formData)
    setFormData(initialState)
    navigate('/mailboxes')
  }

  return (
    <main>
      <h2>New mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxSize">boxSize</label>
        <select name="boxSize" id="boxSize">
          <option value="sSmall">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>


        <br />
        <br />

        <label htmlFor="boxHolder">boxHolder</label>
        <input
          type="text"
          id="boxHolder"
          name="boxHolder"
          value={formData.boxHolder}
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">Submit</button>
        
      </form>
    </main>
  )
}

export default MailboxForm
import React, {Component} from "react";
import { PhoneBook } from "./PhoneBook/PhoneBook";
import { nanoid } from 'nanoid'

export class App extends Component{
  state = {
    contacts: [],
    name: ''
  }
  addContact = (event) => {
    const idNew = nanoid()
    event.preventDefault()
    this.setState(prevState => ({
      name: event.target[0].value,
      contacts: [
        ...prevState.contacts,
        {
          name: event.target[0].value,
          id: idNew
        }
      ]
    }))
  }
  render(){
    return(
      <div>
        <form onSubmit={this.addContact}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              style={{display: "block", marginTop: 10, marginBottom:20}}
            />
          </label>
          <button type="submit" >Add Contact</button>
        </form>
       
        <PhoneBook/>
      </div>
    )
  }
}


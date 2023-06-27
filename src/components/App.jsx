import React, {Component} from "react";
import { PhoneBook } from "./PhoneBook/PhoneBook";
import { nanoid } from 'nanoid'

export class App extends Component{
  state = {
    contacts: [],
    name: ''
  }
  addContact = (event) => {
    console.log(event)
    console.log(event.target)
    const idNew = nanoid()
    event.preventDefault()
    this.setState(prevState => ({
      name: event.target[0].value,
      phone: event.target[1].value,
      contacts: [
        ...prevState.contacts,
        {
          name: event.target[0].value,
          phone: event.target[1].value,
          id: idNew
        }
      ]
    }))
  }
  render(){
    
    console.log(this.state)
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
            <label>
              Number
            <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                style={{display: "block", marginBottom:20}}
              />
            </label>
          <button type="submit" >Add Contact</button>
        </form>
       
        <PhoneBook/>
      </div>
    )
  }
}


import React, {Component} from "react";
import { PhoneBook } from "./PhoneBook/PhoneBook";
import { nanoid } from 'nanoid'

export class App extends Component{
  state = {
    contacts: [],
    name: ''
  }
  addContact = (event) => {
    event.preventDefault()
    const idNew = nanoid()
    const name = event.target.elements.name.value;
    const phone = event.target.elements.number.value;
    this.setState(prevState => ({
      name,
      phone,
      contacts: [
        ...prevState.contacts,
        {
          name,
          phone,
          id: idNew
        }
      ]
    }))
    event.target.reset();
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


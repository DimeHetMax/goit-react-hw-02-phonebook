import React, {Component} from "react";
import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
// import { ContactItem } from "./ContactItem/ContactItem";

export class App extends Component{
  state = {
    contacts: [],
    filter: ''
  }
  addContact = (event) => {
    event.preventDefault()
    const idNew = nanoid()
    const name = event.target.elements.name.value;
    const phone = event.target.elements.number.value;
    const contacts = this.state.contacts;
    const existingContact = contacts.find(contact => contact.name === name);
    if (existingContact) {
      alert('This name already exists in the phonebook!');
      return;
    }
    this.setState(prevState => ({
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
  handleFilterChange = (event) => {
    const filter = event.target.value.toLowerCase();
    this.setState({ 
      filter });
  }
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <ContactList contacts={contacts} filter={filter} deleteContact={this.deleteContact} />
      </div>
    );
  }
}
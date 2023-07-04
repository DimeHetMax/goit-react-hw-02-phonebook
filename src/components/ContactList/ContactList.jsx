import React from 'react';
import css from "./ContactList.module.css"

  
  
export class ContactList extends React.Component {
  handleDeleteContact = id => {
    this.props.deleteContact(id);
  };
  render() {
    const { contacts, filter } = this.props;
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
      <ul>
        {filter === '' ? (
          contacts.map(({ name, phone, id }) => 
          {return <li className ={css.phoneItem}key={id}><p>{name}: {phone}</p><button onClick={() => this.handleDeleteContact(id)}>Delete</button></li>;}
          )
        ) : (
          filteredContacts.map(({ id, name, phone }) => 
          
          {return <li key={id}><p>{name}: {phone}</p><button onClick={() => this.handleDeleteContact(id)}>Delete</button></li>;}
          )
        )}
      </ul>
    );
  }
}
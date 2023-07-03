import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';

  
  
export class ContactList extends React.Component {
  render() {
    const { contacts, filter } = this.props;
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
      <ul>
        {filter === '' ? (
          contacts.map(({ name, phone, id }) => {
           return( <li key={id}>
                <ContactItem  name ={name} phone ={phone}/>
                   </li>)
          }
        //   {return <li key={id}><p>{name}: {phone}</p></li>;}
            // <ContactItem  name ={name} phone ={phone}/>
          )
        ) : (
          filteredContacts.map(({ id, name, phone }) => 
          {
            return( <li key={id}>
                 <ContactItem  name ={name} phone ={phone}/>
                    </li>)
           }
        //   {return <li key={id}><p>{name}: {phone}</p></li>;}
        // <ContactItem id={id} name ={name} phone ={phone}/>
          )
        )}
      </ul>
    );
  }
}
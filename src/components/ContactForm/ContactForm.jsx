import React from 'react';

export class ContactForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.addContact}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[A-Za-z\u0080-\uFFFF ']+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            style={{ display: "block", marginTop: 10, marginBottom: 20 }}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="^(\+?[0-9.\(\)\-\s]*)$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            style={{ display: "block", marginTop: 10, marginBottom: 20 }}
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
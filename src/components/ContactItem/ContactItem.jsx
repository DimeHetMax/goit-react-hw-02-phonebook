import React from 'react';

export class ContactItem extends React.Component {
  render() {
    const { name, phone, id } = this.props;
    console.log(name,id)
    return (
    //   <li key={id}>
        <p>{name}: {phone}</p>
    //   </li>
    );
  }
}

import React, { Component } from "react";
import contacts from "./contacts.json";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.state.contacts = contacts.slice(0, 5);
    this.addRandom = this.addRandom.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.sortName = this.sortName.bind(this);
    this.sortPopularity = this.sortPopularity.bind(this);
  }
  makeRow(contact, key) {
    return (
      <tr key={key}>
        <td>
          <img src={contact.pictureUrl} width="100px" alt="" />
        </td>
        <td>{contact.name}</td>
        <td>{contact.popularity.toFixed(2)}</td>
        <td>
          <button
            onClick={() => {
              this.deleteContact(key);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
  addRandom() {
    let randomIndex = Math.floor(Math.random() * contacts.length);
    this.setState({
      contacts: [...this.state.contacts, contacts[randomIndex]]
    });
  }
  deleteContact(key) {
    const newArray = this.state.contacts.slice();
    newArray.splice(key, 1);
    this.setState({ contacts: newArray });
  }
  sortName() {
    this.setState({
      contacts: this.state.contacts.sort((a, b) => (a.name > b.name ? 1 : -1))
    });
  }
  sortPopularity() {
    this.setState({
      contacts: this.state.contatcs.sort((a, b) =>
        a.popularity > b.popularity ? 1 : -1
      )
    });
  }
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandom}>Add random contact</button>
        <button onClick={this.sortName}>Sort by Name</button>
        <button onClick={this.sortPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, index) => {
              return this.makeRow(contact, index);
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;

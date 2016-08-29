import React from 'react';
import {render} from 'react-dom';
import LikeComponent from './LikeComponent.jsx';
import ListComponent from './ListComponent.jsx';
import SearchComponent from './SearchComponent.jsx';
import AddUserComponent from './AddUserComponent.jsx';
import './css/app.css';

import lists from './mock/users.jsx';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      users: lists,
      formState: false,
      orderBy: 'name',
      orderIn: 'asc',
      userLookup: lists.slice()
    };
  }

  orderBy(arr) {
    let currentUsers = this.state.users;
    let orderby = arr[0];
    let sortedUser = currentUsers.sort((item, nextitem) => {
      if (arr[1].toLowerCase() === 'asc') {
        return item[orderby] >= nextitem[orderby];
      } else {
        return item[orderby] <= nextitem[orderby];
      }
    });

    this.setState({
      users: sortedUser
    });
  }

  search(term) {
    let currentUsers = this.state.userLookup;
    let pattern = new RegExp('^' + term, 'i');
    let filteredUser = currentUsers.filter((item, index) => {
        return pattern.test(item.name);
    });

    this.setState({
      users: filteredUser
    });
  }

  deleteItem(item) {
    let filteredList = this.state.users.filter((user, index) => {
      return item.name !== user.name;
    });

    let filteredCompleteList = this.state.userLookup.filter((user, index) => {
      return item.name !== user.name;
    });

    this.setState({
      users: filteredList,
      userLookup: filteredCompleteList
    });
  }

  toggleForm() {
    let currentState = this.state.formState;

    this.setState({
      formState: !currentState
    });
  }

  addItem(item) {
    let newuserslookup = this.state.userLookup;
    newuserslookup.push(item);
    this.setState({
      userLookup: newuserslookup
    });

    let newusers = this.state.users;
    newusers.push(item);
    this.setState({
      users: newusers
    });
  }

  render() {
    let heading = {
      fontFamily: 'Cambria',
      color: 'deepblue'
    };

    let unstyle = {
      display: this.state.formState ? 'none' : 'block'
    };

    let filterUsers = this.state.users.map((item, index) => {
      return (
        <ListComponent
            key = {index}
            item = {item}
            onDelete = {this.deleteItem.bind(this)}
          />
      )
    });

    return (
      <div>
        <h1 style={heading}>Dev List</h1>
        <p>Application to understand React.js</p>
        <AddUserComponent
          formState = {this.state.formState}
          toggleForm = {this.toggleForm.bind(this) }
          addItem = {this.addItem.bind(this)}
        />
        <div style={unstyle}>
          <SearchComponent
            orderBy = {this.state.orderBy}
            orderIn = {this.state.orderIn}
            onOrderBY = {this.orderBy.bind(this) }
            onSearch = {this.search.bind(this) }
          />
        </div>
        <ul style={unstyle} className='item-list'>{filterUsers}</ul>
        <LikeComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

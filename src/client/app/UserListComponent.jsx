import React from 'react';
import lists from './mock/users.jsx';

class UserListComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {users : lists};
  }

  render() {
    let itemStyle = {
      display: 'block',
      textTransform: 'capitalize'
    };

    let unstyle = {
      listStyleType: 'none',
      margin: '0',
      padding: '0',
      fontFamily: 'monospace'
    };

    let itemGroupStyle = {
      padding: '10px 0 10px 0',
      borderBottom: '2px dashed #ddd'
    };

    let filterUsers = this.state.users.map((item, index) => {
      return (
        <li key={index} className='item-group' style={itemGroupStyle}>
          <span className='item-name' style={itemStyle}>Name: {this.state.users[index].name}</span>
          <span className='item-name' style={itemStyle}>Experience(yrs): {this.state.users[index].exprienec}</span>
          <span className='item-name' style={itemStyle}>Skills: {this.state.users[index].skills.join(', ') }</span>
          <span className='item-name' style={itemStyle}>Role: {this.state.users[index].role}</span>
        </li>
      )
    });

    return (
      <ul style={unstyle} className='item-list'>{filterUsers}</ul>
    )
  }

}

export default UserListComponent;

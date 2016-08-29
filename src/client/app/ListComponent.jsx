import React from 'react';

class ListComponent extends React.Component {

  handleDelete() {
    this.props.onDelete(this.props.item);
  }

  render() {
    return (
      <li className='item-group'>
        <div className='item-cell'>
          <span className='item-remove' onClick={this.handleDelete.bind(this) }>X</span>
        </div>
        <p className='item-cell'>
          <span className='item-name' >Name: {this.props.item.name}</span>
          <span className='item-name' >Experience(yrs): {this.props.item.exprience}</span>
          <span className='item-name' >Skills: {this.props.item.skills.join(', ') }</span>
          <span className='item-name' >Role: {this.props.item.role}</span>
        </p>
      </li>
    )
  }

}

export default ListComponent;

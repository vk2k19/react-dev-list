import React from 'react';
import './css/form.css';

class SearchComponent extends React.Component {

  handleOrderBy(e) {
    let searchQuery = [];
    searchQuery.push(this.refs.inputOrderBy.value);
    searchQuery.push(this.refs.inputOrderIn.value);
    this.props.onOrderBY(searchQuery);
  }

  handleSearch(e) {
    this.props.onSearch(this.refs.inputSearch.value);
  }

  render() {
    return (
      <form className='form form-search'>
        <label>
          Search:
          <input type='text' placeholder='Enter name to search' ref='inputSearch' onChange={this.handleSearch.bind(this)} className="nm-Input"/>
        </label>
        <label>
          OrderBy:
          <select multiple={false} defaultValue={this.props.orderIn} ref='inputOrderBy' onChange={this.handleOrderBy.bind(this)} className="vsm-Input">
            <option value='name' >Name</option>
            <option value='exprience'>Experience</option>
            <option value='role'>Role</option>
          </select>
        </label>
        <label>
          OrderIn:
          <select multiple={false} defaultValue={this.props.orderIn} ref='inputOrderIn' onChange={this.handleOrderBy.bind(this)} className="msm-Input">
            <option value='asc'>ASC</option>
            <option value='dsc'>DSC</option>
          </select>
        </label>
      </form>
    )
  }

}

export default SearchComponent;

import React from 'react';
import './css/form.css';

class AddUserComponent extends React.Component {

  toggleAddForm(){
    this.props.toggleForm();
  }

  submitHandler(evt){
    evt.preventDefault();

    let skills = [];

    if (this.refs.inputSkillJava.checked) {
      skills.push(this.refs.inputSkillJava.value);
    }
    if (this.refs.inputSkillSpring.checked) {
      skills.push(this.refs.inputSkillSpring.value);
    }
    if (this.refs.inputSkillHibernate.checked) {
      skills.push(this.refs.inputSkillHibernate.value);
    }
    this.props.addItem({
      name: this.refs.inputName.value,
      exprience: this.refs.inputExperience.value,
      skills: skills,
      role: this.refs.inputRole.value
    });
    this.toggleAddForm();
  }

  render() {

    let formVisibility = {
      display: this.props.formState ? 'block' : 'none'
    };

    return(
      <div>
        <button className='action-item action-item--block' onClick={this.toggleAddForm.bind(this)}> Add user component </button>
        <div className='add-user-form'  style={formVisibility}>
          <form onSubmit={this.submitHandler.bind(this)} className='form form-add-user'>
            <ul className='item-list'>
              <li className='item-group'>
                <label htmlFor='name' className='sm-Input'>Name</label>
                <input id='name' type='text' placeholder='Enter your name here' ref='inputName' className="lg-Input"/>
              </li>
              <li className='item-group'>
                <label htmlFor='experience' className='sm-Input'>Experience(Yrs)</label>
                <input id='experience' type='number' min='0' max='60' ref='inputExperience' className="lg-Input"/>
              </li>
              <li className='item-group'>
                <span className='label sm-Input'>Skills</span>
                <span>
                  <label><input id='java' type='checkbox' value='java' ref='inputSkillJava' />Java</label>
                  <label><input id='Spring' type='checkbox' value='spring' ref='inputSkillSpring' />Spring</label>
                  <label><input id='Hibernate' type='checkbox' value='hibernate' ref='inputSkillHibernate' />Hibernate</label>
                </span>
              </li>
              <li className='item-group'>
                <label htmlFor='role' className='sm-Input'>Role</label>
                <input id='role' type='text' placeholder='Enter your desigantion/role here' ref='inputRole' className="lg-Input"/>
              </li>
              <li className='item-group item-group-noborder'>
                <button className='action-item' type='submit'>Add</button>
                <button className='action-item' type='reset'>Clear</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
      )

  };
}

export default AddUserComponent;

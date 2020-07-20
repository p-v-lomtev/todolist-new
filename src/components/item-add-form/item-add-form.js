import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
  state = {
   label: ''
  }

  changeLabel = (e) => {
      this.setState({
        label: e.target.value
      })
  }

  onSubmit = (e) => {
    e.preventDefault()

    if (this.state.label.trim()) {
      this.props.onAddItem(this.state.label)
      this.setState({
        label: ''
      })
    } 
  }
  
  render() {

    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input className='form-control col-lg-10 col-8' type='text' placeholder='Что нужно сделать' onChange={this.changeLabel} value={this.state.label}/>
        <button
          className="btn btn-outline-secondary">
          добавить 
        </button>
      </form>
    )
  }
}
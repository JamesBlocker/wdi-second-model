import React from 'react'
import httpClient from '../httpClient'

// have this form render when a user goes
// to "/bars/new"
// submit the form to post a new bar
// then redirect to "/bars"

class NewBar extends React.Component {

  state = {
    fields: { name: '', address: '' }
  }

  handleFormChange(evt) {
    this.setState({
      fields: {
        ...this.state.fields,
        [evt.target.name]: evt.target.value
      }
    })
  }
  
  handleFormSubmit(evt) {
    evt.preventDefault()
    httpClient.createBar(this.state.fields).then((serverResponse) => {
        // console.log(serverResponse.data)
        this.props.history.push("/bars")
    })
  }

  render() {
    const { name, address } = this.state.fields 
    return (
      <div className="NewBar">
        <h1>Add A Bar</h1>
        <form onChange={this.handleFormChange.bind(this)} onSubmit={this.handleFormSubmit.bind(this)}>
          <input name="name" type="text" placeholder="Name" value={name} />
          <input name="address" type="text" placeholder="Address" value={address} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default NewBar
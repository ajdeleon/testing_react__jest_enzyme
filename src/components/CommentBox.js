import React from 'react'

class CommentBox extends React.Component {
  state = { comment: '' }

  handleChange = e => {
    this.setState({ comment: e.target.value })
  }

  handleFormSubmit = e => {
    e.preventDefault()

    this.setState({ comment: '' })
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <h4>Add a new comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button>Submit</button>
        </div>
      </form>
    )
  }
}

export default CommentBox

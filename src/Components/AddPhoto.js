import React, {Component} from 'react';

class AddPhoto extends Component {

    constructor () {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (event) {
        event.preventDefault();
        const imageLink = event.target.elements.Link.value
        const imageDesc = event.target.elements.Desc.value
        const post = {
            id: Number(new Date()),
            description: imageDesc,
            imageLink: imageLink
        }

        if (imageDesc && imageLink) {
            this.props.onAddPhoto(post)
        }
    }

    render () {
        return (
        <div>
        <h1>Pinsta</h1>
        <div className="form">
        <form onSubmit = {this.handleSubmit}>
            <input type="text" placeholder="Link" name="Link"/>
            <input type="text" placeholder="Description" name="Desc"/>
            <button> Post </button>
        </form>
        </div>
        </div>
        )
    }
}

export default AddPhoto
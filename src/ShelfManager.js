import React, {Component} from 'react'

class ShelfManager extends Component {   
    state = {
        value: ''
    }
    
    render() {
    const handleChange = (event) => {
        this.setState({ value: event.target.value }, () =>
          this.props.onChangeShelf(this.props.book, this.state.value)
        );
        event.preventDefault();
      };
        let value = 'none'
    for (let b of this.props.books) {
        if(b.id === this.props.book.id) {
            value = b.shelf; 
            break;
        }
    }

        return(
            <div className="book-shelf-changer">
                <select value={value} onChange={e => handleChange(e)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default ShelfManager
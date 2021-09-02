import React, { Component } from 'react' 
import { FaStar } from 'react-icons/fa'

class StarRating extends Component {
    state= {
        valueStar: 5, 
        ratingValue: 0,
        onHover: 0
    }

    render() {
        const { ratingValue } = this.state;
        const { onHover } = this.state;

        return(
            <div>
            {[...Array(5)].map( (star, value) => {
                const values = value + 1; 

                return (<label key={values}>
                <input type='radio' 
                name='stars' 
                value={values} 
                onClick={() => this.setState({ratingValue: values}) }
                />
                <FaStar size={20} 
                className='star-rating' 
                onMouseEnter={() => this.setState({onHover: values})}
                onMouseLeave={() => this.setState({onHover: 0})}
                color={values <= (ratingValue || onHover)  ? '#ffc107' : '#e4e5e9'}
                />
                </label>
                )
            })}
            <div className='rate-out-of'>
            <p>{ratingValue} out of {this.state.valueStar}</p>
            </div>
            </div>
        )
    }
}

export default StarRating
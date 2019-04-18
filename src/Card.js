import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property}) => {
    const {index, picture, model, date,} = property;
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt={model} />
            <div className="details">
                <p className="location">
                <div className = "descript">
                
                {model}
                </div>
                    
                    <br />
                    {date}
                </p>
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;
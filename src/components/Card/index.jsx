import React from 'react';
import './card.css'


const Card = (props) => {

    return (
        <div className="card">
            <div className="cardHeader">
                <p>{props.username}</p>
                <i className="fa fa-ellipsis-h" />
            </div>
            <div>
                <img className="photo" src={props.imageURL} alt="userImage" />
            </div>
            <div className="cardIcons icons">
                <i className="fa fa-heart" />
                <i className="fa fa-comment" />
            </div>
        </div>
    );
};

export default Card;
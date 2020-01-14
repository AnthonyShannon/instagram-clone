import React from 'react';

const styles = {
    Card: {
        maxHeight: '100%',
        width: '600px',
        border: '#d3d3d3 solid 1px',
        margin: 'auto',
        marginTop: '60px'
    },
    CardHeader: {
        display: 'flex',
        padding: '0px 20px 0px 20px',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '#d3d3d3 solid 1px'
    },
    Photo: {
        width: '100%'
    },
    CardIcons: {
        display: 'flex',
        alignItems: 'flex-start'
    },
    i: {
        margin: '10px'
    }
}

const Card = (props) => {
    return (
        <div style={styles.Card}>
            <div style={styles.CardHeader}>
                <p>{props.username}</p>
                <i className="fa fa-ellipsis-h" />
            </div>
            <div>
                <img style={styles.Photo} src={props.imageURL} alt="userImage" />
            </div>
            <div style={styles.CardIcons}>
                <i style={styles.i} className="fa fa-heart" />
                <i style={styles.i} className="fa fa-comment" />
            </div>
        </div>
    );
};

export default Card;
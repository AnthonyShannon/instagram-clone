import React from 'react';
import Card from '../components/Card';
import Suggestions from '../components/Suggestions';
import MyImage from '../testPhoto/profilePhoto.jpg';
import { Grid } from '@material-ui/core'

const Homepage = () => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item sm={12} md={7}>
                    <Card image={MyImage}
                        username='ashannon1990'
                        datePosted='November 13, 2019'
                        description='Got some professional headshots done, really like how this one turned out. What do you guys think?'
                        commenter="theGreatestEva2"
                        comment="looks great broski"
                    />
                </Grid>
                <Grid item md={5}>
                    <Suggestions avatarColor='teal' initial='J' suggestedUser='JMoney123' />
                </Grid>
            </Grid>

        </div>
    );
};

export default Homepage;
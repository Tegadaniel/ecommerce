import React from 'react'
import {Container, Typography, Button, Grid} from '@material-ui/core';
const Cart = () => {
    // const classes = useStyles();
    const isEmpty = true;

    const EmptyCart = ({cart}) =>(
        <Typography variant = "subtitle1">
            Cart Currently empty, add items
        </Typography>
    )

    const FilledCart = () =>(
        <>
        <Grid conatiner spacing = {3}>

        </Grid>
        </>
    )
    return (
        <Container>
            <div >
            <Typography  variant="h3">
                Your Shopping Cart
            </Typography>
            {isEmpty ? <EmptyCart/>: <FilledCart/>}
            </div>
        </Container>
    )
}

export default Cart

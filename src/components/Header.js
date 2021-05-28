import React from 'react'
import {Grid} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Link from '@material-ui/core/Link';
import { AppBar, Toolbar, Typography} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1,
        display: 'flex',
        color: 'white'
    },
    cartStyles:{
        color: 'white',
        
    }
}))
function Header( {addCart}) {
    const classes = useStyles();
    return (
        <AppBar position="fixed">
            <Toolbar >
                <Grid item xs={11}>
                <Link to ="/">
                <Typography variant = "h6" className = {classes.typographyStyles}>
                 Fake Store
                </Typography>
                </Link>
                </Grid>

                <Grid item xs={1}>
                <Link to ="/cart">
                <IconButton arial-label = "Show cart Items">
                <Badge badgeContent={addCart} color="secondary">
                <ShoppingCartIcon className = {classes.cartStyles} />
                </Badge>
                </IconButton>
                {addCart}
                </Link> 
                </Grid>

            </Toolbar>
        </AppBar>
    )
}

export default Header;
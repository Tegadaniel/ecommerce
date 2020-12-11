import React from 'react'
import { AppBar, Toolbar, Typography} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1,
        display: 'flex'
    }
}))
function Header( {addCart}) {
    const classes = useStyles();
    return (
        <AppBar position="fixed">
            <Toolbar >
                <Typography className = {classes.typographyStyles}>
                    Fake Store
                </Typography>
                <ShoppingCartIcon />{addCart}
            </Toolbar>
        </AppBar>
    )
}

export default Header;
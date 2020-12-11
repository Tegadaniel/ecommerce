import React from 'react'
import { Grid } from '@material-ui/core';
import GoodsList from './GoodsList';
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    gridStyles: {
        marginTop: '65px'
    }
}))

const GoodsGrid = ({items, isLoading, addCart}) => {
    const classes = useStyles();
return isLoading ? (<h1>Loading....</h1>) :
        (<Grid container spacing ={4}  className = {classes.gridStyles}>
            {items.map((item) =>(
	     <Grid item xs={12}  sm ={4} key={item.id}>
       		 <GoodsList item={item} addCart={addCart}> </GoodsList>
              </Grid>   
            ))}
       </Grid>)
    
}

export default GoodsGrid

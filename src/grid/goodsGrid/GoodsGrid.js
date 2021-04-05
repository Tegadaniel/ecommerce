import React from 'react'
import { Grid } from '@material-ui/core';
import GoodsList from '../goodsList/GoodsList';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    
    root: {
        flexGrow: 1,
        marginTop: '65px',
    
      },
      control: {
        padding: theme.spacing(2),
      },
      flexStyle:{
    
        justifyContent: 'center'
      }
    }));
    
    
    const GoodsGrid = ({items, isLoading, addCart}) => {
        // const [spacing] = React.useState(2);
        const classes = useStyles();
    return isLoading ? (<h1>Loading....</h1>) :
            (<Grid container spacing ={4}  className = {classes.root}>
                {items.map((item) =>(
             <Grid item xs={12}  sm ={4} key={item.id}>
                    <GoodsList  className={classes.flexStyle} item={item} addCart={addCart}> </GoodsList>
                  </Grid>   
                ))}
           </Grid>)
        
    }
    
    export default GoodsGrid
    
import React, { useEffect, useState } from 'react'
import {Grid} from '@material-ui/core'
import Header from './Header'
import axios from 'axios'
import GoodsGrid from '../GoodsGrid/GoodsGrid'

function Body() {
    const [items, setItems] = useState([])
    const [cart, setCart] = useState([])
    const [isLoading, setisLoading] = useState(true)

    useEffect(() =>{
        const fetchItems = async () =>{
            const result = await axios(`https://fakestoreapi.com/products`)
            console.log(result.data)

            setItems(result.data)
            setisLoading(false)
        }
        fetchItems()
    }, [])
    const addToCart = (items) =>{
        console.log(cart.length)
        console.log('Before add cart!!!!!')
        setCart(cart => [...cart, items])
        console.log('After adding cart')
        console.log(addToCart.length)
    }
    return (

    <Grid container direction = "column">
        <Header addCart={cart.length}/>
        <Grid item container >
            <Grid item xs={false} sm={2}/>
        <Grid item xs={12} sm ={8}>
       <GoodsGrid isLoading={isLoading} items={items} addCart={addToCart}/>
        </Grid>
        <Grid item xs={false} sm={2}/>
        </Grid>
    </Grid>

    )
}

export default Body

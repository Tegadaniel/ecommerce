import React, { useEffect, useState } from 'react'
import {Grid} from '@material-ui/core'
import axios from 'axios'
import GoodsGrid from '../../grid/goodsGrid/GoodsGrid'
import Header from '../header/Header'
import Cart from '../cart/Cart'

function Body() {
    const [items, setItems] = useState([])
    const [cart, setCart] = useState([])



    const fetchItems = async () =>{
        const result = await axios(`https://fakestoreapi.com/products`)
        console.log(result.data)

        setItems(result.data)

    }

    const addToCart =  (items) =>{
        console.log(cart.length)
        console.log('Before add cart!!!!!')
       const _cart = [...cart];
       _cart[_cart.length] = items;
       console.log(_cart)


        setCart(_cart)
        console.log('After adding cart')
        console.log(_cart.length)
        console.log(_cart)
    }

    useEffect(() =>{
        fetchItems()
    }, [])

    return (

    <Grid container direction = "column">
        <Header addCart={cart.length}/>
        <Grid item container >
            <Grid item xs={false} sm={2}/>
        <Grid item xs={12} sm ={8}>
       <GoodsGrid  items={items} addCart={addToCart}/>
        </Grid>
        <Grid item xs={false} sm={2}/>
        </Grid>
    </Grid>

    )
}

export default Body

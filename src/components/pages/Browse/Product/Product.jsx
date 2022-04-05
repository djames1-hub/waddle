import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart, CallMissedSharp } from '@material-ui/icons'

/*
This creates the individual cards that will be displayed as items in the browser
*/

const Product = ({ product }) => {
    const classes = useStyles();

    return (
        <Card className={CallMissedSharp.root}>
            <CardMedia className={CallMissedSharp.media} image={product.image} title={product.name}/>

            <CardContent>
                <div className={CallMissedSharp.CardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price}
                    </Typography>
                </div>
                <Typography variant="h2"  color="textSecondary">
                    {product.description}
                </Typography>
            </CardContent>

            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
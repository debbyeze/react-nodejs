const express = require('express')
const app = express()
const {products} = require('./data')
const cors = require("cors")


app.use(express.json());
app.use(cors());



app.get('/', (req,res)=>{
    res.json(products)
})
app.get('/api/products', (req,res)=>{
    const newProducts = products.map((product)=>{
        const {name,image} = product;
        return {name,image}
    })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res)=>{
    const {productID} = req.params
    const singleProduct =products.find((product)=> product.id === Number(productID))
   if (!singleProduct){
       return res.status(404).send('product does not exist')
   }
   
    res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req,res)=>{
    console.log(req.params)
    res.send('helloworld')
})

app.get('/api/v1/query', (req,res)=>{
    const {search, limit} = req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts =sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }

    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }

    if(sortedProducts.length < 1){
        return res.status(200).send('no products matched your serach')
    }
    
    res.status(200).json(sortedProducts)
    
})

app.listen(5000, ()=>{
   console.log('server is listening on port 5000...')
})

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen
import '../App.css';

function ProductList({ product,addToCart }) {
    return (
        <div className='flex'>
            {
                product.map((item, productIndex) => {
                    return (                   
                            <div className='product-item'>
                                <img className = 'product-image' src={item.url} width="100%" alt='sheeeesh here'/>
                                <p className = 'product-name'>{item.name} | {item.category} </p>
                                <p className = 'product-price'> Php {item.price} </p>
                                <button className = 'addbutton' onClick={() => {
                                    addToCart(item) 
                                    console.log(`Added ${item.name} to cart`)
                                    }} >Add To Cart</button>
                            </div>
                    )
                }
                )
            }
        </div>
    )
}

export default ProductList
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import { useState } from 'react';

function App() {

  const [product] = useState([
    {
      url: 'https://www.trustedreviews.com/wp-content/uploads/sites/54/2018/12/P1110312.jpg',
      name: 'Acer Predator Helios 300',
      category: 'Laptop',
      price: 50000,
      alt: "Product 1",
      id: '1'
    },
    {
      url: 'https://www.patek.com/resources/img/instagram/episodes/episode_24/post_1/6300G_010_2019_1_500.jpg',
      name: 'Patek Philippe Grandmaster Chime',
      category: 'Watches',
      price: 2700000,
      alt: "Product 2",
      id: '2'
    },
    {
      url: 'https://www.bhphotovideo.com/images/images2500x2500/lenovo_81w1000bus_ideapad_3_r3_3250u_1590892.jpg',
      name: 'Lenovo IdeaPad 3',
      category: 'Laptops',
      price: 36000,
      alt: "Product 3",
      id: '3'
    },
    {
      url: 'https://fdn2.gsmarena.com/vv/bigpic/nokia-3210.jpg',
      name: 'Nokia 3210',
      category: 'Smartphones',
      price: 3666,
      alt: "Product 4",
      id: '4'
    },
    {
      url: 'https://www.yugatech.com/wp-content/uploads/2019/02/cherry-mobile-c26i.jpg',
      name: 'Cherry Mobile C26i',
      category: 'Smartphones',
      price: 2777,
      alt: "Product 5",
      id: '5'
    },
    {
      url: 'https://i5.walmartimages.com/asr/53aa95b8-aaf7-4097-948c-e20b92bdb6d1.038abc2d80455289343465f1ed80fa2b.jpeg',
      name: 'Shin Ramyun Spicy Beef',
      category: 'Food',
      price: 100,
      alt: "Product 6",
      id: '6'
    },
  ])

  const [cart, setCart] = useState([])

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  // const deleteCart = (cartindex) => {
  //   setCart([cart.filter((cartItem)=> cartItem.index !== cartindex)])
  //   console.log("Deleted ", data.name, " from cart")
  // }

  function removeCart(item){
    setCart((cart) => {
      let newsheesh = [...cart];
      newsheesh.splice(cart.indexOf(item), 1)
      return newsheesh;
    })
  }

  

  return (
    <div>
      <Header count={cart.length} title={"LAZADO"} data={menus}></Header>

      <div className='flex'>
        <ProductList product={product} addToCart={addToCart} ></ProductList>
        <div className='flex2'>
          <ShoppingCart className="flex2" cart={cart} removeCart={removeCart} count={cart.length} ></ShoppingCart> 
        </div>
      </div>
    </div>
  );
}

const menus = [
  { name: "Appliances", url: "#", id: 1 },
  { name: "Groceries", url: "#", id: 2 },
  { name: "Gadgets", url: "#", id: 3 },
  { name: "Clothing", url: "#", id: 4 },
];

export default App;

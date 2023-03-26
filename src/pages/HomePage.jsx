import { useState } from 'react'
import './HomePage.css'
import MenClothing1 from './Images/Clothings/MenClothing1.avif'
import MenClothing2 from './Images/Clothings/MenClothing2.avif'
import MenClothing3 from './Images/Clothings/MenClothing3.jpg'
import WomenClothing1 from './Images/Clothings/WomenClothing1.jfif'
import WomenClothing2 from './Images/Clothings/WomenClothing2.jpg'
import WomenShort1 from './Images/Shorts/WomenShorts1.jpeg'
import WomenShort2 from './Images/Shorts/WomenShort2.jfif'
import WomenShort3 from './Images/Shorts/WomenShort3.jpg'
import MenShort1 from './Images/Shorts/MenShort1.jpeg'
import MenShort2 from './Images/Shorts/MenShort2.jfif'
import MenShort3 from './Images/Shorts/MenShort3.jpg'
import Bag1 from './Images/Bags & Accessories/Bag1.jpeg'
import Bag2 from './Images/Bags & Accessories/Bag2.jpg'
import Bag3 from './Images/Bags & Accessories/Bag3.webp'
import Jewelry1 from './Images/Jewelry/Jewelry1.webp'
import Jewelry2 from './Images/Jewelry/Jewelry2.jfif'
import Jewelry3 from './Images/Jewelry/Jewelry3.jfif'
import Jewelry4 from './Images/Jewelry/Jewelry4.jfif'
import Gown1 from './Images/Gown/Gown1.jpg'
import Gown2 from './Images/Gown/Gown2.jpg'
import Gown3 from './Images/Gown/Gown3.jpg'


const HomePage = () => {
    
    const [Products, setProducts] = useState(0)


    const AddProducts = () => {
        setProducts(Products + 1)
        setProducts2(Products2 + 1)
    }
    const SubProducts = () => {
        setProducts(Products - 1)
    }

    const [Products1, setProducts1] = useState(0)

    const AddProducts1 = () => {
        setProducts1(Products1 + 1)
    }
    const SubProducts1 = () => {
        setProducts1(Products1 - 1)
    }

    const [Products2, setProducts2] = useState(0)

    const AddProducts2 = () => {
        setProducts1(Products2 + 1)
    }
    const SubProducts2 = () => {
        setProducts1(Products2 - 1)
    }

    const [Products3, setProducts3] = useState(0)

    const AddProducts3 = () => {
        setProducts3(Products3 + 1)
    }
    const SubProducts3 = () => {
        setProducts3(Products3 - 1)
    }

    const [Products4, setProducts4] = useState(0)

    const AddProducts4 = () => {
        setProducts4(Products4 + 1)
    }
    const SubProducts4 = () => {
        setProducts4(Products4 - 1)
    }

    const [Products5, setProducts5] = useState(0)

    const AddProducts5 = () => {
        setProducts5(Products5 + 1)
    }
    const SubProducts5 = () => {
        setProducts5(Products5 - 1)
    }

    const [Products6, setProducts6] = useState(0)

    const AddProducts6 = () => {
        setProducts6(Products6 + 1)
    }
    const SubProducts6 = () => {
        setProducts6(Products6 - 1)
    }

    const ProdcutsInfo = () => {
        
        id: '1'
        Name: 'Men Black T-shirt'
        Image: './Images/Clothings/MensClothing1.avif'
        
        
    }

    const [showcart, setShowcart ] = useState(false);
    const showcartFunction = () => {
        setShowcart(!showcart);
    }

    const CloseShowcart = () => {
        setShowcart(false);
    }


    const [show, setShow ] = useState(false);
    const showFunction = () => {
        setShow(!show);
    }

    const CloseShow = () => {
        setShow(false);
    }

    const [show1, setShow1 ] = useState(false);
    const showFunction1 = () => {
        setShow1(!show1);
    }

    const CloseShow1 = () => {
        setShow1(false);
    }

    const [show2, setShow2 ] = useState(false);
    const showFunction2 = () => {
        setShow2(!show1);
    }

    const CloseShow2 = () => {
        setShow2(false);
    }

    const [show3, setShow3 ] = useState(false);
    const showFunction3 = () => {
        setShow3(!show1);
    }

    const CloseShow3 = () => {
        setShow3(false);
    }



    return (
    <div className='firstContainer'>
        
        <div className='cart-icon'>
            
            <div onClick={showcartFunction} className='cart-arrow-down'>
                <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
                <div className='count-items'>{Products}</div>
                </div>
            {showcart?
            <div className='display-cart-items'>
                <h1><img src={MenClothing1} width={50} height={50} />Men's Black T-shirt: {Products}{showcart}<button id='SubProducts' onClick={SubProducts}><i class="fa fa-minus" aria-hidden="true"></i></button></h1>
                <h1><img src={MenClothing2} width={50} height={50} />Men White T-shirt: {Products1}{showcart}</h1>
                <h1><img src={MenClothing3} width={50} height={50} />Men PKMKB T-shirt: {Products2}{showcart}</h1>
                <h1><img src={WomenClothing1} width={50} height={50} />Women Thelovely shirt: {Products3}{showcart}</h1>
                <h1><img src={WomenClothing2} width={50} height={50} />Women Nike T-shirt: {Products4}{showcart}</h1>
                <h1><img src={WomenShort1} width={50} height={50} />{Products6}{showcart}</h1>
                <h1><img src={WomenShort2} width={50} height={50} />{Products6}{showcart}</h1>
                <h1><img src={WomenShort3} width={50} height={50} />{Products6}{showcart}</h1>
                <h1><img src={MenShort1} width={50} height={50} />{Products6}{showcart}</h1>
                <h1><img src={MenShort2} width={50} height={50} />{Products6}{showcart}</h1>
                <h1><img src={MenShort3} width={50} height={50} />{Products6}{showcart}</h1>
                <h1><img src={Bag1} width={50} height={50} />{Products6}{showcart}</h1>
                <h1><img src={Bag2} width={50} height={50} />{Products6}{showcart}</h1>
                <h1><img src={Bag3} width={50} height={50} />{Products6}{showcart}</h1>
            </div>
            :""}
        </div>

        <div className='product-items'>
            
            <div className='products'>
                <img src={MenClothing1} width={260} height={260} onClick={showFunction}/>
                <article>Men Black T-shirt</article>
                <div className='AddBtn'>
                <button id='AddToCart' className='AddToCart' onClick={AddProducts}>Add To Cart</button>
                    {show?
                    <div className='click-show'>
                        <button className='CloseBtn' onClick={CloseShow}><i class="fa fa-times" aria-hidden="true"></i></button>
                        <img src={MenClothing1} width={260} height={260} />
                        <button id='AddProducts'><i class="fa fa-plus" aria-hidden="true"></i></button>
                        <h1>{Products}</h1>
                    </div>
                    :""}
                </div> 
            </div>
            
            <div className='products'>
                <img src={MenClothing2} width={260} height={260} />
                <article>Men White T-shirt</article>
                <div className='AddBtn'>
                <button id='AddToCart' onClick={showFunction1} className='AddToCart'>Add To Cart</button>
                {show1?
                    <div className='click-show'>
                        <button className='CloseBtn' onClick={CloseShow1}><i class="fa fa-times" aria-hidden="true"></i></button>
                        <img src={MenClothing2} width={260} height={260} />
                        <button id='AddProducts' onClick={AddProducts1}><i class="fa fa-plus" aria-hidden="true"></i></button>
                        <h1>{Products1}</h1>
                        <button id='SubProducts' onClick={SubProducts1}><i class="fa fa-minus" aria-hidden="true"></i></button>
                    </div>
                    :""}
                </div>
            </div>
            <div className='products'>
                <img src={MenClothing3} width={260} height={260} />
                <article>Men PKMKB T-shirt</article>
                <div className='AddBtn'>
                    <button id='AddToCart' onClick={showFunction2} className='AddToCart'>Add To Cart</button>
                    {show2?
                    <div className='click-show'>
                        <button className='CloseBtn' onClick={CloseShow2}><i class="fa fa-times" aria-hidden="true"></i></button>
                        <img src={MenClothing3} width={260} height={260} />
                        <button id='AddProducts' onClick={AddProducts}><i class="fa fa-plus" aria-hidden="true"></i></button>
                        <h1>{Products2}</h1>
                        <button id='SubProducts' onClick={SubProducts}><i class="fa fa-minus" aria-hidden="true"></i></button>
                    </div>
                    :""}
                </div>
            </div>

            <div className='products'>
                <img src={WomenClothing1} width={260} height={260} />
                <article>Women Thelovely shirt</article>
                <div className='AddBtn'>
                    <button id='AddToCart' onClick={showFunction3} className='AddToCart'>Add To Cart</button>
                    {show3?
                    <div className='click-show'>
                        <button className='CloseBtn' onClick={CloseShow3}><i class="fa fa-times" aria-hidden="true"></i></button>
                        <img src={WomenClothing1} width={260} height={260} />
                        <button id='AddProducts' onClick={AddProducts}><i class="fa fa-plus" aria-hidden="true"></i></button>
                        <h1>{Products3}</h1>
                        <button id='SubProducts' onClick={SubProducts}><i class="fa fa-minus" aria-hidden="true"></i></button>
                    </div>
                    :""}
                </div>
            </div>

            <div className='products'>
                <img src={WomenClothing2} width={260} height={260} />
                <article>Women Nike T-shirt</article>
                <div className='AddBtn'>
                    <button id='AddToCart' className='AddToCart'>Add To Cart</button>
                    <button id='AddProducts' onClick={AddProducts4}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <h1>{Products4}</h1>
                    <button id='SubProducts' onClick={SubProducts4}><i class="fa fa-minus" aria-hidden="true"></i></button>
                </div>
            </div>

            <div className='products'>
                <img src={WomenShort1} width={260} height={260} />
                <article>Women Short Casual Elastic Waist Summer Beach</article>
                <div className='AddBtn'>
                    <button id='AddToCart' className='AddToCart'>Add To Cart</button>
                    <button id='AddProducts' onClick={AddProducts5}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <h1>{Products5}</h1>
                    <button id='SubProducts' onClick={SubProducts5}><i class="fa fa-minus" aria-hidden="true"></i></button>
                </div>
            </div>

            <div className='products'>
                <img src={WomenShort2} width={260} height={260} />
                <article>Womens Cotton Linen Plain Elastic Waisted Summer Short Wodstyle</article>
                <div className='AddBtn'>
                    <button id='AddToCart' className='AddToCart'>Add To Cart</button>
                    <button id='AddProducts' onClick={AddProducts5}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <h1>{Products5}</h1>
                    <button id='SubProducts' onClick={SubProducts5}><i class="fa fa-minus" aria-hidden="true"></i></button>
                </div>
            </div>

            <div className='products'>
                <img src={WomenShort3} width={260} height={260} />
                <article>Womens Bermuda Shorts</article>
                <div className='AddBtn'>
                    <button id='AddToCart' className='AddToCart'>Add To Cart</button>
                    <button id='AddProducts' onClick={AddProducts5}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <h1>{Products5}</h1>
                    <button id='SubProducts' onClick={SubProducts5}><i class="fa fa-minus" aria-hidden="true"></i></button>
                </div>
            </div>

            <div className='products'>
                <img src={MenShort1} width={260} height={260} />
                <article>Men's Knig Jogger Shorts</article>
                <div className='AddBtn'>
                    <button id='AddToCart' className='AddToCart'>Add To Cart</button>
                    <button id='AddProducts' onClick={AddProducts5}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <h1>{Products5}</h1>
                    <button id='SubProducts' onClick={SubProducts5}><i class="fa fa-minus" aria-hidden="true"></i></button>
                </div>
            </div>

            <div className='products'>
                <img src={MenShort2} width={260} height={260} />
                <article>Men's Lived-In Straight Cargo Shorts for Men</article>
                <div className='AddBtn'>
                    <button id='AddToCart' className='AddToCart'>Add To Cart</button>
                    <button id='AddProducts' onClick={AddProducts5}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <h1>{Products5}</h1>
                    <button id='SubProducts' onClick={SubProducts5}><i class="fa fa-minus" aria-hidden="true"></i></button>
                </div>
            </div>

            <div className='products'>
                <img src={MenShort3} width={260} height={260} />
                <article>Men's Cargo Shorts Cotton 3/4 Loose Fit Below Knee Capri Cargo</article>
                <div className='AddBtn'>
                    <button id='AddToCart' className='AddToCart'>Add To Cart</button>
                    <button id='AddProducts' onClick={AddProducts5}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <h1>{Products5}</h1>
                    <button id='SubProducts' onClick={SubProducts5}><i class="fa fa-minus" aria-hidden="true"></i></button>
                </div>
            </div>

            <div className='products'>
                <img src={Bag1} width={260} height={260} />
                <article>Classic Backpack High Quality</article>
                <div className='AddBtn'>
                    <button id='AddToCart' className='AddToCart'>Add To Cart</button>
                    <button id='AddProducts' onClick={AddProducts5}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <h1>{Products5}</h1>
                    <button id='SubProducts' onClick={SubProducts5}><i class="fa fa-minus" aria-hidden="true"></i></button>
                </div>
            </div>

            <div className='products'>
                <img src={Bag3} width={260} height={260} />
                <article>POPPY Small Backpack Purse for Women</article>
                <div className='AddBtn'>
                    <button id='AddToCart' className='AddToCart'>Add To Cart</button>
                    <button id='AddProducts' onClick={AddProducts5}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <h1>{Products5}</h1>
                    <button id='SubProducts' onClick={SubProducts5}><i class="fa fa-minus" aria-hidden="true"></i></button>
                </div>
            </div>

            <div className='products'>
                <img src={Bag2} width={260} height={260} />
                <article>Women's Edgy Exclusive Grey Italiana Leather Tote Handbag</article>
                <div className='AddBtn'>
                    <button id='AddToCart' className='AddToCart'>Add To Cart</button>
                    <button id='AddProducts' onClick={AddProducts5}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <h1>{Products5}</h1>
                    <button id='SubProducts' onClick={SubProducts5}><i class="fa fa-minus" aria-hidden="true"></i></button>
                </div>
            </div>

            <div className='products'>
                <img src={Jewelry1} width={260} height={260} />
                <article>Luxurious Pearl Wedding Bridal Jewelry Sets Tiara Crown Necklace</article>
                <div className='AddBtn'>
                    <button id='AddToCart' className='AddToCart'>Add To Cart</button>
                    <button id='AddProducts' onClick={AddProducts5}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <h1>{Products5}</h1>
                    <button id='SubProducts' onClick={SubProducts5}><i class="fa fa-minus" aria-hidden="true"></i></button>
                </div>
            </div>

            <div className='products'>
                <img src={Jewelry2} width={260} height={260} />
                <article>Gold Plated Jewelry Sets For Women Crystal</article>
                <div className='AddBtn'>
                    <button id='AddToCart' className='AddToCart'>Add To Cart</button>
                    <button id='AddProducts' onClick={AddProducts5}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <h1>{Products5}</h1>
                    <button id='SubProducts' onClick={SubProducts5}><i class="fa fa-minus" aria-hidden="true"></i></button>
                </div>
            </div>

            <div className='products'>
                <img src={Jewelry3} width={260} height={260} />
                <article>Cz Chandelier Earrings - Beloved Sparkles</article>
                <div className='AddBtn'>
                    <button id='AddToCart' className='AddToCart'>Add To Cart</button>
                    <button id='AddProducts' onClick={AddProducts5}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <h1>{Products5}</h1>
                    <button id='SubProducts' onClick={SubProducts5}><i class="fa fa-minus" aria-hidden="true"></i></button>
                </div>
            </div>

            <div className='products'>
                <img src={Jewelry4} width={260} height={260} />
                <article>Yiwu Xuping Jewelry 18k Gold Plated Fashion Huggies Earring Jewelry For Women</article>
                <div className='AddBtn'>
                    <button id='AddToCart' className='AddToCart'>Add To Cart</button>
                    <button id='AddProducts' onClick={AddProducts5}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <h1>{Products5}</h1>
                    <button id='SubProducts' onClick={SubProducts5}><i class="fa fa-minus" aria-hidden="true"></i></button>
                </div>
            </div>

            <div className='products'>
                <img src={Gown1} width={260} height={260} />
                <article>Oailiya Women's Long Formal Prom Ball Dress Party Gown</article>
                <div className='AddBtn'>
                    <button id='AddToCart' className='AddToCart'>Add To Cart</button>
                    <button id='AddProducts' onClick={AddProducts5}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <h1>{Products5}</h1>
                    <button id='SubProducts' onClick={SubProducts5}><i class="fa fa-minus" aria-hidden="true"></i></button>
                </div>
            </div>
            
            <div className='products'>
                <img src={Gown2} width={260} height={260} />
                <article>Women's Summer Sexy Backless Long Sleeve Shirt Casual Blouse Tops Shirt</article>
                <div className='AddBtn'>
                    <button id='AddToCart' className='AddToCart'>Add To Cart</button>
                    <button id='AddProducts' onClick={AddProducts5}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <h1>{Products5}</h1>
                    <button id='SubProducts' onClick={SubProducts5}><i class="fa fa-minus" aria-hidden="true"></i></button>
                </div>
            </div>

            <div className='products'>
                <img src={Gown3} width={260} height={260} />
                <article>Simple Navy Blue Long Prom Dresses With Pockets APD3086 | Royal blue</article>
                <div className='AddBtn'>
                    <button id='AddToCart' className='AddToCart'>Add To Cart</button>
                    <button id='AddProducts' onClick={AddProducts5}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <h1>{Products5}</h1>
                    <button id='SubProducts' onClick={SubProducts5}><i class="fa fa-minus" aria-hidden="true"></i></button>
                </div>
            </div>

            
        </div>
    </div>

    )
}

export default HomePage
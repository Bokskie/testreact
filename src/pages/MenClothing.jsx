import { useState } from 'react'
import './MenClothing.css'
import MenClothing1 from './Images/Clothings/MenClothing1.avif'
import MenClothing2 from './Images/Clothings/MenClothing2.avif'
import MenClothing3 from './Images/Clothings/MenClothing3.jpg'

const MenClothing = () => {

      
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


    return(
        <div className="MenClothing">
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
            </div>
        </div>
    )
}

export default MenClothing

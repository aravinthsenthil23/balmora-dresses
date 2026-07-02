import { useState } from 'react'
import '../css/grid.css'

const hatImages = {
    darkbluecap: new URL('../assets/darkbluecap.png', import.meta.url).href,
    darkgraycap: new URL('../assets/darkgraycap.png', import.meta.url).href,
    sandalcap: new URL('../assets/sandalcap.png', import.meta.url).href,
    redcap: new URL('../assets/redcap.png', import.meta.url).href,
    greencap: new URL('../assets/greencap.png', import.meta.url).href,
    darkblue: new URL('../assets/darkblue.png', import.meta.url).href,
    blackbalmoral: new URL('../assets/black-balmoral.png', import.meta.url).href,
    bluetop: new URL('../assets/bluetop.png', import.meta.url).href,
    sandaltop: new URL('../assets/sandaltop.png', import.meta.url).href,
    blackfullhand: new URL('../assets/blackfullhand.png', import.meta.url).href,
    bluefullhand: new URL('../assets/bluefullhand.png', import.meta.url).href,
    sandalfullhand: new URL('../assets/sandalfullhand.png', import.meta.url).href
}

export default function HatAndTshirts() {
    let [isOver, setOver] = useState(false);
    let [isOver1, setOver1] = useState(false);
    let [isOver2, setOver2] = useState(false);
    let [isOver3, setOver3] = useState(false);
    let [img, setimg1] = useState(hatImages.darkbluecap)
    let [img2, setimg2] = useState(hatImages.sandalcap)
    let [img3, setimg3] = useState(hatImages.blackbalmoral)
    let [img4, setimg4] = useState(hatImages.blackfullhand)
    return (
        <div className="grid-layout-1">
            <div className='item1'>
                <p>HEADWEAR</p>
                <div>
                    <p>SS26 Collection <br />
                        -<br />
                        For Spring–Summer 2026, Balmoral presents a range of headwear designed for warm weather movement and everyday wear, lightweight, breathable, and precise in construction. Each piece is shaped by performance needs and daily use, with a considered approach to form and function.</p>
                    <a href="https://www.balmoralrunning.com/collections/headwear" className='hover-underline-link'>SHOP HEADWEAR</a>
                </div>
            </div>
            <div className='item2' onMouseEnter={() => setOver(true)} onMouseLeave={() => setOver(false)}>
                <img src={img} alt="" width={"100%"} />
                {<div className={`item2-des ${isOver ? 'visible' : ''}`}>
                    <p>Somerville 4-Panel Hat<br />
                        $65.00 USD</p>
                    <div className='colors'>
                        <span onClick={() => setimg1(hatImages.darkbluecap)} style={{ backgroundColor: "#1E1E4C" }}></span>
                        <span onClick={() => setimg1(hatImages.darkgraycap)}
                            style={{ backgroundColor: "#575757" }}></span>
                    </div>
                </div>}
            </div>
            <div className='item3' onMouseEnter={() => setOver1(true)} onMouseLeave={() => setOver1(false)}><img src={img2} alt="" width={"100%"} />
                <div className={`item3-des ${isOver1 ? 'visible' : ''}`}>
                    <p>Aberdeen 6-Panel Hat<br />
                        $65.00 USD</p>
                    <div className='colors'>
                        <span onClick={() => setimg2(hatImages.sandalcap)} style={{ backgroundColor: "#EAE1C3" }}></span>
                        <span onClick={() => setimg2(hatImages.redcap)} style={{ backgroundColor: "#C11111" }}></span>
                        <span onClick={() => setimg2(hatImages.greencap)} style={{ backgroundColor: "#123005" }}></span>
                        <span onClick={() => setimg2(hatImages.darkblue)} style={{ backgroundColor: "#1E1E4C" }}></span>
                    </div>
                </div>
            </div>
            <div className='item4' onMouseEnter={() => setOver2(true)} onMouseLeave={() => setOver2(false)}><img src={img3} alt="" width={"100%"} />
                <div className={`item4-des ${isOver2 ? 'visible' : ''}`}>
                    <p>Oakwood Tank Top<br />
                        $120.00 USD</p>
                    <div className='colors'>
                        <span onClick={() => setimg3(hatImages.blackbalmoral)} style={{ backgroundColor: "#000000" }}></span>
                        <span onClick={() => setimg3(hatImages.bluetop)} style={{ backgroundColor: "#1E1E4C" }}></span>
                        <span onClick={() => setimg3(hatImages.sandaltop)} style={{ backgroundColor: "#E0D8C8" }}></span>
                    </div>
                </div></div>
            <div className='item5' onMouseEnter={() => setOver3(true)} onMouseLeave={() => setOver3(false)}><img src={img4} alt="" width={"100%"} />
                <div className={`item5-des ${isOver3 ? 'visible' : ''}`}>
                    <p>Oakwood Longsleeve<br />
$140.00 USD</p>
                    <div className='colors'>
                        <span onClick={() => setimg4(hatImages.blackfullhand)} style={{ backgroundColor: "#000000" }}></span>
                        <span onClick={() => setimg4(hatImages.bluefullhand)} style={{ backgroundColor: "#1E1E4C" }}></span>
                        <span onClick={() => setimg4(hatImages.sandalfullhand)} style={{ backgroundColor: "#E0D8C8" }}></span>
                    </div>
                </div></div>
            <div className='item6'>
                <p>THE OAKWOOD <br />COLLECTION</p>
                <div>
                    <p>
                        The Oakwood collection brings together a selection of styles designed for race day performance. Lightweight, focused, and built to move, each piece is refined for speed and clarity when it matters most.</p>
                    <a href="https://www.balmoralrunning.com/collections/oakwood" className='hover-underline-link'>DISCOVER</a>
                </div>
            </div>
        </div>
    )
}
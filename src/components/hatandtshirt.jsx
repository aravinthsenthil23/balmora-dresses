import { use, useState } from 'react'
import '../css/grid.css'
export default function HatAndTshirts() {
    let [isOver, setOver] = useState(false);
    let [isOver1, setOver1] = useState(false);
    let [isOver2, setOver2] = useState(false);
    let [isOver3, setOver3] = useState(false);
    let [img, setimg1] = useState("src/assets/darkbluecap.png")
    let [img2, setimg2] = useState("src/assets/sandalcap.png")
    let [img3, setimg3] = useState("src/assets/black-balmoral.png")
    let [img4, setimg4] = useState("src/assets/blackfullhand.png")
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
                        <span onClick={() => setimg1("src/assets/darkbluecap.png")} style={{ backgroundColor: "#1E1E4C" }}></span>
                        <span onClick={() => setimg1("src/assets/darkgraycap.png")}
                            style={{ backgroundColor: "#575757" }}></span>
                    </div>
                </div>}
            </div>
            <div className='item3' onMouseEnter={() => setOver1(true)} onMouseLeave={() => setOver1(false)}><img src={img2} alt="" width={"100%"} />
                <div className={`item3-des ${isOver1 ? 'visible' : ''}`}>
                    <p>Aberdeen 6-Panel Hat<br />
                        $65.00 USD</p>
                    <div className='colors'>
                        <span onClick={() => setimg2("src/assets/sandalcap.png")} style={{ backgroundColor: "#EAE1C3" }}></span>
                        <span onClick={() => setimg2("src/assets/redcap.png")} style={{ backgroundColor: "#C11111" }}></span>
                        <span onClick={() => setimg2("src/assets/greencap.png")} style={{ backgroundColor: "#123005" }}></span>
                        <span onClick={() => setimg2("src/assets/darkblue.png")} style={{ backgroundColor: "#1E1E4C" }}></span>
                    </div>
                </div>
            </div>
            <div className='item4' onMouseEnter={() => setOver2(true)} onMouseLeave={() => setOver2(false)}><img src={img3} alt="" width={"100%"} />
                <div className={`item4-des ${isOver2 ? 'visible' : ''}`}>
                    <p>Oakwood Tank Top<br />
                        $120.00 USD</p>
                    <div className='colors'>
                        <span onClick={() => setimg3("src/assets/black-balmoral.png")} style={{ backgroundColor: "#000000" }}></span>
                        <span onClick={() => setimg3("src/assets/bluetop.png")} style={{ backgroundColor: "#1E1E4C" }}></span>
                        <span onClick={() => setimg3("src/assets/sandaltop.png")} style={{ backgroundColor: "#E0D8C8" }}></span>
                    </div>
                </div></div>
            <div className='item5' onMouseEnter={() => setOver3(true)} onMouseLeave={() => setOver3(false)}><img src={img4} alt="" width={"100%"} />
                <div className={`item5-des ${isOver3 ? 'visible' : ''}`}>
                    <p>Oakwood Longsleeve<br />
$140.00 USD</p>
                    <div className='colors'>
                        <span onClick={() => setimg4("src/assets/blackfullhand.png")} style={{ backgroundColor: "#000000" }}></span>
                        <span onClick={() => setimg4("src/assets/bluefullhand.png")} style={{ backgroundColor: "#1E1E4C" }}></span>
                        <span onClick={() => setimg4("src/assets/sandalfullhand.png")} style={{ backgroundColor: "#E0D8C8" }}></span>
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
import { useState } from 'react'
import '../css/tshirt.css'
export default function Tshirts() {

    const tshirts = [{
        id: 1,
        url: "src/assets/beachtshirt.png",
        name: "Athleisure T-Shirt",
        price: "$75.00 USD",
        span: []
    }, {
        id: 2,
        url: "src/assets/runningblacktshirt.png",
        name: "Gallery T-Shirt",
        price: "$75.00 USD",
        span: []
    },
    {
        id: 3,
        url: "src/assets/lemontshirt.png",
        name: "Harvest T-Shirt",
        price: "$75.00 USD",
        span: []
    },
    {
        id: 4,
        url: "src/assets/bluetshirt.png",
        name: "Radius T-Shirt",
        price: "$75.00 USD",
        span: []
    },
    {
        id: 5,
        url: "src/assets/yellowtshirt.png",
        name: "Oxford Cropped T-Shirt",
        price: "$105.00 USD",
        span: []
    },
    {
        id: 6,
        url: "src/assets/browntshirt.png",
        name: "Plaza Ringer T-Shirt",
        price: "$110.00 USD",
        span: [{ color: "#492E0F", url: "src/assets/browntshirt.png" }, { color: "#63B0E1", url: "src/assets/skybluetshirt.png" }, { color: "#EFE8CD", url: "src/assets/sandalredtshirt.png" }]
    },
    {
        id: 7,
        url: "src/assets/whitetshirt.png",
        name: "Sports Ringer T-Shirt",
        price: "$110.00 USD",
        span: [{ color: "#fff", url: "src/assets/whitetshirt.png" }, { color: "#123005", url: "src/assets/greenwhitetshirt.png" }, { color: "#4C0E20", url: "src/assets/brownwhitetshirt.png" }]
    },
    {
        id: 8,
        url: "src/assets/lightyellowtshirt.png",
        name: "Lansdowne T-Shirt",
        price: "$105.00 USD",
        span: [{ color: "#EFE8CD", url: "src/assets/lightyellowtshirt.png" }, { color: "#ADC9F2", url: "src/assets/purebluetshirt.png" }, { color: "#353535", url: "src/assets/pureblacktshirt.png" }, { color: "#fff", url: "src/assets/purewhitetshirt.png" }]
    }]

    let [isOver, setOver] = useState(null);

    return (
        <section className='tshirts'>
            <div className='title'>
                <p>T-shirts</p>
                <a href="">SHOP</a>
            </div>
            <div className='grid-layout-2'>
                {tshirts.map((tshirt) => {
                    let [tshirt_url, seturl] = useState(tshirt.url)
                    return (
                        <div key={tshirt.id} onMouseEnter={() => setOver(tshirt.name)}>
                            <img src={tshirt_url} alt="" width={"100%"} />
                            {<div className={`item-des ${isOver === tshirt.name ? 'visible' : ''}`}>
                                <p>{tshirt.name}<br />
                                    {tshirt.price}</p>
                                <div className='colors'>
                                    {tshirt.span.map((color) => {
                                        return (
                                            <span key={color.url} style={{ backgroundColor: color.color }} onClick={() => seturl(color.url)}></span>
                                        )
                                    })}
                                </div>
                            </div>}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
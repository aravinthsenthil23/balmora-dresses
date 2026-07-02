import { useState } from 'react'
import '../css/tshirt.css'

const tshirtImages = {
    beachtshirt: new URL('../assets/beachtshirt.png', import.meta.url).href,
    runningblacktshirt: new URL('../assets/runningblacktshirt.png', import.meta.url).href,
    lemontshirt: new URL('../assets/lemontshirt.png', import.meta.url).href,
    bluetshirt: new URL('../assets/bluetshirt.png', import.meta.url).href,
    yellowtshirt: new URL('../assets/yellowtshirt.png', import.meta.url).href,
    browntshirt: new URL('../assets/browntshirt.png', import.meta.url).href,
    skybluetshirt: new URL('../assets/skybluetshirt.png', import.meta.url).href,
    sandalredtshirt: new URL('../assets/sandalredtshirt.png', import.meta.url).href,
    whitetshirt: new URL('../assets/whitetshirt.png', import.meta.url).href,
    greenwhitetshirt: new URL('../assets/greenwhitetshirt.png', import.meta.url).href,
    brownwhitetshirt: new URL('../assets/brownwhitetshirt.png', import.meta.url).href,
    lightyellowtshirt: new URL('../assets/lightyellowtshirt.png', import.meta.url).href,
    purebluetshirt: new URL('../assets/purebluetshirt.png', import.meta.url).href,
    pureblacktshirt: new URL('../assets/pureblacktshirt.png', import.meta.url).href,
    purewhitetshirt: new URL('../assets/purewhitetshirt.png', import.meta.url).href
}

export default function Tshirts() {

    const tshirts = [{
        id: 1,
        url: tshirtImages.beachtshirt,
        name: "Athleisure T-Shirt",
        price: "$75.00 USD",
        span: []
    }, {
        id: 2,
        url: tshirtImages.runningblacktshirt,
        name: "Gallery T-Shirt",
        price: "$75.00 USD",
        span: []
    },
    {
        id: 3,
        url: tshirtImages.lemontshirt,
        name: "Harvest T-Shirt",
        price: "$75.00 USD",
        span: []
    },
    {
        id: 4,
        url: tshirtImages.bluetshirt,
        name: "Radius T-Shirt",
        price: "$75.00 USD",
        span: []
    },
    {
        id: 5,
        url: tshirtImages.yellowtshirt,
        name: "Oxford Cropped T-Shirt",
        price: "$105.00 USD",
        span: []
    },
    {
        id: 6,
        url: tshirtImages.browntshirt,
        name: "Plaza Ringer T-Shirt",
        price: "$110.00 USD",
        span: [{ color: "#492E0F", url: tshirtImages.browntshirt }, { color: "#63B0E1", url: tshirtImages.skybluetshirt }, { color: "#EFE8CD", url: tshirtImages.sandalredtshirt }]
    },
    {
        id: 7,
        url: tshirtImages.whitetshirt,
        name: "Sports Ringer T-Shirt",
        price: "$110.00 USD",
        span: [{ color: "#fff", url: tshirtImages.whitetshirt }, { color: "#123005", url: tshirtImages.greenwhitetshirt }, { color: "#4C0E20", url: tshirtImages.brownwhitetshirt }]
    },
    {
        id: 8,
        url: tshirtImages.lightyellowtshirt,
        name: "Lansdowne T-Shirt",
        price: "$105.00 USD",
        span: [{ color: "#EFE8CD", url: tshirtImages.lightyellowtshirt }, { color: "#ADC9F2", url: tshirtImages.purebluetshirt }, { color: "#353535", url: tshirtImages.pureblacktshirt }, { color: "#fff", url: tshirtImages.purewhitetshirt }]
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
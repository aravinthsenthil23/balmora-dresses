import { useState } from 'react'
import '../css/contactus.css'
import ContactForm from './contactForm';
export default function ContactUs() {

    const links = ["Contact Us", "Shipping & returns", "Press", "Instagram", "Start a return", "Terms & policies", "FAQs"]
    let [isOver, setOver] = useState(null);
    let [credit, setCredit] = useState("CREDITS");

    return (
        <section className='contact-us' id='contact'>
            <p>Copyright © 2026 Aravinth Senthil</p>
            <div>
                <ul>
                    {links.map((link) => {
                        let isHover = isOver !== null && isOver !== link;
                        return (
                            <li onMouseEnter={() => setOver(link)} onMouseLeave={() => setOver(null)} key={link}><a href="" style={{opacity : isHover ? 0.3 : 1,transition : 'all 0.3s ease-out'}}>{link}</a></li>
                        )
                    })}
                    
                </ul>
                <p id='cridits' onMouseEnter={()=>setCredit("ARAVINTH")} onMouseLeave={()=>setCredit("CREDITS")}>{credit}</p>
            </div>
            <ContactForm />
        </section>
    )
}
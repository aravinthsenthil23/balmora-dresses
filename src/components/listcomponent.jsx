import '../css/list.css'
export default function List() {

    const list = [{
        id:1,
        name: "Shipping & returns",
        url: new URL('../assets/boxs.jpg', import.meta.url).href,
        desc: "Review our shipping and returns information"
    },
    {
        id:2,
        name: "Contact",
        url: new URL('../assets/emailus.jpg', import.meta.url).href,
        desc: "Email our team for all inquiries"
    },
    {
        id:3,
        name: "Lookbook",
        url: new URL('../assets/girl.jpg', import.meta.url).href,
        desc: "Explore the Spring–Summer 26 Lookbook"
    },
    {   
        id:4,
        name: "Press",
        url: new URL('../assets/pacesetters.jpg', import.meta.url).href,
        desc: "Discover our selected features and mentions"
    }]
    return (
        <div className="list">
            
            {list.map((box) => {
                function zoom(){
                    document.getElementById(`${box.id}`).style.backgroundSize = "106% 106%"
                }
                function zoomOut(){
                    document.getElementById(`${box.id}`).style.backgroundSize = "100% 100%"
                }
                return (
                    <section key={box.id}  onMouseEnter={zoom}
                    onMouseLeave={zoomOut}>
                        <p>{box.name}</p>
                        <div id={box.id} style={{backgroundImage:`url(${box.url})`,transition:' all ease-out 0.8s'}}></div>
                        <p>{box.desc}</p>
                    </section>
                )
            })}
        </div>
    )
}
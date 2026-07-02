import '../css/list.css'
export default function List() {

    const list = [{
        id:1,
        name: "Shipping & returns",
        url: 'src/assets/boxs.jpg',
        desc: "Review our shipping and returns information"
    },
    {
        id:2,
        name: "Contact",
        url: "src/assets/emailus.jpg",
        desc: "Email our team for all inquiries"
    },
    {
        id:3,
        name: "Lookbook",
        url: "src/assets/girl.jpg",
        desc: "Explore the Spring–Summer 26 Lookbook"
    },
    {   
        id:4,
        name: "Press",
        url: "src/assets/pacesetters.jpg",
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
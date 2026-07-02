import '../css/about.css'
import { useEffect,useRef } from 'react';
import tailoringVideo from '../videos/tailoringVideo.mp4';
export default function About(){
    const videoRef = useRef(null);
    
        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        videoRef.current.play().catch(error => {
                            console.log("Autoplay prevented:", error);
                        });
                    } else {
                        videoRef.current.pause();
                    }
                },
                { threshold: 0.5 } // Plays when 50% of the video is visible
            );
    
            if (videoRef.current) {
                observer.observe(videoRef.current);
            }
    
            return () => {
                if (videoRef.current) {
                    observer.unobserve(videoRef.current);
                }
            };
        }, []);
    return (
        <div className="about" id="about">
            <div>
                <p>About Us</p>
                <p>Balmoral was founded in Canada to create timeless garments shaped by the country’s distinct climate and way of life.</p>
            </div>
            <video ref={videoRef} src={tailoringVideo} muted
        playsInline loop></video>
        </div>
    )
}
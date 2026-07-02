import '../css/video.css'
import { useEffect,useRef } from 'react';
export default function VideoComponent() {
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
        <video ref={videoRef} src="src\videos\runningVideo.mp4"  muted
        playsInline
        className='running'>

        </video>
    )
}
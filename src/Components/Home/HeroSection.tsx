import { useRef } from 'react';

const HeroSection = () => {
    // It's good practice to provide a specific type for the ref
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        // <section className="relative h-screen lg:h-[100vh] sm:h-[10vh] flex items-center justify-center text-center text-white bg-gray-500">
            
        //     <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
            
        //     <video
        //         ref={videoRef}
        //         src="assets/video/Blissful_World_Plan_Launch_Hero section_video_Compressed.mp4"
        //         className="absolute inset-0 w-full h-full object-cover"
        //         autoPlay
        //         loop
        //         muted
        //         playsInline 
        //     />

            


        //     <div className="bwp_video_player_container"> 
                
        //     </div>
        // </section>
        <section className='bwp_video_player_main_container'>
            <div className="bwp_video_player_container">
                <video
                    ref={videoRef}
                    src="assets/video/Blissful_World_Plan_Launch_Hero section_video_Compressed.mp4"
                    className="  object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>
        </section>
    )
}

export default HeroSection;
import React, { useEffect, useRef } from "react";
import trailer from "../assets/videos/TheParadise.mp4";
import { NavLink } from "react-router-dom";

const Welcome = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 👀 When video is visible -> play
            videoElement.play();
          } else {
            // 👋 When video goes out of view -> pause
            videoElement.pause();
          }
        });
      },
      { threshold: 0.5 } // 0.5 = at least 50% of video visible
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) observer.unobserve(videoElement);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video ref={videoRef} src={trailer} className="absolute top-10 left-0 w-full h-full object-cover"  autoPlay loop playsInline/>
      <div className="relative z-10 p-10 flex flex-col items-center justify-center h-full text-white text-center bg-black/40">
        <h1 className="text-4xl font-bold mb-4">Welcome to Flixplore</h1>
        <p className="text-lg mb-6">Watch the best shows and movies now</p>
        <NavLink to="/search" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold">
          Watch Now
        </NavLink>
      </div>
    </div>
  );
};

export default Welcome;

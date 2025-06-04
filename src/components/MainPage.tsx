import React, { useEffect, useRef, useState } from "react";
import { FloatingHearts } from "./FloatingHearts";
import { GlowingHeart } from "./GlowingHeart";
import { ContentList } from "./ContentList";
import { MusicPlayer } from "./MusicPlayer";

export function MainPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          audioRef.current.volume = 0.3; // Set volume to 30%
          audioRef.current.loop = true; // Loop the audio
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Autoplay prevented:", error);
          setShowPlayButton(true);
        }
      }
    };

    const timer = setTimeout(playAudio, 500);

    return () => clearTimeout(timer);
  }, []);

  const handlePlayMusic = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setShowPlayButton(false);
      } catch (error) {
        console.error("Failed to play audio:", error);
      }
    }
  };

  const handlePauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden relative">
      <FloatingHearts />
      <MusicPlayer />
      <audio
        ref={audioRef}
        preload="auto"
        onEnded={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        {/* Add your music file URLs here */}
        <source src="/path/to/your/romantic-song.mp3" type="audio/mpeg" />
        <source src="/path/to/your/romantic-song.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      {/* Music Control Button - appears if autoplay fails */}
      {showPlayButton && (
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={handlePlayMusic}
            className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 animate-pulse"
            title="Play Background Music"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      )}

      {/* Music Control Button - always visible for user control */}
      <div className="fixed bottom-4 right-4 z-50">
        {isPlaying ? (
          <button
            onClick={handlePauseMusic}
            className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
            title="Pause Background Music"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          </button>
        ) : (
          <button
            onClick={handlePlayMusic}
            className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
            title="Play Background Music"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        )}
      </div>

      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <h1 className="text-2xl md:text-2xl font-dancing-script text-primary-dark mb-6 flex items-center justify-center gap-4 font-bold">
            Chinna Chinna Aasai
            <GlowingHeart />
          </h1>
          <p className="text-lg text-primary-dark font-dancing-script opacity-90">
            Sprinkles of joy and hope
          </p>
        </header>

        <ContentList />

        <footer className="text-center py-12 text-primary-dark">
          <p className="font-dancing-script text-2xl">
            Made with 💖
          </p>
        </footer>
      </div>
    </div>
  );
}

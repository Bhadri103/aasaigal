import { useEffect, useRef } from 'react';
import song from './audio.mp3';

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Try immediate autoplay first
    const attemptImmediatePlay = async () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.3;
        audioRef.current.loop = true;
        
        try {
          await audioRef.current.play();
          console.log('Immediate autoplay successful');
          return true; // Success, no need for interaction listener
        } catch (error) {
          console.log('Immediate autoplay failed, setting up interaction listener');
          return false; // Failed, need interaction listener
        }
      }
      return false;
    };

    // Set up interaction listener
    const setupInteractionListener = () => {
      const handleInteraction = async () => {
        if (audioRef.current) {
          try {
            await audioRef.current.play();
            console.log('Music started after interaction');
            // Remove all listeners after successful play
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('keydown', handleInteraction);
            document.removeEventListener('touchstart', handleInteraction);
          } catch (error) {
            console.log('Failed to play after interaction:', error);
          }
        }
      };

      // Listen for multiple types of interactions
      document.addEventListener('click', handleInteraction);
      document.addEventListener('keydown', handleInteraction);
      document.addEventListener('touchstart', handleInteraction);

      return () => {
        document.removeEventListener('click', handleInteraction);
        document.removeEventListener('keydown', handleInteraction);
        document.removeEventListener('touchstart', handleInteraction);
      };
    };

    // Try immediate play, and if it fails, set up interaction listener
    attemptImmediatePlay().then(success => {
      if (!success) {
        const cleanup = setupInteractionListener();
        // Return cleanup function
        return cleanup;
      }
    });

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []); // Empty dependency array so this only runs once

  return (
    <audio
      ref={audioRef}
      loop
      src={song}
      className="hidden"
      preload="auto"
    />
  );
}
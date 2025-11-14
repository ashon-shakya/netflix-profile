import React, { useEffect, useRef } from "react";

const VideoModal = ({ video, onClose, autoplay = false }) => {
  if (!video) return null;

  const { title = "Video", videoUrl, poster, description } = video;
  const videoRef = useRef(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    // Mute then attempt to autoplay to satisfy browser autoplay policies
    if (autoplay) {
      vid.muted = true;
      const playPromise = vid.play();
      if (playPromise && typeof playPromise.then === "function") {
        playPromise.catch(() => {
          // Autoplay failed (browser policy) — keep muted but don't throw
        });
      }
    }

    return () => {
      // Pause on unmount for safety
      try {
        vid.pause();
        vid.currentTime = 0;
      } catch (e) {
        /* ignore */
      }
    };
  }, [autoplay]);

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-[#181818] text-white rounded-lg w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-2xl font-bold hover:text-red-500"
          >
            &times;
          </button>
        </div>

        <div className="space-y-4">
          {/* Video Player */}
          <div className="w-full rounded-lg overflow-hidden bg-black">
            <video
              ref={videoRef}
              src={videoUrl}
              poster={poster}
              controls
              autoPlay={autoplay}
              className="w-full h-auto max-h-[56vh] bg-black"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Optional description */}
          {description && (
            <p className="text-gray-300 leading-relaxed">{description}</p>
          )}

          {/* Optional links or actions */}
          {video.liveUrl && (
            <div className="flex space-x-3">
              <a
                href={video.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition"
              >
                Open Source
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;

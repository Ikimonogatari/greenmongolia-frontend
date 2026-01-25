"use client";

interface LocalVideoBgProps {
  videoURL: string;
}

const LocalVideoBg: React.FC<LocalVideoBgProps> = ({ videoURL }) => {
  return (
    <div className="video-bg-wrapper">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-bg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src={videoURL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LocalVideoBg;

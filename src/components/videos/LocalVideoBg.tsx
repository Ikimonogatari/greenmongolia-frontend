"use client";

interface LocalVideoBgProps {
  videoURL: string;
}

const LocalVideoBg: React.FC<LocalVideoBgProps> = ({ videoURL }) => {
  return (
    <div 
      className="video-bg-wrapper"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-bg"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          minWidth: "100%",
          minHeight: "100%",
          width: "auto",
          height: "auto",
          objectFit: "cover",
          zIndex: 1,
        }}
      >
        <source src={videoURL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.3)",
          zIndex: 2,
        }}
      />
    </div>
  );
};

export default LocalVideoBg;

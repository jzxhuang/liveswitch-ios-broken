import { useEffect, useRef } from "react";

const WorkingExample = () => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ audio: true, video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [videoRef]);

  return (
    <div className="App">
      <h1>Works in iOS Safari. Uses native browser getUserMedia API</h1>
      <video ref={videoRef} autoPlay muted playsInline />
    </div>
  );
};

export default WorkingExample;

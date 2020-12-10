import { useEffect, useRef } from "react";

const BrokenExample = () => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      // eslint-disable-next-line no-undef
      const localMedia = new fm.liveswitch.LocalMedia(true, true);
      localMedia
        .start()
        .then(() => {
          // Is this the right way to access the MediaStream?
          videoRef.current.srcObject = localMedia._internal._videoMediaStream;
        })
        .fail((err) => console.log(err));
    }
  }, [videoRef]);

  return (
    <div className="App">
      <h1>
        Does not work in iOS Safari. Video freezes after 1 sec. Uses LiveSwitch
        SDK
      </h1>
      <video ref={videoRef} autoPlay muted playsInline />
    </div>
  );
};

export default BrokenExample;

import { useEffect, useRef } from "react";

const WorkingLiveSwitch = () => {
  const myRef = useRef(null);

  useEffect(() => {
    if (myRef.current) {
      // eslint-disable-next-line no-undef
      const layoutManager = new fm.liveswitch.DomLayoutManager(myRef.current);
      // eslint-disable-next-line no-undef
      const localMedia = new fm.liveswitch.LocalMedia(true, true);

      localMedia.start().then(() => {
        layoutManager.setLocalView(localMedia.getView());
      });
    }
  }, [myRef]);

  return (
    <div className="App">
      <h1>
        Works in iOS Safari. Uses LiveSwitch with LayoutManager (not desired, in
        some cases we want to use the native MediaStream)
      </h1>
      <div style={{ height: 400, width: 400 }} ref={myRef} />
    </div>
  );
};

export default WorkingLiveSwitch;

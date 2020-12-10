# LiveSwitch iOS Safari Bug

When using LiveSwitch SDK to capture local camera, the stream freezes after ~1 second on iOS Safari.

## Reproduction

For ease of reproduction, I deployed an isolated case at https://spatial-liveswitch-ios.surge.sh. You can see the "non working" and "working" examples on an iPhone running Safari (I locally tested with iPhone 12, iOS 14.2.1).

## Explanation

In [this section of LiveSwitch docs](https://help.frozenmountain.com/docs/liveswitch-cloud/clients/javascript#DisplayingaLocalPreview), it says:

"Now that you know how to capture data from a user's camera and microphone, you want to be able to show the user a preview of the video that they are sending out. The easiest way to do this is to let LiveSwitch handle it."

However, if we'd like to handle this ourselves rather than with LiveSwitch, there's no clear example/explanation of how to do so.

We thought that you simply get the `MediaStream` and use it as the `srcObject` for a `video` element, but this appears to break on iOS Safari. Are we doing something wrong? What's the best way to handle the video ourselves without using LiveSwitch provided `LayoutManager`?

Our app is built w/ React and we'd prefer to handle the streams and elements ourselves in some places.

## Create React App stuff

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

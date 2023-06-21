"use client";

import React, { useRef, useEffect } from "react";
import Webcam from "react-webcam";
import { Canvas } from "@react-three/fiber";
import { Hands } from "@mediapipe/hands";

type WebcamRef = React.RefObject<Webcam & HTMLVideoElement>;

export default function DonggiIndex() {
  const webcamRef: WebcamRef = useRef(null);

  useEffect(() => {
    if (webcamRef.current) {
      const videoElement = webcamRef.current.video;

      if (videoElement) {
        const hands = new Hands({
          locateFile: (file) => {
            return `https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.3/${file}`;
          },
        });

        hands.setOptions({
          maxNumHands: 2,
          minDetectionConfidence: 0.5,
          minTrackingConfidence: 0.5,
        });

        hands.onResults((results) => {
          // Log the results to the console
          console.log(results);
        });

        // Start the hand detection
        hands.send({ image: videoElement });

        // Make sure to stop the hand detection when the component unmounts
        return () => {
          hands.close();
        };
      }
    }
  }, []);
  return (
    <main style={{ height: "100vh", width: "100%" }} className="bg-black">
      <Webcam ref={webcamRef} />

      <Canvas>{/* Your Three.js scene here */}</Canvas>
    </main>
  );
}

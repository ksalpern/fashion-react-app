import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Scroll, Preload, ScrollControls } from "@react-three/drei";

import Typography from "./components/Typography/Typography";
import Lens from "./components/Lens/Lens";
import Images from "./components/Images/Images";

export default function App() {
  return (
    <div className="app">
      <Canvas camera={{ position: [0, 0, 20], fov: 15 }}>
        <ScrollControls damping={0.2} pages={3} distance={0.5}>
          <Lens>
            <Scroll>
              <Typography />
              <Images />
            </Scroll>
            {/** This is a helper that pre-emptively makes threejs aware of all geometries, textures etc
               By default threejs will only process objects if they are "seen" by the camera leading 
               to jank as you scroll down. With <Preload> that's solved.  */}
            <Preload />
          </Lens>
        </ScrollControls>
      </Canvas>
    </div>
  );
}

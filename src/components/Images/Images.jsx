import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll, Image } from "@react-three/drei";

function Images() {
  const group = useRef();
  const data = useScroll();
  const { width, height } = useThree((state) => state.viewport);
  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[3].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[4].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[5].material.grayscale =
      1 - data.range(1.6 / 3, 1 / 3);
    group.current.children[6].material.zoom =
      1 + (1 - data.range(2 / 3, 1 / 3)) / 3;
  });
  return (
    <group ref={group}>
      <Image position={[-2, 0, 0]} scale={[4, height, 1]} url="assets/9.jpeg" />
      <Image position={[2, 0, 3]} scale={3} url="assets/4.jpeg" />
      <Image
        position={[-2.05, -height, 6]}
        scale={[1, 3, 1]}
        url="assets/3.jpeg"
      />
      <Image position={[-0.6, -height, 9]} scale={[1, 2, 1]} url="assets/16.jpeg" />
      <Image position={[0.75, -height, 10.5]} scale={1.5} url="assets/5.jpeg" />
      <Image
        position={[0, -height * 1.5, 7.5]}
        scale={[1.5, 3, 1]}
        url="assets/1.jpeg"
      />
      <Image
        position={[0, -height * 2 - height / 4, 0]}
        scale={[width, height / 1.1, 1]}
        url="assets/13.jpeg"
      />
    </group>
  );
}

export default Images;

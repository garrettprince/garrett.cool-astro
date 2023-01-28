import React, { useRef } from "react";
import { useDrag } from "@use-gesture/react";
import { useFrame } from "@react-three/fiber";
import { Canvas, useThree } from "@react-three/fiber";

function DraggableCube() {
  const cubeRef = useRef();

  const bind = useDrag(({ offset: [x, y] }) => {
    const { camera } = useThree();
    const { x: camX, y: camY, z: camZ } = camera.position;

    cubeRef.current.position.x = x / 100 + camX;
    cubeRef.current.position.y = -y / 100 + camY;
  });

  useFrame(() => {
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={cubeRef} {...bind()}>
      <boxGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

export default function Cube() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <DraggableCube />
    </Canvas>
  );
}

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, AmbientLight, DirectionalLight } from "@react-three/drei";

function Sphere() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#00bfff" />
      </mesh>
    </Float>
  );
}

export default function FloatingSphere() {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls enableZoom={false} />
        <Sphere />
      </Canvas>
    </div>
  );
}

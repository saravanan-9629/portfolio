import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// 3D Geometric Artifact Core
const ArtifactCore = ({ isDragging, setIsDragging }: { isDragging: boolean; setIsDragging: (v: boolean) => void }) => {
  const meshRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((_state, delta) => {
    if (meshRef.current && !isDragging) {
      meshRef.current.rotation.y += delta * 0.25;
      meshRef.current.rotation.x += delta * 0.1;
    }
    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.4;
    if (ring2Ref.current) ring2Ref.current.rotation.x -= delta * 0.5;
    if (ring3Ref.current) ring3Ref.current.rotation.y += delta * 0.3;
  });

  return (
    <group 
      ref={meshRef}
      onPointerDown={() => setIsDragging(true)}
      onPointerUp={() => setIsDragging(false)}
      onPointerOut={() => setIsDragging(false)}
    >
      {/* Outer Metallic Ring 1 */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.4, 0.04, 32, 100]} />
        <meshStandardMaterial 
          color="#00f3ff" 
          metalness={0.9} 
          roughness={0.1} 
          emissive="#00f3ff"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Outer Metallic Ring 2 */}
      <mesh ref={ring2Ref} rotation={[0, Math.PI / 3, 0]}>
        <torusGeometry args={[2.9, 0.03, 32, 100]} />
        <meshStandardMaterial 
          color="#8a2be2" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#8a2be2"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Outer Metallic Ring 3 (Emerald Accent) */}
      <mesh ref={ring3Ref} rotation={[Math.PI / 6, Math.PI / 6, 0]}>
        <torusGeometry args={[3.3, 0.02, 32, 100]} />
        <meshStandardMaterial 
          color="#00ff9d" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#00ff9d"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Main Glass Icosahedron Artifact */}
      <mesh scale={1.3}>
        <icosahedronGeometry args={[1.3, 0]} />
        <MeshDistortMaterial
          color="#0d1527"
          roughness={0.15}
          metalness={0.8}
          distort={0.25}
          speed={2}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Inner Glowing Crystal Core */}
      <mesh scale={0.7}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#00f3ff" wireframe />
      </mesh>

      {/* Center Emissive Light Sphere */}
      <pointLight color="#00f3ff" intensity={4} distance={6} />
      <pointLight color="#8a2be2" intensity={3} distance={6} position={[0, -1, 0]} />
    </group>
  );
};

// Floating Cosmic Particle Field
const ParticleNebula = ({ count = 600 }: { count?: number }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorCyan = new THREE.Color('#00f3ff');
    const colorPurple = new THREE.Color('#8a2be2');
    const colorEmerald = new THREE.Color('#00ff9d');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 22;

      const mixVal = Math.random();
      let chosenColor = colorCyan;
      if (mixVal > 0.6) chosenColor = colorPurple;
      else if (mixVal > 0.3) chosenColor = colorEmerald;

      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((_state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export const Hero3DCanvas: React.FC = () => {
  const [isDragging, setIsDragging] = React.useState(false);

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing" data-3d-canvas="true">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#8a2be2" />

        <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
          <ArtifactCore isDragging={isDragging} setIsDragging={setIsDragging} />
        </Float>

        <ParticleNebula count={700} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.8}
          dampingFactor={0.05}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(3 * Math.PI) / 4}
        />
      </Canvas>
    </div>
  );
};

import { MeshDistortMaterial } from '@react-three/drei';

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    './models/text-3d/text3d-transformed.glb'
  );
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.Text.geometry}
        material={materials['Material.001']}
        rotation={[1.57, 0, 0]}
        scale={2.42}
        position={[0, 0, 0]}
        outline={true}
      >
        <MeshDistortMaterial
          attach="material"
          factor={5} // Strength, 0 disables the effect (default=1)
          speed={0.22} // Speed (default=1)
          color="white"
          wireframe={true}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('./models/text-3d/text3d-transformed.glb');

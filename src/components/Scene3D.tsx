// @ts-nocheck
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'

function Box() {
  return (
    <group>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </group>
  )
}

export default function Scene3D() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <Box />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  )
}
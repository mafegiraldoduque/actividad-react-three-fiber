
import { OrbitControls, Stars, Center } from '@react-three/drei'
import { useState } from 'react'

// Componente de esfera interactiva
function Sphere({ position, color }) {
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  return (
    <mesh
      position={position}
      scale={clicked ? 1.3 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setClicked(!clicked)}
    >
      <sphereGeometry args={[0.65, 32, 32]} />
      <meshStandardMaterial
        color={hovered ? 'hotpink' : color}
      />
    </mesh>
  )
}

export default function Scene() {
  return (
    <>
      <OrbitControls makeDefault />
      <Stars />

      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      <Center>
        {/* Tres esferas en diferentes posiciones */}
        <Sphere position={[-2, 0, 0]} color="orange" />
        <Sphere position={[0, 0, 0]} color="royalblue" />
        <Sphere position={[2, 0, 0]} color="limegreen" />
      </Center>
    </>
  )
}

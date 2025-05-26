

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function CreditCard2(props) {
  const { nodes, materials } = useGLTF('./models/creditCard2.glb')
  return (
    <group {...props} dispose={null} position={[1, -25 , 4]} scale={6} rotation={[-1.2 , -1 , -0.5]}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.004}>
        <mesh geometry={nodes.Cartao_Mat_0.geometry} material={materials.material} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/creditCard2.glb')



import React from 'react'
import { useGLTF } from '@react-three/drei'

export function CreditCard(props) {
  const { nodes, materials } = useGLTF('./models/creditCard.glb')
  return (
    <group {...props} dispose={null} position={[1, 14.5 , 2]} scale={15} rotation={[-1.2 , -1.2 , 1.3]}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.202}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_4.geometry} material={materials['Material.002']} position={[0, 0.962, 0]} scale={0.004} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/creditCard.glb')

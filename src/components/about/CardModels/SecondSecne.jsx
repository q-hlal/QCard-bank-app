import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useMedia } from 'react-use'

export function SecondSecen(props) {
  const group = React.useRef()
  const isMobile = useMedia('(max-width: 640px)')
  const { nodes, materials, animations } = useGLTF('./models/secondSecen.glb')
  const { actions } = useAnimations(animations, group)
  const groupPosition = isMobile ? [31, 30, -1] : [31.5, 31, 4]

  return (
    <group ref={group} {...props} dispose={null} position={groupPosition} rotation={[ -0.4 , 0 , 0.4]} scale={2}>
      <group name="Scene">
        <directionalLight intensity={5}/>
        <mesh name="card_1" geometry={nodes.card_1.geometry} material={materials['card_172422.001']} position={[-25.854, 2.053, -1.275]} rotation={[0, -0.69, 0]} />
        <mesh name="card_2" geometry={nodes.card_2.geometry} material={materials.card_172422} position={[-25.899, 2.053, -2.9]} rotation={[0, -0.681, 0]} />
        <mesh name="card_3" geometry={nodes.card_3.geometry} material={materials['card_172422.002']} position={[-27.131, 2.053, -2.348]} rotation={[0, -0.669, 0]} />
        <mesh name="card_4" geometry={nodes.card_4.geometry} material={materials['card_172422.003']} position={[-24.587, 2.053, -1.8]} rotation={[0, -0.683, 0]} />
        <mesh name="card_5" geometry={nodes.card_5.geometry} material={materials['card_172422.004']} position={[-24.325, 2.053, -3]} rotation={[0, -0.695, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/secondSecen.glb')

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useMedia } from 'react-use'

export function ThirdSecen(props) {
  const group = React.useRef()
  const isMobile = useMedia('(max-width: 640px)')
  const { nodes, materials } = useGLTF('./models/thirdSecen.glb')

  const groupScale = isMobile ? 7 : 10
  const groupPostion1 = isMobile ? [50, 0, 80]: [120, 0, 80]
  const groupPostion2 = isMobile ? [50, 0, -50] : [120, 0, -50]
  const groupPostion3 = isMobile ? [-120, 0, -30] : [-170.693, 0, -30]
  const groupPostion4 = isMobile ?[-120, 0, 90] : [-170.693, 0, 90]

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={groupScale}
      rotation={[1.5, -0.7, 1.5]}
      position={[0, 3, 2]}
    >
      <group scale={0.01}>
        <mesh
          geometry={nodes.Visa_Material002_0.geometry}
          material={materials['Material.002']}
          position={groupPostion1}
          rotation={[-Math.PI / 2, 0, 0.5]}
          scale={[50.295, 29.979, 29.979]}
        />
        <mesh
          geometry={nodes.American_Express_Material001_0.geometry}
          material={materials['Material.001']}
          position={groupPostion2}
          rotation={[-Math.PI / 2, 0, 0.5]}
          scale={[50.295, 29.979, 29.979]}
        />
        <mesh
          geometry={nodes.Ing_Material003_0.geometry}
          material={materials['Material.003']}
          position={groupPostion3}
          rotation={[-Math.PI / 2, 0, 0.5]}
          scale={[50.295, 29.979, 29.979]}
        />
        <mesh
          geometry={nodes.Payback_Visa_Material004_0.geometry}
          material={materials['Material.004']}
          position={groupPostion4}
          rotation={[-Math.PI / 2, 0, 0.5]}
          scale={[50.295, 29.979, 29.979]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./models/thirdSecen.glb')

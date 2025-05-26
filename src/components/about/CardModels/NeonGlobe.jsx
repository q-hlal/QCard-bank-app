

import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { animate } from 'framer-motion'

export function Globe(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('./models/globe.glb')
  const { actions } = useAnimations(animations, group)
 const animation = Object.values(actions)[0];

  if (animate && animation) {
    animation.play();
  }

  return (
    <group ref={group} {...props} dispose={null} scale={60} position={[0 , -15 , 12]}>
      <ambientLight intensity={3}/>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="GeoGlobefbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Globe001" position={[0, 28, 0]} rotation={[-Math.PI / 2, 0, 0.013]} scale={2.563}>
                  <mesh name="Globe001_BLUE_0" geometry={nodes.Globe001_BLUE_0.geometry} material={materials.BLUE} />
                  <mesh name="Globe001_BLUE_0_1" geometry={nodes.Globe001_BLUE_0_1.geometry} material={materials.BLUE} />
                  <mesh name="Globe001_BLUE_0_2" geometry={nodes.Globe001_BLUE_0_2.geometry} material={materials.BLUE} />
                  <mesh name="Globe001_BLUE_0_3" geometry={nodes.Globe001_BLUE_0_3.geometry} material={materials.BLUE} />
                  <mesh name="Globe001_BLUE_0_4" geometry={nodes.Globe001_BLUE_0_4.geometry} material={materials.BLUE} />
                  <mesh name="Globe001_BLUE_0_5" geometry={nodes.Globe001_BLUE_0_5.geometry} material={materials.BLUE} />
                  <mesh name="Globe001_BLUE_0_6" geometry={nodes.Globe001_BLUE_0_6.geometry} material={materials.BLUE} />
                  <mesh name="Globe001_BLUE_0_7" geometry={nodes.Globe001_BLUE_0_7.geometry} material={materials.BLUE} />
                  <mesh name="Globe001_BLUE_0_8" geometry={nodes.Globe001_BLUE_0_8.geometry} material={materials.BLUE} />
                  <mesh name="Globe001_BLUE_0_9" geometry={nodes.Globe001_BLUE_0_9.geometry} material={materials.BLUE} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/globe.glb')


import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useMedia } from "react-use";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./models/firstSecen.glb");
  const { actions } = useAnimations(animations, group);
  const scrollY = useSelector((state) => state.scroll.scrollY); 
  const isMobile = useMedia('(max-width: 640px)')

  const groupScale = isMobile ? 0.38 : 0.4
  const grouppostion = isMobile ? [-1 , 12 , 1.3] : [-1 , 13 , 1.5]
  

  useEffect(() => {
    const firstAction = Object.values(actions)[0];
    if (firstAction) {
      firstAction.play();
      firstAction.paused = true;
    }
  }, [actions]);
  
  useFrame(() => {
    const firstAction = Object.values(actions)[0];
    if (firstAction) {
      const duration = firstAction.getClip().duration;
      firstAction.time = scrollY * duration;
    }
  });
  
  return (
    <group ref={group} {...props} dispose={null} rotation={[0 , -0.5 , 0]} position={grouppostion} scale={groupScale}>
      <group name="Scene">
        <group name="Sketchfab_model" position={[-53.892, 5.867, 36.445]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={0.211}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="123_5" position={[-0.106, 0.837, -4.543]} rotation={[0, 0, -Math.PI / 2]} scale={[3.394, 1, 5.471]}>
                <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials['material.001']} />
              </group>
              <group name="card_4" position={[-0.106, 0.837, -4.543]} rotation={[0, 0, -Math.PI / 2]} scale={[3.394, 1, 5.471]}>
                <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials['border_card.001']} />
                <mesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials['black_back.001']} />
                <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials['back.001']} />
                <mesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials['card_face_1.001']} />
              </group>
              <group name="id_2" position={[0.033, 0.851, -4.527]} rotation={[0, 0, -Math.PI / 2]} scale={[3.399, 1.304, 5.474]}>
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials['border.001']} />
                <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials['inside.001']} />
              </group>
              <group name="numberstxt_3" position={[-0.028, 0.851, -4.527]} rotation={[0, 0, -Math.PI / 2]} scale={[3.399, 0.594, 5.474]}>
                <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials['numbers.001']} />
              </group>
            </group>
          </group>
        </group>
        <mesh name="outer_box" geometry={nodes.outer_box.geometry} material={materials['outer_box.001']} position={[-52.971, 5.726, 36.352]} rotation={[0, 0, -Math.PI / 2]} scale={[0.215, 1.512, 0.994]} />
        <mesh name="inner_box" geometry={nodes.inner_box.geometry} material={materials['inner_box.001']} position={[-52.971, 5.726, 36.352]} rotation={[0, 0, -Math.PI / 2]} scale={[0.215, 1.512, 0.994]} />
        <mesh name="ground001" geometry={nodes.ground001.geometry} material={materials['shadow-img.001']} position={[-26.493, 3.723, 0.283]} scale={[49.693, 1.804, 57.095]} />
        <mesh name="cover_box001" geometry={nodes.cover_box001.geometry} material={materials['cover_box.002']} position={[-49.65, 5.762, 38.193]} rotation={[0, -0.478, -Math.PI / 2]} scale={0.766} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/firstSecen.glb')

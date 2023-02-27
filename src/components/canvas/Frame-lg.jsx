import { useLoader, useThree } from '@react-three/fiber';
import { Suspense, useEffect, useMemo, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from "three";
import { useGLTF } from '@react-three/drei';
import { clone as SkeletonUtilsClone} from '../../config/SkeletonUtils';

const FrameLg = ({ scale = 1, position = [0, 0, 0], showPop, setShowPop, img = "/bird.jpg", img2 = "/logo512.png" }) => {
    const gltf = useLoader(GLTFLoader, '/models/frame-lg.glb');
    // const { nodes, materials } = useGLTF("/models/frame-lg.glb");
    const scene = useThree(state => state.scene);
    const frameObj = useRef();
    const paint = useLoader(THREE.TextureLoader, img);
    const paint2 = useLoader(THREE.TextureLoader, img2);
    
    const cloned = useMemo(() => SkeletonUtilsClone(gltf.scene), [scene]);


    const showImgPop = () => {
        console.log(frameObj);
        setShowPop(showPop + 1);
        console.log(showPop)
        // frameObj.current.children[0].children[0].children[0].visible = false;
    }


    return (
        <>
     
       
            
            <primitive ref={frameObj} onClick={() => showImgPop()} onPointerOver={() => window.document.body.style.cursor="pointer"} onPointerOut={ () => window.document.body.style.cursor="default"} scale={scale} position={position} object={gltf.scene} />
            <mesh position={[position[0] -0.1, position[1] + 1.5, position[2]]} rotation={[0,4.7,0]} scale={[1.9,2.2,1.9]}>
                <planeGeometry attach={"geometry"}  />
                <meshBasicMaterial attach="material" map={paint} />
            </mesh>
         
         
            <primitive object={cloned} onClick={() => showImgPop()} onPointerOver={() => window.document.body.style.cursor="pointer"} onPointerOut={ () => window.document.body.style.cursor="default"} scale={scale} position={[position[0], position[1], position[2]+3]}/>
            <mesh position={[position[0] -0.1, position[1] + 1.5, position[2] + 3]} rotation={[0,4.7,0]} scale={[1.9,2.2,1.9]}>
                <planeGeometry attach={"geometry"}  />
                <meshBasicMaterial attach="material" map={paint2} />
            </mesh>
         
        
        </>
    )
}

export default FrameLg;
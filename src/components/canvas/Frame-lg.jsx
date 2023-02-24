import { useLoader } from '@react-three/fiber';
import { Suspense, useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from "three";

const FrameLg = ({scale=1, position=[0,0,0], showPop, setShowPop, img="/rockwon.png" }) => {
    const gltf = useLoader(GLTFLoader, '/models/frame-lg.glb');
    const frameObj = useRef();
    const paint = useLoader(THREE.TextureLoader, img)

    const showImgPop = () => {
        console.log(frameObj);
        setShowPop(showPop + 1);
        // frameObj.current.children[0].children[0].children[0].visible = false;
    }
    

    return (
        <Suspense  >
            <primitive ref={frameObj} onClick={() => showImgPop()} onMouseOver={document.body.style.cursor="pointer"} onMouseOut={document.body.style.cursor="default"} scale={scale} position={position} object={gltf.scene} />
            <mesh position={[position[0] -0.1, position[1] + 1.5, position[2]]} rotation={[0,4.7,0]} scale={[1.9,2.2,1.9]} >
                <planeGeometry attach={"geometry"}  />
                <meshBasicMaterial attach="material" map={paint} />
            </mesh>
        </Suspense>
    )
}

export default FrameLg;
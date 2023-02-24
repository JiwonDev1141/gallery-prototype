import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import FrameLg from '../components/canvas/Frame-lg';
import Gallery from '../components/canvas/Gallery';
import ImgPop from '../components/dom/imgPop';


const World = () => {

    const [showImgPop, setShowImgPop] = useState(0);

    return <div>
        <ImgPop showPop={showImgPop} setShowPop={setShowImgPop} />
        <Canvas
            camera={{ position: [0, 10, 50], rotateZ: 50 }}
            style={{ width: "100%", height: "90vh" }}
        >
            <ambientLight intensity={1} />
            <OrbitControls target={[0, 0, 40]} />
            <Suspense>
                <FrameLg scale={1.5} position={[9,4,70]} showPop={showImgPop} setShowPop={setShowImgPop}  />
                <Gallery />
            </Suspense>
        </Canvas>
    </div>
}

export default World;
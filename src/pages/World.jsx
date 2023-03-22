import { Physics } from "@react-three/cannon";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import CameraCollider from "../components/canvas/CameraCollider";
import FrameLg from "../components/canvas/Frame-lg";
import Gallery from "../components/canvas/Gallery";
import WorldCollider from "../components/canvas/WorldCollider";
import ImgPop from "../components/dom/imgPop";

const World = () => {
  const [showImgPop, setShowImgPop] = useState(false);
  const perspectiveCamera = useRef();
  const orbitControl = useRef();

  return (
    <div>
      <ImgPop showPop={showImgPop} setShowPop={setShowImgPop} />
      <Canvas
        camera={{ position: [0, 10, 50], rotateZ: 50 }}
        style={{ width: "100%", height: "90vh" }}
      >
        <Physics gravity={[0, -10, 0]}>
          {/* <ambientLight intensity={1} /> */}
          <directionalLight
            intensity={2}
            color={"white"}
            postion={[0, 10, 0]}
          />
          <OrbitControls />
          {/* <pointLight /> */}

          {/* <CameraCollider /> */}

          {/* <WorldCollider position={[0,-100,50]} args={[3000,1,3000]} isGround={true} rotation={[0,1.4,0]} /> */}
          {/* <PerspectiveCamera ref={perspectiveCamera} position={[0, 10, 50]} makeDefault={true} /> */}

          <Suspense>
            <FrameLg
              orbitControl={orbitControl}
              cameraRef={perspectiveCamera}
              scale={2}
              position={[9, 3.5, 70]}
              rotation={[0, 0, 0]}
              showPop={showImgPop}
              setShowPop={setShowImgPop}
            />
            {/* <FrameLg scale={1.5} position={[9,4,75]} showPop={showImgPop} setShowPop={setShowImgPop}  /> */}

            <Gallery />
          </Suspense>
        </Physics>
      </Canvas>
    </div>
  );
};

export default World;
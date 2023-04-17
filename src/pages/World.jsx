import { Physics } from "@react-three/cannon";
import { OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import CameraCollider from "../components/canvas/CameraCollider";
import { BoxCollider } from "../components/canvas/Colliders";
import FrameLg from "../components/canvas/Frame-lg";
import Gallery from "../components/canvas/Gallery";
import WorldCollider from "../components/canvas/WorldCollider";
import ImgPop from "../components/dom/imgPop";
import styled from "styled-components";
import { PointLightHelper } from "three";

const Container = styled.div`
  padding-top: 5vh;
`;

const World = () => {
  const [showImgPop, setShowImgPop] = useState(false);
  const perspectiveCamera = useRef();
  const orbitControl = useRef();

  return (
    <Container>
      <ImgPop showPop={showImgPop} setShowPop={setShowImgPop} />
      <Canvas
        camera={{ position: [0, 10, 50], rotateZ: 50 }}
        style={{ width: "100%", height: "95vh" }}
      >
        <Physics gravity={[0, -100, 0]}>
          {/* <ambientLight intensity={1} /> */}
          {/* <directionalLight
            // color="skyblue"
            intensity={0.6}
            postion={[0, 10, 0]}
          /> */}

          {/* <OrbitControls /> */}
          {/* <pointLight /> */}

          <CameraCollider />

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
            <BoxCollider
              position={[-0.5, -1, 0]}
              args={[1000, 1, 1000]}
              visible={true}
              isGround={true}
            />

            <BoxCollider
              position={[1, -1, -30]}
              args={[1000, 1000, 10]}
              isGround={false}
              visible={false}
            />
            <BoxCollider
              position={[1, -1, 20]}
              args={[1000, 1000, 10]}
              isGround={false}
              visible={false}
            />

            <BoxCollider
              position={[-60, -1, 20]}
              args={[10, 1000, 100]}
              isGround={false}
              visible={false}
            />

            <BoxCollider
              position={[70, -1, 20]}
              args={[10, 1000, 100]}
              isGround={false}
              visible={false}
            />
          </Suspense>
        </Physics>
      </Canvas>
    </Container>
  );
};

export default World;

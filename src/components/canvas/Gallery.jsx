import { useHelper } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { PointLightHelper, SpotLightHelper, TextureLoader } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { BoxCollider } from "./Colliders";

const Gallery = () => {
  const gltf = useLoader(
    GLTFLoader,
    "/models/vr_gallery_no_4_building_with_artwork_by_drcg.glb"
  );
  const imgTexture = useLoader(TextureLoader, "/rockwon.png");
  const birdImgTexture = useLoader(TextureLoader, "/bird.jpg");

  const pointLightRef = useRef();
  const spotLightRef = useRef();

  console.log(gltf);

  for (const [key, value] of Object.entries(gltf.materials)) {
    console.log(key);

    value.metalness = 1;
    value.roughness = 0.5;
  }

  useHelper(pointLightRef, PointLightHelper);

  useHelper(spotLightRef, SpotLightHelper);

  gltf.materials.Art_002.map = birdImgTexture;
  gltf.materials.FLOOR.map = birdImgTexture;
  gltf.materials.FLOOR.metalnessMap = imgTexture;

  // gltf.materials.FLOOR.metalness = 1;
  // gltf.materials.FLOOR.roughness = 0.2;

  // gltf.materials.glass.map = birdImgTexture;

  // gltf.materials.glass.metalnessMap = birdImgTexture;

  gltf.materials.glass.roughness = 0.2;
  gltf.materials.glass.metalness = 1;
  gltf.materials.glass.opacity = 0.6;

  // gltf.materials.glass.map = birdImgTexture;
  // gltf.materials.glass.metalnessMap = birdImgTexture;

  // gltf.materials.glass.transmission = 1;
  // gltf.materials.glass.thickness = 0.5;

  return (
    <Suspense>
      <pointLight
        ref={pointLightRef}
        intensity={2}
        color="white"
        position={[0, 10, 0]}
      />
      <ambientLight intensity={4} position={[0, 10, 0]} />

      <spotLight
        ref={spotLightRef}
        intensity={10}
        color="white"
        distance={5}
        position={[-4, 9, -23]}
        angle={0.5}
      />
      <primitive
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        object={gltf.scene}
        scale={3}
      />
      {/* <BoxCollider position={[0, 0, 0]} args={[10, 10, 10]} visible={true} /> */}
    </Suspense>
  );
};

export default Gallery;

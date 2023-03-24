import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { TextureLoader } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { BoxCollider } from "./Colliders";

const Gallery = () => {
  const gltf = useLoader(
    GLTFLoader,
    "/models/vr_gallery_no_4_building_with_artwork_by_drcg.glb"
  );
  const imgTexture = useLoader(TextureLoader, "/rockwon.png");
  const birdImgTexture = useLoader(TextureLoader, "/bird.jpg");
  console.log(gltf);
  gltf.materials.Art_002.map = birdImgTexture;
  gltf.materials.FLOOR.map = birdImgTexture;
  gltf.materials.FLOOR.metalnessMap = birdImgTexture;

  gltf.materials.FLOOR.metalness = 1;
  gltf.materials.FLOOR.roughness = 0.2;

  return (
    <Suspense>
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

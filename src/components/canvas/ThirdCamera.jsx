import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { OrbitControls } from "three-stdlib";
import { Vector3 } from "three";

const ThirdCamera = ({ positionX, positionY, positionZ, rotationZ }) => {
  const { camera, gl } = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    // controls.enableRotate = false;
    controls.minDistance = 5;
    controls.maxDistance = 5;

    camera.position.set(positionX - 2, positionY + 2, positionZ - 2);

    camera.lookAt(positionX + 2 + rotationZ, positionY, positionZ + 3);
    controls.target = new Vector3(
      camera.position.x + 3,
      camera.position.y,
      camera.position.z + 3
    );
    // camera.rotation.set(0, 0, rotationZ)

    return () => {
      controls.dispose();
    };
  }, [positionX, positionY, positionZ, rotationZ]);

  return null;
};

export default ThirdCamera;

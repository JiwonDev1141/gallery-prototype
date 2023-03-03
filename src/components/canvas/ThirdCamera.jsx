
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { OrbitControls } from "three-stdlib";


const ThirdCamera = ({ positionX, positionY, positionZ, rotationZ }) => {
    const { camera, gl } = useThree();
    
    useEffect(() => {
        const controls = new OrbitControls(camera, gl.domElement);
        controls.minDistance = 5;
        controls.maxDistance = 5;

        camera.position.set(positionX - 2, positionY + 6, positionZ - 2)
        camera.rotateZ = rotationZ

        camera.lookAt(positionX + 2, positionY + 5, positionZ + 20);
        camera.zoom = 3;

        return () => {
            controls.dispose();
        }

    }, [positionX, positionZ])

    return null;
}

export default ThirdCamera;
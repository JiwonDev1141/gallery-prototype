
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { OrbitControls } from "three-stdlib";



const ThirdCamera = ({ positionX, positionY, positionZ, rotationZ }) => {
    const { camera, gl } = useThree();

    useEffect(() => {
        const controls = new OrbitControls(camera, gl.domElement);
        controls.enableRotate = false;
        controls.minDistance = 5;
        controls.maxDistance = 5;
        console.log(rotationZ)
      
        camera.position.set(positionX - 2, positionY + 6, positionZ - 2)
        
        camera.lookAt(positionX + 2 + rotationZ, positionY + 5, positionZ + 20);
        // camera.rotation.set(0, 0, rotationZ)
        camera.zoom = 3;
        console.log(rotationZ)
        return () => {
            controls.dispose();
        }

    }, [positionX, positionZ, rotationZ])

    return null;
}

export default ThirdCamera;
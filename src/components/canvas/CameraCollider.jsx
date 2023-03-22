import { Vector3 } from "three";
import usePersonControl from "../../hooks/usePersonControl";
import { useSphere } from '@react-three/cannon';
import { useFrame } from "@react-three/fiber";
import ThirdCamera from "./ThirdCamera";
import { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";


function CameraCollider() {

    const characterRef = useRef();

    const { forward, backward, left, right, jump, leftRotate, rightRotate } = usePersonControl();
    const { nodes, materials, animations} = useGLTF("/models/core_from_portal_2.glb");

    const frontVector = new Vector3(0, 0, 0)
    const sideVector = new Vector3(0, 0, 0)
    const direction = new Vector3(0, 0, 0)
    

    let MOVESPEED = 20;

    const [mesh, api] = useSphere(() => ({
        
        mass: 0,
        type: "Dynamic",
        args: [1, 1, 1],

        onCollideBegin: (e) => {
            console.log(e)
            if (e.body.name === "ground") {
                console.log("바닥과 충돌")
            }
            else if (e.body.name === "stair") {
                console.log("계단과 충돌")
            }
            else {
                console.log("물체와 충돌")
            }
        }


    }))

    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(30);
    const [positionZ, setPositionZ] = useState(40);
    const [rotationZ, setRotationZ] = useState(0);

    useEffect(() => {
        console.log(nodes)
        console.log(materials)
        console.log(animations)
    },[])

    useFrame(() => {
        frontVector.set(0, 0, Number(forward) - Number(backward));
        sideVector.set(Number(right) - Number(left), 0, 0);
        
        direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(MOVESPEED);
        api.velocity.set(direction.x, 0, direction.z);

        
        
        mesh.current.getWorldPosition(characterRef.current.position);
        
        
        setPositionX(characterRef.current.position.x);
        setPositionY(characterRef.current.position.y);
        setPositionZ(characterRef.current.position.z);

        // console.log("leftRotate: ", leftRotate);
        // console.log("rightRotate: ", rightRotate);

        // console.log("leftRotate: ", Number(leftRotate));
        // console.log("rightRotate: ", Number(rightRotate));


        const newRotateZ = (( Number(leftRotate) - Number(rightRotate) ) / Math.PI) + rotationZ
        newRotateZ ? setRotationZ(newRotateZ)  : console.log(rotationZ);
        
        
    })

    return (
        <group ref={characterRef}>
            {/* <mesh ref={mesh} position={[positionX,positionY ,positionZ  ]} >
                <sphereGeometry args={[1,1,1]} />
                <meshStandardMaterial color={"orange"} />
            </mesh> */}
            
            <ThirdCamera
                positionX={positionX}
                positionY={positionY}
                positionZ={positionZ}
                rotationZ={rotationZ}
            />
            
            <primitive scale={0.1} object={nodes.root} rotatex={1.4} />
        </group>
    )

}

export default CameraCollider;
import { useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Gallery = () => {
    const gltf = useLoader(GLTFLoader, '/models/floating_gallery.glb');
    return (
        <Suspense>
            <primitive position={[0,0,0]} object={gltf.scene} />
        </Suspense>
    )
}

export default Gallery;
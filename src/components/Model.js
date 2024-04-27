import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';

const Gltf = (props) => {
    const {scene} = useGLTF("../popcorn.glb")
    return (
      <primitive object={scene} {...props} />
    );
}

const Model = () => {
 return (
    <Canvas dpr={[1,8]} camera={{fov:45}} style={{"position" : "absolute", "width" : "40%", "height" : "500px"}}>
        <color attach="background" args={["#1e293b"]} />
        <PresentationControls speed={2} polar={[-0.1, Math.PI / 4]}>
            <Stage environment={null}>
                <Gltf scale={0.01} />
            </Stage>
        </PresentationControls>
    </Canvas>
 )
};

export default Model;

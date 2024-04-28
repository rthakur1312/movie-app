import { Canvas } from '@react-three/fiber';
import { useGLTF, PresentationControls, Environment } from '@react-three/drei';

// component to load and render a GLTF model
const Gltf = (props) => {
    // Load the GLTF model
    const { scene } = useGLTF("../popcorn_bucket.glb");
    return (
      <primitive object={scene} {...props} />
    );
}

// Main component to render the 3D model
const Model = () => {
    return (
        <Canvas shadows camera={{position:[8,1,8]}}>
            {/* Set up ambient light */}
            <ambientLight />
            {/* Set the background color */}
            {/* <color attach="background" args={["#1e293b"]} /> */}
            {/* PresentationControls for interactive viewing */}
            <PresentationControls speed={1} global polar={[-1, Math.PI / 4]}>
                {/* Render the GLTF model with a scale of 2 */}
                <Gltf scale={2} />
                {/* Add an Environment for better lighting and reflections */}
                <Environment preset='sunset' />
            </PresentationControls>
        </Canvas>
    );
};

export default Model;

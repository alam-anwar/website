import { Canvas } from '@react-three/fiber'

function AnimationTest(props) {
    return (
        <>
            <h1>Animation Test</h1>
            <div id="canvas-container">
                <Canvas>
                    <mesh>
                        <boxGeometry args={[2, 2, 2]} />
                        <meshStandardMaterial />
                    </mesh>
                    <ambientLight intensity={0.1} />
                    <directionalLight color="red" position={[0, 0, 5]} />
                </Canvas>
            </div>
        </>
    );
}

export default AnimationTest
import { Canvas } from '@react-three/fiber'

function AnimationTest(props) {
    return (
        <>
            <h1>Animation Test</h1>
            <div id="canvas-container">
                <Canvas camera={{fov: 40, near: 0.1, far: 1000, position: [5, 5, 5]}}>
                    <mesh>
                        <boxGeometry args={[2, 2, 2]} />
                        <meshPhongMaterial />
                    </mesh>
                    <ambientLight intensity={1} />
                    {/* <directionalLight color="red" position={[5, 5, 5]} /> */}
                </Canvas>
            </div>
        </>
    );
}

export default AnimationTest
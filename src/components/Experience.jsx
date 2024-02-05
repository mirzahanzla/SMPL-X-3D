import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { useControls } from "leva";
import { Avatar } from "./Avatar";

export const Experience = () => {
  // const { animation } = useControls({
  //   animation: {
  //     value: "Typing",
  //     options: ["Typing", "Falling", "Standing"],
  //   },
  // });
   const { animation, avatarColor } = useControls({
    animation: {
      value: 'Typing',
      options: ['Typing', 'Falling', 'Standing'],
    },
     avatarColor: { 
      value: '#ff0000', 
      label: 'Avatar Color',
      options: ['#ff0000', '#00ff00'], // Two color options
    },
    // avatarColor: { value: '#ada8a8', label: 'Avatar Color' }, // Leva control for color??
  });
  return (
    <>
      <OrbitControls />
      <Sky />
      <Environment preset="sunset" />
      <group position-y={-1}>
        <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <Avatar animation={animation} color={avatarColor}/>
        {animation === "Typing" && (
          <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
            <boxGeometry />
            <meshStandardMaterial color="white" />
          </mesh>
        )}

        <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    </>
  );
};

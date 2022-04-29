import { OrbitControls, Text, Stars } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { useEffect } from 'react';
import { angleToRadians } from './Angle';
import { useRef } from 'react';
import Text3D from './models3D/Text3D';

// IMPORTANT LINKS
// https://npmmirror.com/package/drei/v/1.5.0#meshdistortmaterial

export default function Threejs() {
  // Setting the camera angle *** START
  const orbitControlsRef = useRef(null);
  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      // console.log(y + angleToRadians(90 - 30));

      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(2));
      orbitControlsRef.current.setPolarAngle(
        (y + 0.5) * angleToRadians(270 - 30)
      );

      orbitControlsRef.current.update();
    }
  });

  useEffect(() => {
    if (!!orbitControlsRef.current) {
      // console.log(orbitControlsRef.current);
    }
  }, [orbitControlsRef.current]);
  // Setting the camera angle *** END

  return (
    <>
      {/***************************************************************************/}
      {/* ORBIT CONTROLS */}

      <OrbitControls
        enableZoom={false}
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(90)}
        maxPolarAngle={angleToRadians(90)}
      />

      {/***************************************************************************/}
      {/* 3D MODELS */}

      <Text3D position={[0, 1.5, -5]} />

      {/***************************************************************************/}
      {/* TEXT */}
      <Text
        color="#ffff00" // invert #dd004e
        anchorX="center" // default
        anchorY="middle" // default
        font="fonts/RobotoMono/RobotoMono-Bold.woff" // default
        fontSize={0.25} // default
        fontWeight={700} // default
        lineHeight={1.5} // default
        letterSpacing={0} // default
        position={[0, -1.2, 2]} // default
        rotation={[0, 0, 0]} // default
        height={5}
      >
        Get started now!
      </Text>

      {/***************************************************************************/}
      {/* ENVIRONMENT */}

      <Stars
        radius={50} // Radius of the inner sphere (default=100)
        depth={50} // Depth of area where stars should fit (default=50)
        count={5000} // Amount of stars (default=5000)
        factor={4} // Size factor (default=4)
        saturation={1} // Saturation 0-1 (default=0)
        fade // Faded dots (default=false)
      />

      {/***************************************************************************/}
      {/* LIGHT */}

      {/* Ambient Light */}
      <ambientLight args={['#00fffb', 1]} />

      {/* Directional Light */}
      <directionalLight args={['#00fffb', 1]} position={[0, 0, 1]} />

      {/* Point Light */}
      <pointLight args={['#00fffb', 2]} position={[0, 0, 2]} />
    </>
  );
}

import { PointsProps, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { random } from "maath";
import { PointMaterial, Points } from "@react-three/drei";

export function Stars(props: PointsProps) {
  const ref = useRef<any>(null);
  const ref2 = useRef<any>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 }),
  );
  useFrame((state, delta) => {
    if (!ref.current) {
      return;
    }
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    if (ref2.current.size >= 0.005) {
      ref.current.size = 0.002;
      return;
    }
    ref2.current.size += delta / 10000;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere as Float32Array}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          ref={ref2}
          transparent
          color="#ffa0e0"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

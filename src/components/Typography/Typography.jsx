import { useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";

function Typography() {
  const state = useThree();
  const { width, height } = state.viewport.getCurrentViewport(
    state.cameta,
    [0, 0, 12]
  );
  const fontSize = width * 0.1; // Adjust the factor as per your needs
  const sharedProps = {
    font: "/path/to/Inter-Regular.woff", // Update the font file path
    letterSpacing: -0.1,
    color: "rgb(20, 20, 20)",
  };

  return (
    <>
      <Text
        children="Express Yourself through Fashion"
        anchorX="left"
        position={[-width / 1.5, -height / 2, 9]}
        fontSize={fontSize}
        {...sharedProps}
      />
      <Text
        children="fashion"
        anchorX="right"
        position={[width / 2.5, -height * 1.5, 12]}
        fontSize={fontSize}
        {...sharedProps}
      />
    </>
  );
}

export default Typography;

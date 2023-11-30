import { useAnimate } from "../Hooks";

const ImageComp = ({ animateName }) => {
  const { detectedRef, isObserve } = useAnimate();

  return (
    <img
      ref={detectedRef}
      className={`w-[300px] ${
        isObserve && `animate__animated animate__infinite dura ${animateName}`
      }`}
      src="./images/tired.jpg"
      alt="tired"
    />
  );
};
export default ImageComp;

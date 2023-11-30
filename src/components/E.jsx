import { useAnimate } from "../Hooks";

const E = () => {
  const { detectedRef, isObserve } = useAnimate();
  return (
    <div
      ref={detectedRef}
      className="min-h-screen flex justify-center items-center  "
    >
      일어나
      <img
        className={`w-[300px] ${
          isObserve &&
          "animate__animated animate__shakeX animate__infinite dura"
        }`}
        src="./images/tired.jpg"
        alt="tired"
      />
      코딩해야지
    </div>
  );
};
export default E;

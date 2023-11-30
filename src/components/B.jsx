import { useAnimate } from "../Hooks";

const B = () => {
  const { detectedRef, isObserve } = useAnimate();
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#cacaca99] ">
      일어나
      <img
        ref={detectedRef}
        className={`w-[300px] ${
          isObserve &&
          "animate__animated animate__wobble animate__infinite dura2"
        }`}
        src="./images/tired.jpg"
        alt="tired"
      />
      코딩해야지
    </div>
  );
};
export default B;

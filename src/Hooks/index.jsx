import { useRef, useState, useEffect } from "react";

export const useAnimate = () => {
  const [isObserve, setIsObserve] = useState(false);

  const detectedRef = useRef();
  //   감지할녀석
  const observer = useRef();
  // 쓸녀석
  useEffect(
    () => {
      observer.current = new IntersectionObserver(
        (entries) => {
          setIsObserve(entries[0].isIntersecting);
          // console.log(entries);
        },
        { threshold: 0.5 }
      );
      observer.current.observe(detectedRef.current);

      // 엔트리스 확인 observer.current.observe(bRef.current)
      return () => observer.current.unobserve(detectedRef.current);
    },
    // 엔트리스 확인 observe()
    []
  );

  return { detectedRef, isObserve };
  //   우리가 만드는건 useState처럼 배열로 되는것이 아닌 객체로 만듬
};

// 반복되는 요소를 커스텀 훅스로 만듬 ex:)form태그 onChange

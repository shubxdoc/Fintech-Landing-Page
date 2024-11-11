import { useEffect, useRef, useState } from "react";

const ScreenText = ({ screen, setCurrImg, i }) => {
  const [showAnimation, setShowAnimation] = useState(false);

  const scrollRef = useRef(null);

  const toggleAnimation = (e) => {
    if (e[0].isIntersecting) {
      setShowAnimation(true);
      setCurrImg(i);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => {
      if (!showAnimation) {
        if (scrollRef.current) {
          observer.unobserve(scrollRef.current);
        }
      }
    };
  }, []);

  return (
    <div
      className={`screen-text ${showAnimation ? "text-visible" : ""}`}
      ref={scrollRef}
    >
      <h1 className="screen-heading">{screen.heading}</h1>
      <div className="mobile-mockup-wrapper only-mobile">
        <div className="mobile-mockup">
          <div className="mobile-mockup-screen flex absolute-center">
            <img src={screen.mobile_img} className="mobile-screen-img" />
          </div>
        </div>
      </div>
      <div className="screen-desc">{screen.desc}</div>
    </div>
  );
};

export default ScreenText;

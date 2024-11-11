import { useState } from "react";
import "./mobileScroll.css";
import ScreenText from "./ScreenText";

const scrollData = [
  {
    heading: "we've got your back.",
    desc: "gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.",
    mobile_img: "https://i.ibb.co/hm0hQB1/fold1-1-1.png",
  },
  {
    heading: "begin your winning streak.",
    desc: "use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashback on CRED. good luck",
    mobile_img:
      "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold2.png",
  },
  {
    heading: "for your eclectic taste.",
    desc: "get access to the CRED Store, a member exclusive selection fo products and experience at special prices that complement your taste. this is the good life they speak of.",
    mobile_img:
      "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold3.png",
  },
  {
    heading: "more cash in your pockets.",
    desc: "switch to CRED RentPay and start paying rent with your credit card. this way you get up o 45 days of credit free period, more rewards points and a happy landlord.",
    mobile_img: "https://i.ibb.co/s1T2HJD/fold4.png",
  },
];

const MobileScroll = () => {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="container flex mobile-scroll non-mobile">
      <div className="scroll-full-screen-wrapper">
        {scrollData.map((screen, i) => (
          <div className="scroll-full-screen">
            <ScreenText key={i} screen={screen} i={i} setCurrImg={setCurrImg} />
          </div>
        ))}
      </div>
      <div className="mobile-mockup-wrapper">
        <div className="mobile-mockup">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={scrollData[currImg].mobile_img}
              className="mobile-screen-img slide-in-right"
              key={scrollData[currImg].mobile_img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScroll;

import React, {useState, useEffect} from "react";
import photo1 from "../assets/Photo1.png";
import photo2 from "../assets/Photo2.png";
import photo3 from "../assets/Photo3.png";
import photo4 from "../assets/Photo4.png";
import photo5 from "../assets/Photo5.png";
import photo6 from "../assets/Photo6.png";
import happyBirthday from "../assets/HappyBirthday.png";

const Main = () => {
  const [count, setCount] = useState(1);

  const changeState = () => {
    if (count == 6) {
      setCount(1);
    } else {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(changeState, 3000);
    return () => clearTimeout(timer);
  }, [count]);
  return (
    <div className="mainDiv">
      <img src={happyBirthday} className="logo" alt="" />
      <img
        src={
          count == 1
            ? photo1
            : count == 2
            ? photo2
            : count == 3
            ? photo3
            : count == 4
            ? photo4
            : count == 5
            ? photo5
            : count == 6
            ? photo6
            : null
        }
        onClick={changeState}
        className="photo"
        alt=""
      />
      <p className="greet">🎉🎂 Happy Birthday, Omi! 🎂🎉</p>
      <div className="messageDiv">
        <p className="message">
          On this special day, I want to take a moment to celebrate you, my dear
          friend. As the sun rises on another year of your life, it brings with
          it countless reasons to rejoice and cherish the wonderful person you
          are.
        </p>

        <p className="message">
          Omi, you possess a unique blend of kindness, strength, and warmth that
          brightens the lives of everyone around you. Your infectious laughter
          fills the room with joy, and your unwavering support has been a source
          of strength for me through both the good times and the challenging
          ones.
        </p>

        <p className="message">
          As we mark another year of your journey around the sun, I am filled
          with gratitude for the memories we've shared and the adventures we've
          embarked upon together. From the spontaneous late-night conversations
          to the unforgettable road trips, each moment spent in your company is
          etched into the fabric of my fondest memories.
        </p>

        <p className="message">
          Your presence in my life is truly a gift, Omi. Your compassion knows
          no bounds, and your ability to see the beauty in every situation
          inspires me to approach life with optimism and gratitude. You have a
          way of making even the simplest moments feel extraordinary, and for
          that, I am endlessly thankful.
        </p>

        <p className="message">
          As you blow out the candles on your birthday cake, may your heart be
          filled with the same warmth and love that you bring into the lives of
          others. May this year be filled with laughter, love, and countless
          blessings, and may every dream you dare to dream find its way to
          fruition.
        </p>

        <p className="message">
          Happy Birthday, Omi! Here's to another year of laughter, love, and
          unforgettable memories. Cheers to you, my dear friend, and to the
          beautiful soul that you are.
        </p>
      </div>
      <img src={happyBirthday} className="logo" alt="" />
      <div className="footer">Made with ❤️ By ~Mihir</div>
    </div>
  );
};

export default Main;

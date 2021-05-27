import React, { useState } from "react";
import { useSpring, a } from "react-spring";
import styles from "./styles.module.css";

import { CardWraper, FrontCard, BackCard } from "../../../assets";
const Card = ({ cardinfo }) => {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <CardWraper onClick={() => setFlipped((state) => !state)}>
      <a.div
        className={`${styles.c} ${styles.front}`}
        style={{
          opacity,
          transform,
          rotateX: "180deg",
        }}
      >
        <FrontCard>Trasera</FrontCard>
      </a.div>
      <a.div
        className={`${styles.c} ${styles.back}`}
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
      >
        <FrontCard>
          <p>{cardinfo.nombre}</p>
        </FrontCard>
      </a.div>
    </CardWraper>
  );
};

export default Card;

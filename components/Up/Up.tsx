import React, { useEffect } from 'react';
import s from './Up.module.css';
import { useScrollY } from '../../hooks/useScrollY';
import { motion, useAnimation } from 'framer-motion';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

export const Up = (): JSX.Element => {
  const controls = useAnimation();

  const posY = useScrollY();

  useEffect(() => {
    console.log(posY, document.body.scrollHeight);
    controls.start({ opacity: posY / document.body.scrollHeight });
  }, [posY, controls]);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      className={s.up}
    >
      <ButtonIcon
        onClick={scrollToTop}
        appearance="primary"
        icon="up"
      />
    </motion.div>
  );
};
import { useRef } from 'react';
import clsx from 'clsx';
import css from './RippleButton.module.css';

const RippleButton = ({ children, once, className, isActive, ...props }) => {
  const buttonRef = useRef(null);

  const handleClick = e => {
    const button = buttonRef.current;
    if (!button) return;

    if (once && button.querySelector(`.${css.ripple}`)) {
      button.querySelector(`.${css.ripple}`).remove();
    }

    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${
      e.pageX - (button.getBoundingClientRect().left + window.scrollX) - radius
    }px`;
    ripple.style.top = `${
      e.pageY - (button.getBoundingClientRect().top + window.scrollY) - radius
    }px`;
    ripple.className = css.ripple;

    button.appendChild(ripple);

    const animationDuration = getAnimationDuration(ripple);
    setTimeout(() => {
      ripple.remove();
    }, animationDuration);
  };

  const getAnimationDuration = ripple => {
    const animationDuration = window.getComputedStyle(ripple).animationDuration;
    return animationDuration.includes('ms')
      ? parseFloat(animationDuration)
      : parseFloat(animationDuration) * 1000;
  };

  return (
    <button
      ref={buttonRef}
      className={clsx(css.rippleButton, className, isActive && css.active)}
      onClick={handleClick}
      data-ripple={once ? 'once' : ''}
      {...props}
    >
      {children}
    </button>
  );
};

export default RippleButton;

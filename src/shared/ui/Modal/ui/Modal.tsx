import {
  FC, MouseEvent, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib';
import { Portal } from 'shared/ui/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

interface Props {
    className?: string,
    isOpen: boolean,
    onClose: () => void,
    children: ReactNode
}

export const Modal: FC<Props> = (props) => {
  const {
    className, isOpen, onClose, children,
  } = props;
  const { theme } = useTheme();
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const ANIMATED__DELAY = 250;

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
  };

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATED__DELAY);
    }
  }, [onClose]);

  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);
  return (
      <Portal>
          <div className={classNames(cls.Modal, mods, [className, cls[theme]])}>
              <div className={cls.overlay} onClick={closeHandler}>
                  <div className={cls.content} onClick={onContentClick}>
                      {children}
                      {' '}
                  </div>
              </div>
          </div>
      </Portal>
  );
};

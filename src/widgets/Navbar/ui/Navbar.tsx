import React, { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button';
import cls from './Navbar.module.scss';

interface Props {
    className?: string
}

export const Navbar: FC<Props> = (props) => {
  const { t } = useTranslation();
  const { className } = props;
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
      <div className={classNames(cls.Navbar, {}, [className])}>

          <Button
            theme={ButtonTheme.CLEAR_INVERTED}
            className={cls.links}
            onClick={onToggleModal}
          >
              {t('Войти')}
          </Button>
          {/* eslint-disable-next-line i18next/no-literal-string */}
          <Modal isOpen={isAuthModal} onClose={onToggleModal}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem explicabo fuga in officia,
              perspiciatis quaerat reprehenderit tempore ut velit! Distinctio fugit iusto nam non quia repellendus
              tempore ullam? Architecto cum dolor harum hic magni minus mollitia omnis tempore, vel.
          </Modal>
      </div>
  );
};

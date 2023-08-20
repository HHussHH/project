import { FC } from 'react';
import { classNames } from 'shared/lib';
import { Spinner } from 'shared/ui/Spinner';
import cls from './PageLoader.module.scss';

interface Props {
    className?: string
}

export const PageLoader: FC<Props> = (props) => {
  const { className } = props;

  return (
      <div className={classNames(cls.PageLoader, {}, [className])}>
          <Spinner />
      </div>
  );
};

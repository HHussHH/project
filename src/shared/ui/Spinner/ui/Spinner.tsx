import { FC } from 'react';
import { classNames } from 'shared/lib';
import './Spinner.scss';

interface Props {
    className?: string
}

export const Spinner: FC<Props> = (props) => {
  const { className } = props;

  return (
      <div className={classNames('lds-facebook', {}, [className])}>
          <div />
          <div />
          <div />
      </div>
  );
};

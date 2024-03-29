import { TICK } from './constants';
import {
  Component,
  createSignal,
  JSX,
  onCleanup,
  createEffect,
} from 'solid-js';
import type { Context } from './types';

export type Props = {
  dismiss: () => void;
  duration: number;
  children: (context: Context) => JSX.Element;
};

const ToastWrapper: Component<Props> = (props) => {
  const [remainingDuration, setRemainingDuration] = createSignal(
    props.duration,
  );
  const tick = () => setRemainingDuration(remainingDuration() - TICK);
  const [timerRunning, setTimerRunning] = createSignal(true);

  createEffect(() => {
    if (remainingDuration() <= 0) {
      props.dismiss();
    }
  });

  const percentage = () => {
    const computed = Math.round((remainingDuration() * 100) / props.duration);

    return computed >= 0 ? computed : 0;
  };

  const interval = setInterval(() => {
    if (timerRunning()) {
      tick();
    }
  }, TICK);

  onCleanup(() => {
    clearInterval(interval);
  });

  return (
    <div
      onMouseOver={() => setTimerRunning(false)}
      onMouseOut={() => setTimerRunning(true)}
    >
      {props.children({ percentage })}
    </div>
  );
};

export default ToastWrapper;

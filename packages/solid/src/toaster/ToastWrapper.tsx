import { DEFAULT_DURATION, TICK } from './constants';
import {
  Component,
  createSignal,
  JSX,
  onCleanup,
  createEffect,
} from 'solid-js';
import type { Context } from './types';

export type Props = {
  dismiss: () => any;
  duration?: number;
  children: (context: Context) => JSX.Element;
};

const ToastWrapper: Component<Props> = (props) => {
  const [remainingDuration, setRemainingDuration] = createSignal(
    props.duration || DEFAULT_DURATION,
  );
  const tick = () => setRemainingDuration(remainingDuration() - TICK);
  const [timerRunning, setTimerRunning] = createSignal(true);

  createEffect(() => {
    if (remainingDuration() <= 0) {
      props.dismiss();
    }
  });

  const percentage = () => {
    const computed = Math.round(
      (remainingDuration() * 100) / (props.duration || DEFAULT_DURATION),
    );

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
      onMouseEnter={() => setTimerRunning(false)}
      onmouseleave={() => setTimerRunning(true)}
    >
      {props.children({ percentage })}
    </div>
  );
};

export default ToastWrapper;

import { TICK, PERCENTAGE } from './constants';
import { getContext, setContext } from 'svelte';
import { tweened } from 'svelte/motion';
import { linear } from 'svelte/easing';

export function initPercentage() {
  const percentage = tweened(100, {
    duration: TICK,
    easing: linear,
  });

  setContext(PERCENTAGE, percentage);

  return percentage;
}

export function getPercentage() {
  return getContext(PERCENTAGE);
}

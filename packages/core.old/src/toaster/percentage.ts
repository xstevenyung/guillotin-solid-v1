import { TICK } from './constants';
import { tweened } from 'svelte/motion';
import { linear } from 'svelte/easing';

export function initPercentage() {
  return tweened(100, {
    duration: TICK,
    easing: linear,
  });
}

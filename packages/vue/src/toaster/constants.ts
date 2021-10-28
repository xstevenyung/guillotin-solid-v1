import { Config, Position } from './types';

export const DEFAULT_ANIMATION_DURATION = 200;
export let TICK = 100;

export const DEFAULT_CONFIG: Config = {
  duration: 3000,
  max: null,
};

export const BAGS = Symbol();

export const availablePositions: Position[] = [
  { x: 'right', y: 'bottom' },
  { x: 'left', y: 'bottom' },
  { x: 'center', y: 'bottom' },
  { x: 'right', y: 'top' },
  { x: 'left', y: 'top' },
  { x: 'center', y: 'top' },
];

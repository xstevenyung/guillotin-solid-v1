import { Position } from './types';

export function resolveKey({ x, y }: Position) {
  return [x, y].join('-');
}

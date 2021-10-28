import { inject } from 'vue';
import { Position } from '../types';
import { BAGS } from './constants';
import { resolveKey } from './utils';

export function useToaster(position: Position) {
  const bags = inject(BAGS);
  return bags[resolveKey(position)];
}

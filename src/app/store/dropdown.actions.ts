import { createAction, props } from '@ngrx/store';

export const setOptions = createAction(
  '[Dropdown] Set Options',
  props<{ options: string[] }>()
);
export const filterOptions = createAction(
  '[Dropdown] Filter Options',
  props<{ filterText: string }>()
);

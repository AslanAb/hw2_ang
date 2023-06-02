import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

export const COUNT_KEY = 'count';

export const increase = createAction('[COUNT] increase');
export const decrease = createAction('[COUNT] decrease');

export interface CountState {
  count: number;
}

export const initialState: CountState = {
  count: 0,
};

export const countReducer = createReducer(
  initialState,
  on(increase, (state) => ({
    ...state,
    count: state.count + 1,
  })),
  on(decrease, (state) => ({
    ...state,
    count: state.count - 1,
  }))
);

export const featureSelector = createFeatureSelector<CountState>(COUNT_KEY);
export const countSelector = createSelector(
  featureSelector,
  (state) => state.count
);

import { Action, AnyAction, Reducer } from 'redux';

export default function reduceReducers<S, A extends Action = AnyAction>(
  initialState: S | null,
  ...reducers: Reducer<S, A>[]
): Reducer<S, A>;
export default function reduceReducers<S, A extends Action = AnyAction>(
  ...reducers: Reducer<S, A>[]
): Reducer<S, A>;

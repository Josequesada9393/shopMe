import { AnyAction } from "redux";

export type ActionWithPayload<T, P> = {
  type: T;
  payload?: P
}

export type Action<T> = {
  type: T
}

//function overloading, depending on whether we get an action with a payload or not

// multiple type def for create action
export function createAction<T extends string, P>(type: T, payload: P):ActionWithPayload<T,P>

export function createAction<T extends string>(type:T, payload:void):Action<T>

export function createAction<T extends string, P>(type: T, payload: P) {
  return {type, payload}
}
// export const createAction = (type, payload) => ({ type, payload });

import * as types from './actionTypes'

export function createEvent(event) {
  return { type: types.CREATE_EVENT, event};
}

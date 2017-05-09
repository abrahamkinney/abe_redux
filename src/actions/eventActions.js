import * as types from './actionTypes';
import eventApi from '../api/mockEventApi';

export function loadEventsSuccess(events) {
  return { type: types.LOAD_EVENTS_SUCCESS, events};
}

export function loadEvents() {
  return function(dispatch) {
    return eventApi.getAllEvents().then(events => {
      dispatch(loadEventsSuccess(events));
    }).catch(error => {
      throw(error);
    });
  };
}

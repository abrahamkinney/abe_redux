import * as types from './actionTypes';
import eventApi from '../api/mockEventApi';

export function loadEventsSuccess(events) {
  return { type: types.LOAD_EVENTS_SUCCESS, events};
}

export function createEventSuccess(event) {
  return { type: types.CREATE_EVENT_SUCCESS, event};
}

export function updateEventSuccess(event) {
  return { type: types.UPDATE_EVENT_SUCCESS, event};
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

export function saveEvent(event) {
  console.log("actions")
  return function (dispatch, getState) {
    return eventApi.saveEvent(event).then(savedEvent => {
      event.id ? dispatch(updateEventSuccess(savedEvent)) :
        dispatch(createEventSuccess(savedEvent));
    }).catch(error => {
      throw(error);
    });
  };
}

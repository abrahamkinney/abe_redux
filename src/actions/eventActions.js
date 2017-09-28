import * as types from './actionTypes';
// import eventApi from '../api/mockEventApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import fireBaseApi from '../api/fireBaseApi';

export function loadEvents(events) {
  // return { type: types.GET_EVENT_REQUESTED, events};
  console.log("inside loadEvents");
  return dispatch => {
    // dispatch(getEventRequestedAction());
    return fireBaseApi.ref('/').once('value', snap => {
      const events = snap.val();
      dispatch(getEventFulfilledAction(events));
    })
    .catch((error) => {
      console.log(error);
      dispatch(getEventRejectedAction());
    });
  };
}

// function getEventRequestedAction() {
//   console.log("inside getEventRequestedAction");
//   return {
//     type: types.GET_EVENT_REQUESTED
//   };
// }

function getEventRejectedAction() {
  console.log("inside getEventRejectedAction");
  return {
    type: types.GET_EVENT_REJECTED
  };
}

function getEventFulfilledAction(events) {
  console.log("inside getEventFulfilledAction");
  return {
    type: types.GET_EVENT_FULFILLED,
    events
  };
}

export function createEventSuccess(events) {
  return { type: types.CREATE_EVENT_SUCCESS, events};
}

export function updateEventSuccess(events) {
  return { type: types.UPDATE_EVENT_SUCCESS, events};
}

// export function loadEvents() {
//   return function(dispatch) {
//     dispatch(beginAjaxCall());
//     return FIRE.getAllEvents().then(events => {
//       dispatch(loadEventsSuccess(events));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }

//
// export function saveEvent(event) {
//   return function (dispatch, getState) {
//     dispatch(beginAjaxCall());
//     return eventApi.saveEvent(event).then(savedEvent => {
//       event.id ? dispatch(updateEventSuccess(savedEvent)) :
//         dispatch(createEventSuccess(savedEvent));
//     }).catch(error => {
//       dispatch(ajaxCallError(error));
//       throw(error);
//     });
//   };
// }

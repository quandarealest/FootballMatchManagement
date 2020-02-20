import { ADD_NEW_FIELD, ADD_NEW_FIELD_SUCCESS, ADD_NEW_FIELD_FAILED } from '../constants/index';

export function addNewField(newStadium){
  return {
    type: ADD_NEW_FIELD,
    payload: {
      newStadium
    }
  }
};

export function addNewFieldSuccess(){
  return {
    type: ADD_NEW_FIELD_SUCCESS
  }
}

export function addNewFieldFailed(error){
  return {
    type: ADD_NEW_FIELD_FAILED,
    error
  }
}

export const actions = {
  addNewField,
  addNewFieldSuccess,
  addNewFieldFailed,
}
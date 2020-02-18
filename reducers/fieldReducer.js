import { ADD_NEW_FIELD, ADD_NEW_FIELD_SUCCESS, ADD_NEW_FIELD_FAILED } from '../constants/index';

const initialState = {
  fieldData: [
    {
        id: 1,
        image: 'https://cdn10.bigcommerce.com/s-3grxgs5/products/116/images/573/CHE_940_Stamford_bridge_13_W__28857.1454808339.1280.1280.jpg?c=2',
        name: 'Stamford Bridge',
        capacity: '41.631',
        address: 'Fulham Rd, Fulham, London SW6 1HS, UK'
    },
    {
        id: 2,
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/15/c0/21/29/manchester-united-museum.jpg',
        name: 'Old Trafford',
        capacity: '76.000',
        address: 'Sir Matt Busby Way, Stretford, Manchester M16 0RA, UK'
    },
    {
        id: 3,
        image: 'https://cdn1.everyevery.ng/wp-content/uploads/2019/03/25114246/tottenham-stadium.jpg',
        name: 'White Hart Lane',
        capacity: '36.284',
        address: '748 High Rd, Tottenham, London N17 0AP, UK'
    }
  ],
  isAddingField: false,
  isAddedField: false,
  isAddingFieldError: '',
}

const fieldReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NEW_FIELD: {
      const { payload } = action;
      const { newStadium } = payload;
      const newFieldData = state.fieldData;
      newFieldData.push(newStadium);
      return {
        ...state,
        fieldData: newFieldData,
        isAddingField: true,
        isAddedField: false,
        isAddingFieldError: '',
      }
    }
    case ADD_NEW_FIELD_SUCCESS:
      return {
        ...state,
        isAddingField: false,
        isAddedField: true,
      }
    case ADD_NEW_FIELD_FAILED:
      return {
        isAddingField: false,
        isAddedField: false,
        isAddingFieldError: action.error,
      }
    default:
      return state;
  }
}
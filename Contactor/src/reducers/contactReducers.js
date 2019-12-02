
import * as constants from '../constants';
import data from '../resources/data.json';

const lists = (state = data.contacts, action) => {
  switch (action.type) {
    case constants.ADD_CONTACT:
      return [
        ...state,
        {
          id: action.id,
          name: action.payload.name,
          phone: action.payload.phone,
          photo: action.payload.photo,
        },
      ];
    default: return state;
  }
};
export default lists;

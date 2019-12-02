import * as constants from '../constants';

let nextBoardId = 5;
export const addContact = (name, phone, photo) => {
  nextBoardId += 1;
  return {
    type: constants.ADD_CONTACT,
    id: nextBoardId,
    payload: { name, phone, photo },
  };
};

export const removeContact = (selectedContacts) => ({
  type: constants.REMOVE_CONTACT,
  payload: selectedContacts,
});

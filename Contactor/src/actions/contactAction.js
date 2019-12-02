import * as constants from '../constants';

let nextBoardId = 5;
export const addContact = (name, phone, image) => {
  nextBoardId += 1;
  return {
    type: constants.ADD_BOARD,
    id: nextBoardId,
    payload: { name, phone, image },
  };
};

export const removeContact = (selectedContacts) => ({
  type: constants.REMOVE_CONTACT,
  payload: selectedContacts,
});

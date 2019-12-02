import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Contacts from '../views/Contacts';
import ContactPreview from '../views/ContactPreview';

export default createAppContainer(createStackNavigator({
  Contacts,
  ContactPreview,
}));

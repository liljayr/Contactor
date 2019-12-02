import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Contacts from '../views/Contacts';

export default createAppContainer(createStackNavigator({
  Contacts,
}));

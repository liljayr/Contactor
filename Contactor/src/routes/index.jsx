import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Contacts from '../views/Contacts';
import ContactPreviewView from '../views/ContactPreviewView';

export default createAppContainer(createStackNavigator({
  Contacts,
  ContactPreviewView,
}));

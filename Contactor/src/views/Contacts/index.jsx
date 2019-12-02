import React from 'react';
import {
  View,
} from 'react-native';
import ContactList from '../../components/ContactList';
import SearchBar from '../../components/SearchBar';

class Contacts extends React.Component {
  async onSearch() {

  }

  render() {
    return (
      <View>
        <SearchBar
          onSearch={() => this.onSearch()}
        />
        <ContactList />
      </View>
    );
  }
}

export default Contacts;

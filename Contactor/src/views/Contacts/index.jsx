import React from 'react';
import {
  View,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import ContactList from '../../components/ContactList';
// import SearchBar from '../../components/SearchBar';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    // etting default state
    this.state = { search: '' };
  }

  render() {
    const { search } = this.state;
    return (
      <View>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={(text) => this.setState({ search: text })}
          onClear={(text) => this.setState({ search: '' })}
          placeholder="Type Here..."
          value={this.state.search}
        />
        <ContactList
          search={(search)}
        />
      </View>
    );
  }
}

export default Contacts;

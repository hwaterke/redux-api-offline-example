import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NameList} from './NameList';
import {Banner} from './Banner';
import {connect} from 'react-redux';
import {api} from '../api/api';
import {Form} from './Form';

@connect()
export class ListScreen extends React.Component {

  add = (name) => {
    api.addV3(this.props.dispatch, name);
  };

  render() {
    return (
      <View style={styles.container}>
        <Banner />
        <NameList />
        <Form onPress={this.add} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

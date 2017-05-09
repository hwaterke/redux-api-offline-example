import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  console.log(state);
  return {names: state.names}
};

@connect(mapStateToProps)
export class NameList extends React.Component {

  keyExtractor = (item) => item.name;

  renderItem = ({item}) => (
    <View style={styles.row}>
      {
        item.local &&
        <Ionicons
          name="ios-cloud-upload-outline"
          size={26}
          style={{marginRight: 8}}
        />
      }

      <Text>{item.name}</Text>
    </View>
  );

  render() {
    return (
      <FlatList
        data={this.props.names}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
});

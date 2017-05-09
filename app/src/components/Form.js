import React from 'react';
import {TextInput, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {getName} from '../utils';

export class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: null
    }
  }

  press = () => {
    let name = this.state.value;
    if (!name) {
      name = getName();
    }
    this.setState({value: null});
    this.props.onPress(name);
  };

  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          value={this.state.value}
          onChangeText={value => this.setState({value})}
        />

        <TouchableOpacity style={styles.button} onPress={this.press}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(128,203,196,.1)'
  },
  button: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#80CBC4',
  },
  buttonText: {
    color: '#fff'
  }
});

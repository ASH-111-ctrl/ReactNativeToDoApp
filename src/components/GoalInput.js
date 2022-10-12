import {StyleSheet, Text, View, TextInput, Button, Modal} from 'react-native';
import React, {useState} from 'react';

const GoalInput = props => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = e => {
    setEnteredGoalText(e);
  };

  const addGoalHandler = () => {
    props.onPress(enteredGoalText);
    setEnteredGoalText('');
  };
  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          // value={props.value}
          // onChangeText={props.onTextChange}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          style={styles.textInput}
          placeholder={props.placeholder}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.btnView}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
          <View style={styles.btnView}>
            <Button color="#295058" onPress={addGoalHandler} title="Add Goal" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '90%',
    marginRight: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop:16
  },
  btnView: {
    width: '30%',
    marginHorizontal: 8,
  },
  
});

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
} from 'react-native';
import GoalInput from './src/components/GoalInput';
import GoalItem from './src/components/GoalItem';

const App = () => {
  // const [enteredGoalText, setEnteredGoalText] = useState('');
  const [modalIsVisible,setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([]);
  // const goalInputHandler = e => {
  //   setEnteredGoalText(e);
  // };
  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    // setEnteredGoalText('');
    setModalIsVisible(false)
  };
  const deleteGoalHandler = id => {
    setCourseGoals(currentCourseGoal => {
      return currentCourseGoal.filter(goal => goal.id !== id);
    });
  };

  const startAddGoalHandler=()=>{
    setModalIsVisible(true)
  }

  const endAddGoalHandler=()=>{
    setModalIsVisible(false)
  }

  return (
    <View style={styles.container}>
      <View  style={styles.modalStyle} >
      <Button title='Add New goal' color='#295058' onPress={startAddGoalHandler} />
      </View>
      <GoalInput
        visible={modalIsVisible}
        // value={enteredGoalText}
        // onTextChange={goalInputHandler}
        placeholder="Enter Your Goals"
        onCancel={endAddGoalHandler}
        onPress={addGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          keyExtractor={(item, index) => {
            return item.id;
          }}
          data={courseGoals}
          renderItem={itemData => {
            return (
              <GoalItem
                id={itemData.item.id}
                onDelete={deleteGoalHandler}
                text={itemData.item.text}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems:'center'
  },
  goalsContainer: {
    flex: 5,
  },
  modalStyle:{
    marginTop:20,
    width:'70%',
    borderRadius:6
  }
});

export default App;

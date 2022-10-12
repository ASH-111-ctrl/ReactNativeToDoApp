import { ProgressViewIOSComponent, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this,props.id)}>
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#295058',
        color: 'white',
      },
      goalText: {
        color: 'white',
        fontWeight: 'bold',
      },
})
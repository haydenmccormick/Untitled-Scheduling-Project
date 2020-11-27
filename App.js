import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, Button } from 'react-native';
import { Calendar } from 'react-native-calendars'
import { DateInput } from 'react-native-date-input';
import DatePicker from 'react-native-datepicker';
//import * as SQLite from 'expo-sqlite';

//const db = SQLite.openDatabase("db.db");

// Main render method
export default function App() {
    const d = new Date();
    const month = d.getMonth() + 1;
    const string =  d.getFullYear() + '-' + month + '-' + d.getDate();
    const [selected, setSelected] = useState(string);
    const onDayPress = (day) => {
	setSelected(day.dateString);
	alert(day.dateString);
    };
    return (
	    <View style={styles.container}>
	    <View style={styles.calendararea}>
	    <Text style={styles.title}>Basic Calendar</Text>
	    <Calendar
	onDayPress={onDayPress}
	markedDates={{
	    [selected]: {
		selected: true,
		disableTouchEvent: true,
		selectedColor: 'lightblue',
		selectedTextColor: 'black',
	    },
	}}
	/>
	    </View>
	    <View style={styles.inputarea}>
	    <Text style={styles.subtitle}>Add a task</Text>
	    <Form />
	    </View>
	    <StatusBar style="auto" />
	    </View>
    );
}

/*
function Event(props) {
  return (
    <View>
      <Text>{props.nunberOfGuests}</Text>
      <Text>{props.isGoing}</Text>
    </View>
  );
}
*/

// Form for adding events
function Form(props) {
    //const [setTaskname] = useState('');
    //Remember to clear form
    state = {text: null, time: null, date: "00-00-0000"};
    function handleInputChange(name) {
	//dictionary.text = name;
	//alert(dictionary.text);
	state.text = name;
    }
    function submit() {
	alert(state.date);
    }
    onPress = () => {
	setState({
	    date: 'THE NEW TEXT GOES HERE'
	})
    }
    return(
	    <View>
	    <View>
	    <TextInput style={styles.input} name="taskname" type="text" onChangeText={text => handleInputChange(text)} />
	    </View>
	    <View>
	    <DatePicker  placeholder="select date"
	onDateChange={(date) => {state.date = date}}
	    />
	    <Text>{state.date}</Text>
	    </View>
	    <Button onPress={submit} title="Submit" />
	    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  calendararea: {
    flex: 1.5,
    justifyContent: 'flex-end',
    marginBottom: 15,
    width: "80%",
  },
  inputarea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  going: {
    alignItems: 'center',
    marginVertical: 15,
  },
  input: {
    textAlign: 'center',
    padding: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderColor: 'skyblue',
    borderWidth: 2,
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
    paddingBottom: 15,
  },
  subtitle: {
    alignSelf: 'center',
    fontSize: 20,
    marginBottom: 15,
    borderBottomWidth: 1.5,
  },
});

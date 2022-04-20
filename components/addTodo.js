import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

export default function AddTodo({ submitHandler }){
    const [text, setText] = useState('');

    const changeHandler= (val) => {
        setText(val);
    }

    return(
        <View>
            <TextInput
              style={styles.input}
              placeholder='new todo...'
              onChangeText={changeHandler}
            />
           <Button onPress={() => submitHandler(text)} title='add Todo' color='pink' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor:'#ddd'
    }
})

import React from 'react';
import { View } from 'react-native';
import { Input } from '@rneui/themed';
import { color } from 'react-native-reanimated';


const InputComponent = (props) => {

  return (
    <View>

      <Input 
        
        inputContainerStyle={{
          flex: 1,
          flexDirection: 'column',
          minWidth: 327,
          minHeight: 56,
          maxWidth: 327,
          maxHeight: 56,
          borderColor: 'white',
          color: 'white',

        }}
        inputStyle={{
          justifyContent: 'center',
          alignContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
          minWidth: 327,
          minHeight: 56,
          maxWidth: 327,
          maxHeight: 56,
          color: 'white',
        }}
        labelStyle={{
          flex: 1,
          textAlign: 'left',
          color: 'white',

        }}

        
        
        label={props.label}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />














    </View>
  );
};

export default InputComponent;







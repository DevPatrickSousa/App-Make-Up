import React from 'react';
import { View } from 'react-native';
import {Feather as Icon} from '@expo/vector-icons'; 
import { Button } from "@rneui/themed";




const ButtonComponent = (props) => {
    return (
        <View>

        <Button 
            onPress={props.onPress}

            buttonStyle={{
                
                
                backgroundColor: '#E27396',
                borderWidth: 0,
                
                borderRadius: 60,
                width: 327,
                height: 56,
                shadowOffset : { width: 0, height: 4},
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 1,
                blurRadius: 4,
                marginBottom: 40,
                textTransform:'uppercase'
            }}
            
            >{props.left &&(<Icon name="arrow-left" color="white" />)}
            {props.title}
            {props.right &&(<Icon name="arrow-right" color="white" />)}
            
            </Button>
    </View>
    );
  };

  

export default ButtonComponent;
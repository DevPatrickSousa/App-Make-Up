import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import Splash from './pages/Splash';
import Home from './pages/Home';
import Register from './pages/Register';
import Profile from './pages/Profile';
import UsefulInformations from './pages/Useful_Information';
import Laws from './pages/Laws';
import EmergencyContacts from "./pages/emergency_Contacts";
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>

      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Splash" component={Splash} />
      <Drawer.Screen name="Register" component={Register} />
      <Drawer.Screen name="Usefulnformations" component={UsefulInformations} />
      <Drawer.Screen name="Laws" component={Laws} />
      <Drawer.Screen name="EmergencyContacts" component={EmergencyContacts} options={{ drawerItemStyle: { display: "none" } }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}


//import Navigation from "./pages/navigation";

//<Drawer.Screen name="Navigation" component={Navigation} />



//const Stack = createStackNavigator();

//export default function Routes() {
    //return (
/*<NavigationContainer>
    <Stack.Navigator>

        <Stack.Screen name="Navigation" component={Navigation} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="UsefulInformations" component={Usefulnformations} />

    </Stack.Navigator>
</NavigationContainer>

*/




    //);
//}
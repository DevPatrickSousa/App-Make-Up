//imports

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
import Login from "./pages/Login";


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    //content of menu.
    <Drawer.Navigator>
      <Drawer.Screen name="Register" component={Register} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Splash" component={Splash} />
      <Drawer.Screen name="Usefulnformations" component={UsefulInformations} />
      <Drawer.Screen name="Laws" component={Laws} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="EmergencyContacts" component={EmergencyContacts} options={{ drawerItemStyle: { display: "none" } }} />
    </Drawer.Navigator>
  );
}
//here we show the menu DrawerNavigation.
export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}



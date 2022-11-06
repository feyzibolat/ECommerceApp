// import { StatusBar } from 'expo-status-bar';
// <StatusBar style="auto" />
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import {
  Welcome,
  Walkthrough
} from "./screens";

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { CustomFonts } from './constants';

const _loadAssets = async () => {
  await Font.loadAsync(CustomFonts);
};

const Stack = createStackNavigator();

const App = () => {
  // LogBox.ignoreAllLogs(true);

  const [isReady, setReady] = React.useState(false);

  if (!isReady) {
    // this is what makes sure the fonts are ready before loading the app
    return (
      <AppLoading
        startAsync={_loadAssets} // this loads the fonts
        onFinish={() => setReady(true)}
        onError={e => console.error(e)}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Welcome'}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Walkthrough" component={Walkthrough} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
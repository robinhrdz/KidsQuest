import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './login';
import SignUpScreen from './signup';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from './firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

const Stack = createStackNavigator();

export default function App() {
  const [userInfo, setUserInfo] = React.useState(null); 
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: '991831660491-a5vl0inn84rut9f2ep9us05pkf2jb5fk.apps.googleusercontent.com',
    androidClientId: '991831660491-a5vl0inn84rut9f2ep9us05pkf2jb5fk.apps.googleusercontent.com',
  });

  React.useEffect(()=>{
    handleSignInwithGoogle(); 
  },[response]) 

  // useEffect(() => {
  //   if (response?.type === 'success') {
  //     const { id_token } = response.params;
  //     const credential = GoogleAuthProvider.credential(id_token);
  //     signInWithCredential(auth, credential);
  //   }
  // }, [response]);

  async function handleSignInwithGoogle(){
    const user = await AsyncStorage.getItem("@user");
    if(!user){
      if(response?.type === "success"){
        await getUserInfo(response.authentication.accessToken); 
      }
      
    } else{
      setUserInfo(JSON.parse(user));
    }

  }
  const getUserInfo = async(token) =>{
    if(!token) return;
    try{
      const response = await fetch(
        "https:www.googleapis.com/userinfo/v2/me",
        {
          headers: {Authorization: `Bearer ${token}`}, 
        }
      );
      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error){

    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="SignUp"
          options={{ headerShown: false }} 
        >
          {(props) => <SignUpScreen {...props} promptAsync={() => promptAsync()} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// IOS: 1012733076694-q5fc69h2sd16r01r023pmr9eloa11mel.apps.googleusercontent.com
// Android: 
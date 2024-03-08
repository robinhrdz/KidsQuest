import React, { useState } from 'react';
import {
  SafeAreaView, Text, TouchableOpacity, TextInput, Alert, Image,
  KeyboardAvoidingView, Platform
} from 'react-native';
import { styles } from './styles';
import { verifyUserCredentials } from './database';


const LoginScreen = ({ navigation }) => {
  const [username, setuser] = useState('');
  const [password, setpassword] = useState('');

  const handleVerify = async () => {
    const userExists = await verifyUserCredentials(username, password);
    if (userExists) {
      Alert.alert('User exists');
    } else {
      Alert.alert('Not valid');
    }
  };

  const signup = () => {
    navigation.navigate('SignUp');
  };

  const forgotpassword = () => {
    Alert.alert("Mamaste");
  }
  const signInWithGoogle = async () => {

  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <Text style={styles.title}>Kids Quest</Text>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={(text) => setuser(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setpassword(text)}
          keyboardType="visible-password"
          secureTextEntry
          style={styles.input}
        />
        <Text onPress={forgotpassword} style={styles.optionsaccount}>
          Forgot Password?
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleVerify}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton} onPress={signInWithGoogle}>
          <Image
            source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png' }}
            style={styles.googleIcon}
          />
          <Text style={styles.optionsaccount}>Sign in with Google</Text>
        </TouchableOpacity>
        <Text onPress={signup} style={styles.optionsaccount}>
          Don't have an account?
        </Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );

};

export default LoginScreen;
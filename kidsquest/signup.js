import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { styles } from './styles';
import { sendNewCredentials } from './database';


const SignUpScreen = ({ navigation}) => {
  const [name, setname] = useState('');
  const [lastn, setlastn] = useState('');
  const [email, setemail] = useState('');
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const signup = async () => {
    try {
      const success = await sendNewCredentials(name, lastn, email, username, password);

      if (success) {
        Alert.alert("Account created successfully!");
        // Optionally navigate to the login screen or perform other actions
      } else {
        Alert.alert("Error creating account. Please try again.");
      }
    } catch (error) {
      console.error("Error creating account:", error.message);
      Alert.alert("An unexpected error occurred. Please try again.");
    }

  };

  const backlogin = () => {
    navigation.navigate('Login');
  };

  const googlesign = () =>{
    Alert.alert("Hola"); 
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <Text style={styles.title}>Kids Quest</Text>
        <Text style={styles.title}>Sign Up Page</Text>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={(text) => setname(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Last name"
          value={lastn}
          onChangeText={(text) => setlastn(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setemail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={(text) => setusername(text)}
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
        <TouchableOpacity style={styles.button} onPress={signup}>
          <Text style={styles.buttonText}>Create account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton} onPress={googlesign}>
          <Image
            source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png' }}
            style={styles.googleIcon}
          />
          <Text style={styles.optionsaccount}>Sign Up with Google</Text>
        </TouchableOpacity>

        <Text onPress={backlogin} style={styles.optionsaccount}>
          Already have an account?
        </Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};


export default SignUpScreen;

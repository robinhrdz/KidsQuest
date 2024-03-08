import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCneuur9UJK7pcr7x0DWJ4X5ZN3HwXtNKk",
  authDomain: "kidsquest-8b0e0.firebaseapp.com",
  databaseURL: "https://kidsquest-8b0e0-default-rtdb.firebaseio.com",
  projectId: "kidsquest-8b0e0",
  storageBucket: "kidsquest-8b0e0.appspot.com",
  messagingSenderId: "830837168125",
  appId: "1:830837168125:web:831e3b4bdc8c9b6912eb94",
  measurementId: "G-6N3Q468CF5"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth };
export default app;

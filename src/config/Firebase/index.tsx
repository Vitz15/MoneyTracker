// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCFSv6WKWcLB7tZgYQt0g94EIxXgvsUyUU',
  authDomain: 'moneytracker-be9dc.firebaseapp.com',
  projectId: 'moneytracker-be9dc',
  storageBucket: 'moneytracker-be9dc.firebasestorage.app',
  messagingSenderId: '384856261472',
  appId: '1:384856261472:web:dc0c286b5cb2863accd405',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export default app;

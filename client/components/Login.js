import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-paper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ipAdress } from '../config';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async () => {
    if (email === '' || password === '') {
      Toast.show({
        type: 'error',
        text1: 'Incomplete Information',
        text2: 'Please fill in all fields.',
      });
      return;
    }
    try {
      const response = await axios.post(
        `http://${ipAdress}:3000/api/auth/login`,
        { Email: email, Password: password }
      );
      await AsyncStorage.setItem('userToken', JSON.stringify(response.data.userId));
      await AsyncStorage.setItem('IdUser', JSON.stringify(response.data.IdUser));
      await AsyncStorage.setItem('NAME', JSON.stringify(response.data.name));

      await AsyncStorage.setItem('welcomeBack', 'true');  // Set flag for welcome message
console.log(response.data.userId);
       // Clear input fields
       setEmail('');
       setPassword('');
      navigation.navigate('Tabs');
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Invalid email or password',
        text2: 'Please check your credentials.',
      });
    }
  };

  const navigateToUserAccount = () => {
    navigation.navigate('CoffeeShopSignUp');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../image/c.png')} style={styles.logo} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Numéro mobile ou e-mail"
          placeholderTextColor="#CCCCCC"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.passwordInput}>
          <TextInput
            style={styles.passwordTextInput}
            placeholder="Mot de passe"
            placeholderTextColor="#CCCCCC"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <Icon name='eye' style={styles.eyeImage} />
          </TouchableOpacity>
        </View>
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <Button style={styles.button} mode="contained" onPress={handleSubmit}>
        Se connecter
      </Button>
      <TouchableOpacity onPress={navigateToUserAccount}>
        <Text style={styles.createAccount}>Créer un compte</Text>
      </TouchableOpacity>
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
    borderRadius: 50,
    
  },
  inputContainer: {
    marginBottom: 20,
    width: '80%',
  },
  input: {
    height: 50,
    borderColor: '#555555',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#1C1E21',
    color: '#FFFFFF',
  },
  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordTextInput: {
    flex: 1,
    height: 50,
    borderColor: '#555555',
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#1C1E21',
    color: '#FFFFFF',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  eyeImage: {
    width: 25,
    height: 25,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#008080', // Button color
    width: '80%',
    height: 50,
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonHover: {
    backgroundColor: '#008080', // Darker blue on hover
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  createAccount: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  createAccountHover: {
    color: '#002060', // Darker blue on hover
  },
  errorText: {
    color: '#FF0000',
    marginBottom: 10,
  },
});

export default Login;

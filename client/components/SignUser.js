import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, TextInput,SafeAreaView, TouchableOpacity, Image ,ScrollView ,Alert } from 'react-native';
import { Button } from 'react-native-paper';
import axios from 'axios';
import { ipAdress } from '../config';





const SignUser = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);




  const isEmailValid = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };


  const handleSignIn = async () => {
   
      const body = {
        UserType: "client",
        Email: email,
        Password: password,
        FirstName: firstName,
        LastName: lastName,
        PhoneNumber: PhoneNumber,
        ImageUrl: profilePicture,
      };
      if (email === '' || password === '',firstName === '' || lastName === '',PhoneNumber === '') {
        Alert.alert('Incomplete Information', 'Please fill in all fields.');
        return;
      }
      if (!isEmailValid(email)) {
        Alert.alert('Invalid Email', 'Please enter a valid email address.');
        return;
      }
      try {
        if (password.length < 6) {
          Alert.alert('Invalid Password', 'Password must be at least 6 characters long.');
          return;
        }
      console.log("Sending sign up request with body:", body);
     
      const response = await axios.post(
        `http://${ipAdress}:3000/api/auth/register`,
      
        body
      );
     
      console.log("Response data:", response.data);
  
     
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setPhoneNumber('');
      setProfilePicture('');
  
     
      navigation.navigate('Login');
    } catch (error) {
      console.error("Error signing up:", error);
      setError(error.message);
    }
  };
  

  const navigateToUserAccount = () => {
    navigation.navigate('Login'); 
  };

  return (
    <SafeAreaView >
    <ScrollView  >
    
    <View style={styles.container}>
       <Image source={require('../image/bonna.jpg')} style={styles.logo} />
      
     

      <View style={styles.inputContainer}>
        
        <TextInput
          style={styles.input}
          placeholder="Prénom"
          placeholderTextColor="#666666"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Nom de famille"
          placeholderTextColor="#666666"
          value={lastName}
          onChangeText={setLastName}
        />
 <TextInput
          style={styles.input}
          placeholder=  "E-mail"
          placeholderTextColor="#666666"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="#666666"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Badge"
          placeholderTextColor="#666666"
          value={PhoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
      </View>
      
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Button style={styles.button} mode="contained" onPress={handleSignIn}>
      S'inscrire
      </Button>
    
    <TouchableOpacity
    onPress={navigateToUserAccount}
   >
     <Text style={styles.createAccount}>Avez-vous un compte? </Text>
   </TouchableOpacity>
   </View>
   </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 500,
    height: 200,
    marginBottom: 100,
    marginLeft:-15
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  profileImagePlaceholder: {
    width: 150,
    height: 150,
    backgroundColor: '#DDD',
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImageText: {
    fontSize: 16,
    color: '#555',
  },
  inputContainer: {
    marginBottom: 20,
    width: '80%',
  },
  
  createAccount: {
    color: '#003399',
    fontWeight: 'bold',
    fontSize: 16,
   

    marginVertical:20,
  },
  input: {
    height: 50,
    borderColor: '#CCC',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: '#FFF',
    color: 'black',
  },
  button: {
    backgroundColor: '#003399',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 25,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SignUser;

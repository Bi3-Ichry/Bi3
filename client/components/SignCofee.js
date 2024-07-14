import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput,SafeAreaView, TouchableOpacity, Image ,ScrollView ,Alert } from 'react-native';
import { Button } from 'react-native-paper';
import axios from 'axios';
import { ipAdress } from '../config';
const SignCofee = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [Adress, setAdress] = useState('');

  const isEmailValid = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };


  const HandleSubmit = async () => {
    
      const body = {
        UserType: 'coffee', 
        Adress:Adress,
        Email: email,
        Password: password,
        FirstName: firstName,
        LastName: lastName,
        Adress:Adress
      
      };
      if (email === '' || password === '',firstName === '' || lastName === ''|| Adress === '') {
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
      const response = await axios.post(
        
        `http://${ipAdress}:3000/api/auth/register`,
        body
      );
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
     
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
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Nom de famille"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
              <TextInput
          style={styles.input}
          placeholder="Poste de chef"
          value={Adress}
          onChangeText={setAdress}
        />
        <TextInput
          style={styles.input}
          placeholder="Badge"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
      
      </View>
      <Button style={styles.button} mode="contained" onPress={HandleSubmit}>
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
    width: '100%',
    padding:10
  
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

export default SignCofee;
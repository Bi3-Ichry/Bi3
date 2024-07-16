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
      if (firstName === '' || lastName === '') {
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
  const navigateTo = () => {
    navigation.navigate('st2'); 
  };

  const navigateToUserAccount = () => {
    navigation.navigate('Login'); 
  };
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView  >
    

      
      

      <View style={styles.container}>
        <Text style={styles.fullname}>Complte vous information </Text>
        <Text style={styles.name}>Entrez le nom complet que vous utilisez au quotidien.</Text>

      {/* <Image source={require('../image/c.png')} style={styles.logo} /> */}
      <View style={styles.inputContainer}>

        <TextInput
          style={styles.input}
          placeholder="Prénom"
          placeholderTextColor={"#FFFFFF"}
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Nom "
          placeholderTextColor={"#FFFFFF"}
          value={lastName}
          onChangeText={setLastName}
        />
        </View>
        <View  style={styles.inputContainer1}>
        <TextInput
          style={styles.input1}
          placeholder="E-mail"
          placeholderTextColor={"#FFFFFF"}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        
        />
       
        <TextInput
          style={styles.input1}
          placeholder="Mot de passe"
          placeholderTextColor={"#FFFFFF"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
              <TextInput
          style={styles.input1}
          placeholder="Poste de chef"
          placeholderTextColor={"#FFFFFF"}
          value={Adress}
          onChangeText={setAdress}
        />
        <TextInput
          style={styles.input1}
          placeholder="Badge"
          placeholderTextColor={"#FFFFFF"}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
      
       </View>
      <Button style={styles.button} mode="contained" onPress={HandleSubmit}>
      Suivant
      </Button>
      <TouchableOpacity
    onPress={navigateToUserAccount}
   >
     <Text style={styles.createAccount}>J'ai déjà un compte? </Text>
   </TouchableOpacity>
   </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullname:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop:50,
    marginLeft:-30
    // marginBottom: 5,
  },
  name:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop:20,
    marginBottom: 10,
    marginLeft:-26
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
    marginBottom: -10,
    width: '100%',
    padding:29,
    flexDirection: 'row', // Add this line
    justifyContent: 'space-between', //
  
  },
  inputContainer1: {
    marginBottom: 10,
    width: '90%',
    padding:10,
    // marginTop:50,
    // marginLeft:-50
    // flexDirection: 'row', // Add this line
    // justifyContent: 'space-between', //
  
  },

  
  createAccount: {
    color: '#003399',
    fontWeight: 'bold',
    fontSize: 16,
   marginTop:300

    // marginVertical:20,
  },
  input: {
    height: 50,
    borderColor: '#555555',
    borderWidth: 1,
    marginTop:22,
    marginBottom: 5,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: '#1C1E21',
    color: '#FFFFFF',
    width:180
  },
  input1: {
    height: 50,
    borderColor: '#555555',
    borderWidth: 1,
    marginTop:22,
    marginBottom: 5,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: '#1C1E21',
    color: '#FFFFFF',
    width:350
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

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const SignACC = ({ navigation }) => {
  const handleUserSignUp = () => {
    navigation.navigate('UserSignUp');
  };
  

  const handleCoffeeShopSignUp = () => {
    navigation.navigate('CoffeeShopSignUp');
  };

  const navigateToUserAccount = () => {
    navigation.navigate('Login'); 
  };
  return (
    <View style={styles.container}>
      {/* <Image source={require('../image/bonna.jpg')} style={styles.logo} /> */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleUserSignUp}>
          <Text style={styles.buttonText}>Employeur</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleCoffeeShopSignUp}>
          <Text style={styles.buttonText}>Chef</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
    onPress={navigateToUserAccount}
   > 
     <Text style={styles.createAccount}>Avez-vous un compte?  </Text>
   </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008080',
    
  },
  logo: {
    width: 500,
    height: 200,
    marginBottom: 50,
    marginLeft:-15
  },
  createAccount: {
    color: '#003399',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop:10,
  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  button: {
    backgroundColor: '#003399',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    marginHorizontal: 5, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignACC;

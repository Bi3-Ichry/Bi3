import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, useColorScheme, View, ImageBackground, ActivityIndicator } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';

import { RefreshControl } from "react-native";

function Section({ title }) {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
    </View>
  );
}

function Start({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Login'); 
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timeout if component unmounts
  }, [navigation]);

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <ImageBackground
     source={require('../image/bonna.jpg')}
        style={styles.backgroundImage}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#003399" />
          </View>
        ) : (
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tabs')}>
            {/* <Text style={styles.buttonText}>Get started</Text> */}
          </TouchableOpacity>
        )}
      </ImageBackground> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    // backgroundColor: 'black',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    backgroundColor: '#fff',
  },
  backgroundImage: {
    
    width: 500,
    height: 200,
    marginTop: 100,
    marginLeft:-50,
    padding:20,
    borderRadius:"100%"
  },
  button: {
    alignItems: 'center',
    marginTop: 520,
    width: '50%',
    height: 60,

    // backgroundColor: '#dba617',

    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    marginHorizontal: 5, 
  },
  buttonText: {
    // color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:100,
    marginTop: 500,
  //  color: '#003399',
  },
});

export default Start;

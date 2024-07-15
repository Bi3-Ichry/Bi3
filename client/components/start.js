import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, useColorScheme, View, ActivityIndicator } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

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

function Start({ navigation }) {
  const isDarkMode = useColorScheme() === 'dark';
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Login');
    }, 6000);

    return () => clearTimeout(timer); // Cleanup timeout if component unmounts
  }, [navigation]);
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FastImage
          source={require('../image/Bi3.gif')}
          style={styles.backgroundImage}
          resizeMode={FastImage.resizeMode.cover}
        />
        {isLoading ? (
          <View style={styles.loadingContainer}>
            {/* <ActivityIndicator size="large" color="red" /> */}
          </View>
        ) : (
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            {/* <Text style={styles.buttonText}>Get started</Text> */}
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  button: {
    alignItems: 'center',
    marginTop: 520,
    width: '50%',
    height: 60,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    marginHorizontal: 5, 
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    marginTop: 520,
  },
});

export default Start;
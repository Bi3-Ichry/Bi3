import React, { useEffect, useState } from 'react';
import { NavigationContainer , DefaultTheme, DarkTheme, } from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IconButton } from 'react-native-paper';

// Import your components
import SignUser from '../components/SignUser';
import SignCofee from '../components/SignCofee';
import Login from '../components/Login';
import SignACC from '../components/Signacc';
import Start from '../components/start';
import ProductList from '../components/ProductList';
import Start2 from '../components/Start2';
import Start3 from '../components/start3';
import Start4 from '../components/start4';
import UserProfile from '../components/UserProfile';
import MenuItems from '../components/menuitems';
import HomePage from '../components/homepage';
import Map from '../components/MapCoffe';
import chat from '../components/chat';
import AddPacks from '../components/addpacks';
import AddProducts from '../components/addproducts';
import coffeeprofile from '../components/coffeeprofile';
import Orders from '../components/orders';
import TransactionScreenCoffee from '../components/transactionScreenCoffe';
import ReviewsCoffee from '../components/ReviewsCoffee';
import PaymentCardsDetails from '../components/paymentcardsdetailsCoffee';
import EditCoffee from '../components/editCoffee';
import InfoCoffee from '../components/informationsCoffee';
import SettingComponent from '../components/Setting';
import Favorit from '../components/Another';
import ProductDetailsPage from '../components/ProdDetails';
import Paye from '../components/Payment';
import Panier from '../components/Panier';
import Allcoffeeshops from '../components/AllCoffeShops';
import Onboarding from '../components/Onboarding';
import AdvancedFilter from '../components/AdvancedFilter';
import Coffeelist from "../components/coffeeprodlist";
import SeeAllProdsCoffee from "../components/seeAllprodscoffee";
import SeeAllPacksCoffee from "../components/seeAllpackscoffee";
import AllCakes from '../components/AllCakes';
import AllCoffees from '../components/AllCoffees';
import AllDrinks from '../components/AllDrinks';
import AllProducts from '../components/AllProd';
import TestCloud from "../components/testcloudinary";
import PaymentSuccessPage from "../components/paymentSucces";
import PaymentSuccess from '../components/paymentSucces';
import Allpack from '../components/allpack';
import { ipAdress } from '../config'; // Make sure you have the correct IP address
import axios from 'axios';
import Availability from '../components/availibility';
import RoomsChat from '../components/RoomsChat'
import editusers from '../components/edituser'
import CoffeeshopReviews from '../components/coffeeshopreviews'
import SettingsScreen from '../components/settings';
import Rapport from '../components/Rapport'
import inscrit from '../components/inscrit'
// import { useNavigation } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  const [userType, setUserType] = useState("");
  const [CoffeeShopsData, setCoffeeShopsData] = useState([]);
  const [FilteredData, setFilteredData] = useState([]);

  // const [x,setx]=useState(false);
  // const name = user.map(e=>e.FirstName)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUserType = await AsyncStorage.getItem('userToken');
        setUserType(JSON.parse(storedUserType));
        console.log("userType", userType);
      } catch (error) {
        console.log('Error fetching user type:', error);
      }
    };
    fetchData();
  }, []);

  const storeUserType = async (type) => {
    try {
      await AsyncStorage.setItem('UserType', type);
    } catch (error) {
      console.log('Error storing user type:', error);
    }
  };
 

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#dba617',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="homePage"
        component={HomePage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="home" size={size} iconColor={color} />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color: focused ? '#dba617' : 'gray' }}>Home</Text>
          ),
          headerShown: false
        }}
      />
      {/* <Tab.Screen
        name="Allcoffeeshops"
        component={Allcoffeeshops}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="coffee" size={size} iconColor={color} />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color: focused ? '#dba617' : 'gray' }}>Shops</Text>
          ),
          headerShown: false
        }}
      /> */}
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="google-maps" size={size} iconColor={color} />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color: focused ? '#dba617' : 'gray' }}>Map</Text>
          ),
          headerShown: false
        }}
      />
      {userType === 'client' ? (
        <Tab.Screen
        
          name="User"
          component={UserProfile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <IconButton icon="account" size={size} iconColor={color} />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text style={{ color: focused ? '#dba617' : 'gray' }}>Profile</Text>
            ),
            headerShown: false
          }}
        />
      ) : userType === 'coffee' ? (
        <Tab.Screen
          name="coffeeProfile"
          component={coffeeprofile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <IconButton icon="account" size={size} iconColor={color} />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text style={{ color: focused ? '#dba617' : 'gray' }}>Profile</Text>
            ),
            headerShown: false
          }}
        />
      ) : null}
       <Tab.Screen name="  Panier" component={  Panier}  options={{
          tabBarButton: () => null, // This hides the tab from the tab bar
        }} />
      <Tab.Screen name="Allpack" component={  Allpack}  options={{
          tabBarButton: () => null, // This hides the tab from the tab bar
        }} />
      <Tab.Screen name="  SeeAllPacksCoffee" component={  SeeAllPacksCoffee}  options={{
          tabBarButton: () => null, // This hides the tab from the tab bar
        }} />
        
    
      <Tab.Screen name="  Coffeelist" component={  Coffeelist}  options={{
          tabBarButton: () => null, // This hides the tab from the tab bar
        }} />
          <Tab.Screen name="  InfoCoffee" component={  InfoCoffee}  options={{
          tabBarButton: () => null, // This hides the tab from the tab bar
        }} />
      
       <Tab.Screen name="Favorit" component={Favorit}  options={{
          tabBarButton: () => null, // This hides the tab from the tab bar
        }} />
        <Tab.Screen name="Edit" component={EditCoffee}  options={{
          tabBarButton: () => null, // This hides the tab from the tab bar
        }} />
         <Tab.Screen name="editusers" component={editusers}   options={{
          tabBarButton: () => null, // This hides the tab from the tab bar
        }} />
         <Tab.Screen name="TransactionScreenCoffee" component={TransactionScreenCoffee}  options={{
          tabBarButton: () => null, // This hides the tab from the tab bar
        }} />
         <Tab.Screen name="AllProducts" component={AllProducts}  options={{
          tabBarButton: () => null, // This hides the tab from the tab bar
        }} />
        
          <Tab.Screen name="Orders" component={Orders}  options={{
          tabBarButton: () => null, // This hides the tab from the tab bar
        }} />
        <Tab.Screen name="SettingComponent" component={SettingComponent}  options={{
          tabBarButton: () => null, // This hides the tab from the tab bar
        }} />
          <Tab.Screen name="PaymentCardsDetails" component={PaymentCardsDetails}  options={{
          tabBarButton: () => null, // This hides the tab from the tab bar
        }} />
          {/* <Tab.Screen name="paymentSucces" component={PaymentSuccess}  options={{
          tabBarButton: () => null, // This hides the tab from the tab bar
        }} /> */}
        
         <Tab.Screen name="  prd" component={  ProductDetailsPage}  options={{
          tabBarButton: () => null, // This hides the tab from the tab bar
        }} />
    
    </Tab.Navigator>
  );
}

function NAVSTART() {
  const [CoffeeShopsData, setCoffeeShopsData] = useState([]);
  const [FilteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://${ipAdress}:3000/api/user`);
        const filteredShops = response.data.filter(user => user.UserType === 'coffee');
        setCoffeeShopsData(filteredShops);
        setFilteredData(filteredShops);
      } catch (error) {
        console.log('Error fetching data:', error.message);
      }
    };
    fetchData()
  }, []);
 
 
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }} />
        <Stack.Screen name="Allpack" component={Allpack} options={{ headerShown: false }} />
        <Stack.Screen name="UserSignUp" component={SignUser} options={{ headerShown: false }} />
        <Stack.Screen name="CoffeeShopSignUp" component={SignCofee} options={{ headerShown: false }} />
        <Stack.Screen name="UserAccount" component={SignACC} options={{ headerShown: false }} />
        <Stack.Screen name="ProductList" component={ProductList}  />
        <Stack.Screen name="AddPacks" component={AddPacks} options={{ headerShown: false }} />
        <Stack.Screen name="AddProducts" component={AddProducts} options={{ headerShown: false }} />
        <Stack.Screen name="Orders" component={Orders} options={{ headerShown: false }} />
        <Stack.Screen name="Edit" component={EditCoffee} options={{ headerShown: false }} />
        <Stack.Screen name="Info" component={InfoCoffee} options={{ headerShown: false }} />
        <Stack.Screen name="Coffeelist" component={Coffeelist} options={{ headerShown: false }} />
        <Stack.Screen name="TestCloud" component={TestCloud} />
        <Stack.Screen name="Availability" component={Availability} />
       

        
        <Stack.Screen
          name="TransactionScreenCoffee"
          component={TransactionScreenCoffee}
         
        />
         <Stack.Screen name="SeeAllPacksCoffee" component={SeeAllPacksCoffee} options={{ headerShown: false }} />
        <Stack.Screen name="ReviewsCoffee" component={ReviewsCoffee} options={{ headerShown: false }} />
        <Stack.Screen name="PaymentCardsDetails" component={PaymentCardsDetails} />
        <Stack.Screen name="User" component={UserProfile} options={{ headerShown: false }} />
        <Stack.Screen name="prd" component={ProductDetailsPage} options={{ headerShown: false }} />
        <Stack.Screen name="panier" component={Panier} options={{ headerShown: false }} />
        <Stack.Screen name="Allcoffeeshops" component={Allcoffeeshops} options={{ headerShown: false }} />
        <Stack.Screen name="Paye" component={Paye} options={{ headerShown: false }} />
        <Stack.Screen name="menu" component={MenuItems} options={{ headerShown: false }} />
        <Stack.Screen name="coffeeProfile" component={coffeeprofile} options={{ headerShown: false }} />
        <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} />
        <Stack.Screen name="inscrit" component={inscrit} options={{ headerShown: false }} />

        <Stack.Screen name="st2" component={Start2} options={{ headerShown: false }} />
        <Stack.Screen name="st3" component={Start3} options={{ headerShown: false }} />
        <Stack.Screen name="st4" component={Start4} options={{ headerShown: false }} />
        <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="AdvancedFilter" component={AdvancedFilter} options={{ headerShown: false }} />
        <Stack.Screen name="Favorit" component={Favorit} options={{ headerShown: false }} />
        <Stack.Screen name="SeeAllProdsCoffee" component={SeeAllProdsCoffee} options={{ headerShown: false }} />
        <Stack.Screen name="AllProducts" component={AllProducts} options={{ headerShown: false }} />
        <Stack.Screen name="AllCakes" component={AllCakes} options={{ headerShown: false }} />
        <Stack.Screen name="AllCoffees" component={AllCoffees} options={{ headerShown: false }} />
        <Stack.Screen name="AllDrinks" component={AllDrinks} options={{ headerShown: false }} />
        <Stack.Screen name="chat" component={chat}  />
        <Stack.Screen name="paymentSucces" component={PaymentSuccessPage}  />
        <Stack.Screen  name="SettingComponent" component={SettingComponent} />
        <Stack.Screen  name="RoomsChat" component={RoomsChat} /> 
        <Stack.Screen  name="editusers" component={editusers} /> 
        <Stack.Screen  name="CoffeeshopReviews" component={CoffeeshopReviews} /> 
        <Stack.Screen  name="SettingsScreen" component={SettingsScreen} /> 
        <Stack.Screen  name="Rapport" component={Rapport} /> 
         
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NAVSTART;

import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";


const screens = {
    
   About: {
       screen: About,
       navigationOptions: {
           title: 'About GameZone',
           //headerStyle: {backgroundColor: '#eee'}
       }
   },
}
   {/*ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
        title: 'ReviewDetails',
        //headerStyle: {backgroundColor: '#eee'}
    }
},*/}
   


const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {backgroundColor: '#eee', height: 80}
    }
});

export default AboutStack;
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './screens/home';
import About from './screens/about';
import ReviewDetails from './screens/reviewDetails';
import Navigator from './routes/drawer';

export default function App() {
  return (
    <Navigator />
  );
}



import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {appStack} from './Routs';

export const Navigator = () => {
  return (
    <>
      <NavigationContainer>{appStack()}</NavigationContainer>
    </>
  );
};

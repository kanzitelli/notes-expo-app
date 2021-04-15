import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { useTheme } from '@emotion/react';
import { If } from '@kanzitelli/if-component';

import { useServices } from './services';

import MainNavigator from './screens/main';

export const AppStack: React.FC<AppStackProps> = ({ themeMode }) => {
  const { nav } = useServices();
  const EmotionTheme = useTheme();

  // https://reactnavigation.org/docs/themes
  // https://emotion.sh/docs/theming
  const CurrentTheme = themeMode === 'dark' ? DarkTheme : DefaultTheme;
  const MyTheme = {
    ...CurrentTheme,
    colors: {
      ...CurrentTheme.colors,
      ...EmotionTheme.colors,
    },
  };

  return (
    <NavigationContainer
      ref={nav.n}
      onReady={nav.onReady}
      onStateChange={nav.onStateChange}
      theme={MyTheme}
    >
      <MainNavigator />
    </NavigationContainer>
  )
};
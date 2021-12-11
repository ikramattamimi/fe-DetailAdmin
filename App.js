import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './navigation/tabs'
import Feed from './screens/feed'
import InputComment from './components/inputComment'

const App = () => {
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
    // <InputComment/>
  );
}
export default App;
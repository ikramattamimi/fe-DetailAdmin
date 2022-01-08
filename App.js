import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './navigation/tabs'
import Comment from './components/Comment'
import GetAPI from './components/getAPI'
import Transition from './components/Transition'

const App = () => {
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>

    // <Transition />
  );
}
export default App;
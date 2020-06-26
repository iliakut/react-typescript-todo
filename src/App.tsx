import React from 'react';
import { Stack } from '@fluentui/react';
import Header from './components/Header';
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import { initializeIcons } from '@uifabric/icons';
initializeIcons();

const App: React.FC = () => {
  return (
    <Stack horizontalAlign="center">
      <Stack style={{ width: 400 }} gap={25}>
        <Header />
        <TodoList />
        <Footer />
      </Stack>
    </Stack>
  );
};

export default App;

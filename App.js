import React from 'react';
import Navbar from './Header/Navbar'; 
import Table from './Table/Table'; 
import  Card  from './Cards1/Cards1';
import Button from './Button/Button';
import List from './List/List';
import  Progress  from './progress/Progressbar'
import Paragraph from './Para/Paragraph';
const App = () => {
  return (
    <div>
      <Navbar />
      <Table />
      <Card/>
      <Button/>
      <List/>
      <Progress/>
      <Paragraph/>
    
    </div>
  );
};

export default App;

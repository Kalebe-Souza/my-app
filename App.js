import React, { Profiler } from 'react';
import { StyleSheet } from 'react-native';
import Profile from './componentes/semana04/Profile';


export default function App() {
  return (
    <Profile
      imgUri='https://www.fakepersongenerator.com/Face/male/male20161086628701477.jpg'
      genero='homem da Julia'
      nome='Apaixonado por ela'
      email='Somentedela@gmail.com'
      telefone='s2s2s2s2s2'
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
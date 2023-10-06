import React from 'react';
import { StyleSheet, View, Button,Text } from 'react-native';
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Home!</Text>
      <Link style={styles.link} href="/Appointment"><Button style={styles.button} title="Agendar Consulta"/></Link>
      <Link style={styles.link} href="/Scheduling"><Button style={styles.button} title="Consultar Pacientes Agendados" /></Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 500,
    margin: 30,
  },
  link: {
    margin: 20,
  },
  button: {
    width: 500,
  }
});
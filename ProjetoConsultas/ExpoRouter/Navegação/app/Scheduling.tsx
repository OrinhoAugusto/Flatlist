import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { Link } from "expo-router";

const pacientesAgendados = [
  {
    id: '1',
    nome: 'Paciente 1',
    cpf: '123.456.789-01',
    dataNascimento: '07-03-2006',
    dataConsulta: '6-10-2023',
    horaConsulta: '10:00',
    valorConsulta: '100.00',
  },
];

const ConsultarPacientesScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={pacientesAgendados}
        style={styles.aligner}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>Nome: {item.nome}</Text>
            <Text>CPF: {item.cpf}</Text>
            <Text>Data de Nascimento: {item.dataNascimento}</Text>
            <Text>Data da Consulta: {item.dataConsulta}</Text>
            <Text>Hora da Consulta: {item.horaConsulta}</Text>
            <Text>Valor da Consulta: {item.valorConsulta}</Text>
            <Link href="/"><Button title="Voltar ao Home"/></Link>
          </View>
        )}
      />
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
  aligner: {
    marginTop: 200,
  }
});

export default ConsultarPacientesScreen;
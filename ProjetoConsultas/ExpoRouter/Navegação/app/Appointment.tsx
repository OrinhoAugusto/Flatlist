import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { Link } from "expo-router";

const AgendarConsultaScreen = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [endereco, setEndereco] = useState('');
  const [dataConsulta, setDataConsulta] = useState('');
  const [horaConsulta, setHoraConsulta] = useState('');
  const [valorConsulta, setValorConsulta] = useState('');

  const agendarConsulta = () => {
    console.log('Dados do Paciente:');
    console.log('Nome:', nome);
    console.log('CPF:', cpf);
    console.log('Data de Nascimento:', dataNascimento);
    console.log('Endereço:', endereco);
    console.log('Data da Consulta:', dataConsulta);
    console.log('Hora da Consulta:', horaConsulta);
    console.log('Valor da Consulta:', valorConsulta);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.texto}>Nome Completo:</Text>
          <TextInput
            onChangeText={text => setNome(text)}
            value={nome}
            style={styles.input}
          />
          <Text style={styles.texto}>CPF:</Text>
          <TextInput
            onChangeText={text => setCpf(text)}
            value={cpf}
            style={styles.input}
          />
          <Text style={styles.texto}>Data de Nascimento:</Text>
          <TextInput
            onChangeText={text => setDataNascimento(text)}
            value={dataNascimento}
            style={styles.input}
          />
          <Text style={styles.texto}>Endereço:</Text>
          <TextInput
            onChangeText={text => setEndereco(text)}
            value={endereco}
            style={styles.input}
          />
          <Text style={styles.texto}>Data da consulta:</Text>
          <TextInput
            onChangeText={text => setDataConsulta(text)}
            value={dataConsulta}
            style={styles.input}
          />
          <Text style={styles.texto}>Hora da consulta:</Text>
          <TextInput
            onChangeText={text => setHoraConsulta(text)}
            value={horaConsulta}
            style={styles.input}
          />
          <Text style={styles.texto}>Valor da consulta:</Text>
          <TextInput
            onChangeText={text => setValorConsulta(text)}
            value={valorConsulta}
            style={styles.input}
          />
        </View>
        <View>
          <Button title="Agendar" onPress={agendarConsulta} />
          <Link href="/"><Button title="Voltar ao Home" /></Link>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    height: 30,
    padding: 10,
    margin: 20,
    borderRadius: 5,
    border: '1px solid black'
  },
  texto: {
    fontSize: 15,
  },

});

export default AgendarConsultaScreen;

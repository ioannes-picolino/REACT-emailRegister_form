import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState } from 'react';
import showPwd from './assets/showPwd.png';
import hidePwd from './assets/hidePwd.png';

export default function App() {
  const [cod, setCod] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [exibeSenha, setExibeSenha] = useState(false);

  function limpar() {
    setCod("");
    setNome("");
    setEmail("");
    setSenha("");
    setConfirmaSenha("");
  }

  async function salvar() {
    if (!validarCampos())
      return;

    try {
      let obj = {
        cod,
        nome,
        email,
        senha
      };
      let objString = JSON.stringify(obj);
      await AsyncStorage.setItem(chaveStorage, objString);
      Alert.alert('Salvo com sucesso!!!');
    }
    catch (e) {
      Alert.alert(e.toString());
    }
  }

  function validarEmail(email){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(email);
  }

  function validarSenha(senha){
    const regex = /^(?=.*[A-Z])(?=.*\d)[a-zA-z\d]{5,}$/
    return regex.test(senha);
  }

  function validarCampos(){
    if (cod.length == 0  || codigo <=0 )
      {
        Alert.alert('Código deve ser maior que zero.');
        return false;
      }
  
      if (nome.length == 0) {
        Alert.alert('Informe o nome.');
        return false;
      }
  
      if (!validarEmail(email)) {
        Alert.alert('Informe um e-mail válido!');
        return false;
      }
      if (!validarSenha(senha)) {
        Alert.alert('Crie uma senha com no mínimo 1 letra maiúscula, 1 número e 5 caracteres.');
        return false;
      }
      if (senha !== confirmaSenha) {
        Alert.alert('Senha e confirmação de senha não coincidem!');
        return false;
      }
  
      return true 
  }

  async function carregar() {
    try {
      let objString = await AsyncStorage.getItem(chaveStorage);
      if (objString != null) {
        let obj = JSON.parse(objString);
        setCod(obj.cod);
        setNome(obj.nome);
        setEmail(obj.email);
        setSenha(obj.senha);
        setConfirmaSenha(obj.senha);
      }
    }
    catch (e) {
      Alert.alert(e.toString());
    }
  }

  return (

    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}  >
        <View style={styles.areaTitulo}>
          <Text style={styles.titulo} >Cadastro de Usuário</Text>
        </View>

        <Text style={styles.labelCampo}>Código</Text>
        <TextInput style={[styles.campoEdicao, styles.sombra]}
          keyboardType='numeric'
          onChangeText={(texto) => setCod(texto)} value={codigo}
        />

        <Text style={styles.labelCampo}>Nome</Text>
        <TextInput style={[styles.campoEdicao, styles.sombra]}
          onChangeText={(texto) => setNome(texto)} value={nome}
        />

        <Text style={styles.labelCampo}>E-mail</Text>
        <TextInput style={[styles.campoEdicao, styles.sombra]}
          keyboardType='email-address'
          onChangeText={(texto) => setEmail(texto)} value={email}
        />

        <Text style={styles.labelCampo}>Senha</Text>
        <View style={styles.areaSenha}>
          <TextInput style={[styles.campoEdicao, styles.sombra, styles.campoSenha]}
            secureTextEntry={!exibeSenha}
            onChangeText={(texto) => setSenha(texto)} value={senha}
          />
          <TouchableOpacity
            onPress={() => setExibeSenha(!exibeSenha)}>
            <Image source={exibeSenha ? hidePwd : showPwd} style={styles.imgExibeSenha} />
          </TouchableOpacity>
        </View>

        <Text style={styles.labelCampo}>Confirmação de senha</Text>
        <TextInput style={[styles.campoEdicao, styles.sombra]}
          secureTextEntry={!exibeSenha}
          onChangeText={(texto) => setConfirmaSenha(texto)} value={confirmaSenha}
        />

        <View style={styles.areaBotao}>
          <TouchableOpacity style={[styles.botao, styles.sombra]}
            onPress={() => salvar()}
          >
            <Text style={styles.textoBotao}>Salvar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.botao, styles.sombra]}
            onPress={() => carregar()}
          >
            <Text style={styles.textoBotao}>Carregar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.botao, styles.sombra]}
            onPress={() => limpar()}>
            <Text style={styles.textoBotao}>Limpar</Text>
          </TouchableOpacity>

        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </View>


  );
}
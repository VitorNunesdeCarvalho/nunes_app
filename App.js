import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-web";

const LoginScreen = () => {
  return (
  <SafeAreaView style={styles.background}>
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/711/711769.png'}}
        style={styles.logo}
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Login"
          placeholderTextColor='#003f5c'
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Senha"
          placeholderTextColor='#003f5c'
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cadastroBtn}>
        <Text style={styles.cadastroText}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBotton: 40,
    margin: 35,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 50,
    margin: 5,
    marginBotton: 20,
    justifyContent: "center",
    padding: 20,
    flexDirection: "row",
    alignItems: 'center',
    borderColor: 'black',
  },
  inputText: {
    height: 50,
    color: "black",
    flex: 1,
    borderColor: "black",
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  cadastroBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 10,
  },
  cadastroText: {
    color: 'white',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: '#f5f5dc'
  },
});

export default LoginScreen;
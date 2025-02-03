import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

const App = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleSignIn = () => {
    if (username && password) {
      Alert.alert("Signed In", `Welcome, ${username}`);
    } else {
      Alert.alert("Error", "Please enter both username and password.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.headerBackground}></View>
          <Image
            source={{ uri: 'https://your-image-url/oebl-logo-white.png' }}
            style={styles.image}
          />
        </View>

        <View style={styles.formContainer}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://via.placeholder.com/45x45' }}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.signInText}>Sign In</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              placeholderTextColor="#B0B0B0"
              value={username}
              onChangeText={setUsername}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#B0B0B0"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.rememberMeContainer}>
            <TouchableOpacity onPress={toggleCheckbox} style={styles.checkbox}>
              {isChecked && <View style={styles.checked}></View>}
            </TouchableOpacity>
            <Text style={styles.rememberMeText}>Remember me</Text>
          </View>

          <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
            <Text style={styles.signInButtonText}>SIGN IN</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot password</Text>
          </TouchableOpacity>

          <Text style={styles.signupText}>
            Don’t have an account? <Text style={styles.signupLink}>Sign up</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121F2F',
  },
  mainContainer: {
    width: '100%',
    paddingBottom: 32,
    backgroundColor: '#ffffff',
    borderRadius: 51,
    marginTop: 22,
  },
  headerContainer: {
    width: '100%',
    height: 171,
    backgroundColor: '#372444',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    position: 'relative',
  },
  headerBackground: {
    flex: 1,
    backgroundColor: '#372444',
  },
  image: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    position: 'absolute',
    top: 60,
    left: 20,
  },
  formContainer: {
    paddingTop: 19,
    paddingHorizontal: 32,
    paddingBottom: 42,
    alignItems: 'center',
  },
  avatarContainer: {
    marginBottom: 22,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
  },
  signInText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    marginBottom: 32,
  },
  inputContainer: {
    width: 350,
    marginBottom: 20,
  },
  inputLabel: {
    color: '#751D1D',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 56,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 16,
    backgroundColor: 'white',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  checkbox: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: '#751D1D',
    borderRadius: 3,
    backgroundColor: '#F2F8F4F4',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    width: 15,
    height: 15,
    backgroundColor: '#751D1D',
    borderRadius: 3,
  },
  rememberMeText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#751D1D',
  },
  signInButton: {
    width: 184,
    height: 54,
    backgroundColor: '#751D1D',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  signInButtonText: {
    fontSize: 22,
    color: 'white',
    fontWeight: '600',
  },
  forgotPassword: {
    fontSize: 22,
    color: '#1B98F2',
    fontWeight: '300',
    marginBottom: 20,
  },
  signupText: {
    fontSize: 20,
    color: '#1B98F2',
    fontWeight: '300',
  },
  signupLink: {
    fontWeight: '600',
  },
});

export default App;

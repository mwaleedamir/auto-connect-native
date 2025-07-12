import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import IconArrowLeft from 'react-native-vector-icons/FontAwesome6';
import IconMail from 'react-native-vector-icons/MaterialIcons';
import IconLock from 'react-native-vector-icons/Feather';
import IconEye from 'react-native-vector-icons/AntDesign';
import IconEyeOff from 'react-native-vector-icons/Ionicons';

const Login = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'customer',
  });

  const signupRadio = [
    { labelName: 'Customer', value: 'customer' },
    { labelName: 'Owner', value: 'owner' },
  ];

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    // Add login logic here
    // navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {/* Top Nav */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation && navigation.goBack()}>
          <IconArrowLeft name="arrow-left" size={22} color="#6b451a" />
        </TouchableOpacity>
        <View style={styles.signupRow}>
          <Text style={styles.signupText}>Don't have an account yet?</Text>
          <TouchableOpacity onPress={() => navigation && navigation.navigate('Signup')} style={styles.signupBtn}>
            <Text style={styles.signupBtnText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Login Form */}
      <View style={styles.formWrapper}>
        <View style={styles.formBox}>
          <Text style={styles.formTitle}>Log in to your account</Text>
          <View style={styles.radioRow}>
            {signupRadio.map(radio => (
              <TouchableOpacity
                key={radio.value}
                style={styles.radioBtn}
                onPress={() => handleChange('userType', radio.value)}
              >
                <View style={[styles.radioCircle, formData.userType === radio.value && styles.radioCircleActive]} />
                <Text style={styles.radioLabel}>{radio.labelName}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.inputGroup}>
            <View style={styles.inputRow}>
              <IconMail name="mail-outline" size={20} color="#6b451a" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={formData.email}
                onChangeText={text => handleChange('email', text)}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputRow}>
              <IconLock name="lock" size={20} color="#6b451a" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={formData.password}
                onChangeText={text => handleChange('password', text)}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeBtn}>
                {showPassword ? (
                  <IconEye name="eye" size={20} color="#6b451a" />
                ) : (
                  <IconEyeOff name="eye-off-outline" size={20} color="#6b451a" />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
            <Text style={styles.loginBtnText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.signupRowBottom}>
            <Text style={styles.signupText}>Don't have an account yet?</Text>
            <TouchableOpacity onPress={() => navigation && navigation.navigate('Signup')}>
              <Text style={styles.signupLink}>Sign up for free</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
    elevation: 2,
  },
  signupRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  signupText: {
    fontSize: 14,
    color: '#333',
  },
  signupBtn: {
    backgroundColor: '#6b451a',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginLeft: 8,
  },
  signupBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  formWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  formBox: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#6b451a',
  },
  radioRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
    gap: 16,
  },
  radioBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  radioCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#6b451a',
    backgroundColor: '#fff',
  },
  radioCircleActive: {
    backgroundColor: '#6b451a',
  },
  radioLabel: {
    marginLeft: 6,
    fontSize: 14,
    color: '#333',
  },
  inputGroup: {
    marginBottom: 16,
    gap: 12,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  eyeBtn: {
    marginLeft: 8,
  },
  loginBtn: {
    backgroundColor: '#6b451a',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  loginBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupRowBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    gap: 8,
  },
  signupLink: {
    color: '#6b451a',
    fontWeight: 'bold',
    marginLeft: 4,
  },
});

export default Login; 
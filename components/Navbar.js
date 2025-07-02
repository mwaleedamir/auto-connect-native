import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from '../utils/Button';
import TopNavbar from './TopNavbar';

const Navbar = () => {
  return (
    <View style={styles.bg}>
      <TopNavbar />
      <View style={styles.innerContainer}>
        <View style={styles.headerSection}>
          <Text style={styles.headerTitle}>Find Your Dream Car</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              placeholder="Car Make, Model, Milage"
              placeholderTextColor="#888"
            />
            <TextInput
              style={styles.input}
              placeholder="Location"
              placeholderTextColor="#888"
            />
            <TextInput
              style={styles.input}
              placeholder="Showroom name"
              placeholderTextColor="#888"
            />
            <TextInput
              style={styles.input}
              placeholder="Car price"
              placeholderTextColor="#888"
              keyboardType="numeric"
            />
            <Button name="Find" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#bc9a71',
    minHeight: 64,
    paddingBottom: 8,
  },
  innerContainer: {
    width: '90%',
    alignSelf: 'center',
    paddingTop: 24,
  },
  headerSection: {
    alignItems: 'center',
    gap: 8,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    gap: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: '#000',
    marginHorizontal: 2,
  },
});

export default Navbar; 
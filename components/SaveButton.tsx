import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import IconBookmark from 'react-native-vector-icons/Ionicons';

const SaveButton = () => {
  const [show, setShow] = useState(false);

  return (
    <TouchableOpacity
      onPressIn={() => setShow(true)}
      onPressOut={() => setShow(false)}
      style={styles.button}
    >
      <IconBookmark name="bookmark-outline" size={20} color="#6b451a" />
      {show && <Text style={styles.text}>Save</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#6b451a',
    padding: 4,
    gap: 4,
    borderRadius: 6,
  },
  text: {
    fontSize: 14,
    color: '#6b451a',
    marginLeft: 4,
  },
});

export default SaveButton; 
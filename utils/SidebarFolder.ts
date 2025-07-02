import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import IconChevronUp from 'react-native-vector-icons/FontAwesome';
import IconChevronDown from 'react-native-vector-icons/FontAwesome';

const SidebarFolder = ({ name }) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.folderContainer}>
      <TouchableOpacity style={styles.folderHeader} onPress={() => setOpen(!open)}>
        <Text style={styles.folderTitle}>{name}</Text>
        {open ? (
          <IconChevronUp name="chevron-up" size={16} color="#6b451a" />
        ) : (
          <IconChevronDown name="chevron-down" size={16} color="#6b451a" />
        )}
      </TouchableOpacity>
      {open && (
        <View style={styles.folderContent}>
          <Text style={styles.folderContentText}>Content for {name}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  folderContainer: {
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  folderHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  folderTitle: {
    color: '#6b451a',
    fontWeight: 'bold',
    fontSize: 16,
  },
  folderContent: {
    padding: 12,
    backgroundColor: '#f3f4f6',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  folderContentText: {
    color: '#6b451a',
    fontSize: 14,
  },
});

export default SidebarFolder; 
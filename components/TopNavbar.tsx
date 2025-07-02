import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import IconAi from 'react-native-vector-icons/AntDesign';
import IconMd from 'react-native-vector-icons/MaterialIcons';

const Links = [
  { icon: <Icon name="car-side" size={20} color="#6b451a" />, label: 'Showrooms' },
  { icon: <Icon name="car-side" size={20} color="#6b451a" />, label: 'Sell' },
  { icon: <IconAi name="shop" size={20} color="#6b451a" />, label: 'Shop' },
];

const TopNavbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Text style={styles.brand}>AutoCorner</Text>
        <Text style={styles.slogan}>Let's Connect together</Text>
      </View>
      <View style={styles.linksRow}>
        {Links.map((link, idx) => (
          <TouchableOpacity key={idx} style={styles.linkBtn}>
            {link.icon}
            <Text style={styles.linkLabel}>{link.label}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.linkBtn}>
          <IconMd name="space-dashboard" size={20} color="#6b451a" />
          <Text style={styles.linkLabel}>Portal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkBtn}>
          <IconMd name="person-outline" size={20} color="#6b451a" />
          <Text style={styles.linkLabel}>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.menuBtn} onPress={() => setToggle(!toggle)}>
        <Icon name={toggle ? 'close' : 'bars'} size={24} color="#fff" />
      </TouchableOpacity>
      <Modal visible={toggle} transparent animationType="fade">
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setToggle(false)}>
          <View style={styles.modalContent}>
            {Links.map((link, idx) => (
              <TouchableOpacity key={idx} style={styles.modalLinkBtn}>
                <Text style={styles.modalLinkLabel}>{link.label}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.modalLinkBtn}>
              <Text style={styles.modalLinkLabel}>Portal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalLinkBtn}>
              <Text style={styles.modalLinkLabel}>Login</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    backgroundColor: '#bc9a71',
    paddingHorizontal: 16,
  },
  leftSection: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  brand: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  slogan: {
    color: '#fff',
    fontSize: 12,
  },
  linksRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  linkBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  linkLabel: {
    color: '#6b451a',
    marginLeft: 4,
    fontWeight: 'bold',
  },
  menuBtn: {
    marginLeft: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 24,
    alignItems: 'center',
  },
  modalLinkBtn: {
    marginVertical: 8,
  },
  modalLinkLabel: {
    color: '#6b451a',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TopNavbar; 
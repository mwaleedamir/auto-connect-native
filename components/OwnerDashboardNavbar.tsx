import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal } from 'react-native';
import IconMenu from 'react-native-vector-icons/Feather';
import IconChevronDown from 'react-native-vector-icons/Feather';

const OwnerDashboardNavbar = ({ navigation }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinks = [
    { label: 'Dashboard', route: 'OwnerDashboard' },
    { label: 'Reciept', route: 'OwnerReciept' },
    { label: 'Analytics', route: 'OwnerAnalytics' },
  ];

  return (
    <View style={styles.header}>
      <View style={styles.row}>
        {/* Mobile Toggle Button */}
        <TouchableOpacity onPress={() => setIsMobileMenuOpen(prev => !prev)} style={styles.menuBtn}>
          <IconMenu name="menu" size={28} color="#6b451a" />
        </TouchableOpacity>
        {/* Desktop Navigation */}
        <View style={styles.desktopNav}>
          {navLinks.map((link, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.navLink}
              onPress={() => navigation && navigation.navigate(link.route)}
            >
              <Text style={styles.navLinkText}>{link.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <TouchableOpacity onPress={() => setIsDropdownOpen(prev => !prev)} style={styles.profileBtn}>
            <Image
              source={require('../assets/images/profile-pic.jpg')}
              style={styles.profileImg}
            />
            <IconChevronDown name="chevron-down" size={22} color="#6b451a" />
          </TouchableOpacity>
          <Modal visible={isDropdownOpen} transparent animationType="fade">
            <TouchableOpacity style={styles.modalOverlay} onPress={() => setIsDropdownOpen(false)}>
              <View style={styles.dropdownMenu}>
                <TouchableOpacity style={styles.dropdownItem} onPress={() => navigation && navigation.navigate('OwnerProfile')}>
                  <Text style={styles.dropdownText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dropdownItem}>
                  <Text style={[styles.dropdownText, { color: 'red' }]}>Logout</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </Modal>
        </View>
      </View>
      {/* Mobile Nav */}
      <Modal visible={isMobileMenuOpen} transparent animationType="fade">
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setIsMobileMenuOpen(false)}>
          <View style={styles.mobileNavMenu}>
            {navLinks.map((link, idx) => (
              <TouchableOpacity
                key={idx}
                style={styles.mobileNavLink}
                onPress={() => navigation && navigation.navigate(link.route)}
              >
                <Text style={styles.mobileNavLinkText}>{link.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuBtn: {
    display: 'flex',
    marginRight: 12,
  },
  desktopNav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flex: 1,
    justifyContent: 'center',
  },
  navLink: {
    marginHorizontal: 8,
  },
  navLinkText: {
    fontSize: 16,
    color: '#6b451a',
    fontWeight: 'bold',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  profileBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginRight: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownMenu: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    minWidth: 160,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  dropdownItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    width: '100%',
  },
  dropdownText: {
    fontSize: 16,
    color: '#6b451a',
  },
  mobileNavMenu: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 24,
    minWidth: 200,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  mobileNavLink: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    width: '100%',
  },
  mobileNavLinkText: {
    fontSize: 18,
    color: '#6b451a',
    fontWeight: 'bold',
  },
});

export default OwnerDashboardNavbar; 
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import IconMenu from 'react-native-vector-icons/Feather';
import IconLogout from 'react-native-vector-icons/Feather';
import IconHome from 'react-native-vector-icons/FontAwesome';
import IconEdit from 'react-native-vector-icons/FontAwesome';
import IconDashboard from 'react-native-vector-icons/MaterialIcons';
import IconSettings from 'react-native-vector-icons/Ionicons';
import IconCreate from 'react-native-vector-icons/Ionicons';
import IconPerson from 'react-native-vector-icons/Ionicons';

const sidebarItems = [
  { name: 'Dashboard', icon: <IconDashboard name="dashboard" size={20} color="#aa702e" />, route: 'OwnerDashboard' },
  { name: 'Profile', icon: <IconPerson name="person-outline" size={20} color="#aa702e" />, route: 'OwnerProfile' },
  { name: 'Create Listings', icon: <IconCreate name="create-outline" size={20} color="#aa702e" />, route: 'OwnerCreateListings' },
  { name: 'Show Listings', icon: <IconEdit name="edit" size={20} color="#aa702e" />, route: 'OwnerShowListings' },
  { name: 'Settings', icon: <IconSettings name="settings-outline" size={20} color="#aa702e" />, route: 'OwnerSettings' },
  { name: 'Home', icon: <IconHome name="home" size={20} color="#aa702e" />, route: 'Home' },
];

const OwnerPortalSidebar = ({ navigation }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <View style={[styles.sidebar, isCollapsed ? styles.sidebarCollapsed : styles.sidebarExpanded]}>
      {/* Top Logo & Toggle */}
      <View style={styles.topBar}>
        {!isCollapsed && (
          <Text style={styles.logoText}>
            Auto<Text style={styles.logoAccent}>Connect</Text>
          </Text>
        )}
        <TouchableOpacity onPress={() => setIsCollapsed(prev => !prev)}>
          <IconMenu name="menu" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      {/* Sidebar Items */}
      <View style={styles.navSection}>
        {sidebarItems.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.navItem}
            onPress={() => navigation && navigation.navigate(item.route)}
          >
            {item.icon}
            {!isCollapsed && <Text style={styles.navLabel}>{item.name}</Text>}
          </TouchableOpacity>
        ))}
      </View>
      {/* Logout Button */}
      <View style={styles.logoutSection}>
        <TouchableOpacity style={styles.logoutBtn} onPress={() => {/* Add logout logic here */}}>
          <IconLogout name="log-out" size={20} color="#fff" />
          {!isCollapsed && <Text style={styles.logoutLabel}>Logout</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: '#fff',
    borderRightWidth: 1,
    borderRightColor: '#e5e7eb',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    transitionProperty: 'width',
    transitionDuration: '0.8s',
  },
  sidebarCollapsed: {
    width: 64,
  },
  sidebarExpanded: {
    width: 240,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    paddingHorizontal: 16,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  logoAccent: {
    color: '#ffb300',
  },
  navSection: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 4,
    backgroundColor: '#fff',
  },
  navLabel: {
    marginLeft: 12,
    fontSize: 16,
    color: '#333',
  },
  logoutSection: {
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    padding: 16,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    justifyContent: 'center',
  },
  logoutLabel: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OwnerPortalSidebar; 
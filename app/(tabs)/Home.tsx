import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
// import Navbar from './Navbar';
import CarsLogoCards from '../../components/CarsLogoCards';
import Icon from 'react-native-vector-icons/FontAwesome6';
import IconFeather from 'react-native-vector-icons/Feather';
import IconVsc from 'react-native-vector-icons/MaterialCommunityIcons';

const features = [
  {
    icon: <Icon name="car-side" size={32} color="#6b451a" />,
    title: 'Wide Selection',
    desc: 'Access a wide range of vehicles from trusted showrooms.'
  },
  {
    icon: <IconFeather name="lock" size={32} color="#6b451a" />,
    title: 'Secure Transactions',
    desc: 'Enjoy secure and hassle-free transactions.'
  },
  {
    icon: <IconVsc name="account-check" size={32} color="#6b451a" />,
    title: 'Trusted Dealers',
    desc: 'Connect with verified dealers and showrooms.'
  }
];

const testimonials = [
  'John Doe',
  'Jane Smith',
  'Alex Johnson'
];

const Home = () => {
  return (
    <ScrollView style={styles.bg}>
      {/* <Navbar /> */}
      <CarsLogoCards />

      {/* Features Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why Choose Us?</Text>
        <View style={styles.featuresRow}>
          {features.map((item, idx) => (
            <View key={idx} style={styles.featureCard}>
              <View style={styles.iconWrap}>{item.icon}</View>
              <Text style={styles.featureTitle}>{item.title}</Text>
              <Text style={styles.featureDesc}>{item.desc}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Testimonials */}
      <View style={[styles.section, { backgroundColor: '#fff' }]}>
        <Text style={styles.sectionTitle}>What Our Users Say</Text>
        <View style={styles.testimonialsRow}>
          {testimonials.map((name, idx) => (
            <View key={idx} style={styles.testimonialCard}>
              <Text style={styles.testimonialText}>
                "AutoConnectPK made my car search so much easier!"
              </Text>
              <Text style={styles.testimonialName}>- {name}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Call-to-Action */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Ready to Get Started?</Text>
        <Text style={styles.ctaDesc}>
          Join thousands of users who trust AutoConnectPK.
        </Text>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Sign Up Now</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © {new Date().getFullYear()} AutoConnect. All rights reserved.
        </Text>
        <View style={styles.footerLinks}>
          <Text style={styles.footerLink}>Terms of Service</Text>
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#f3f4f6',
    flex: 1,
  },
  section: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#6b451a',
    textAlign: 'center',
  },
  featuresRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 12,
  },
  featureCard: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    padding: 16,
    margin: 4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconWrap: {
    marginBottom: 12,
  },
  featureTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
    color: '#6b451a',
    textAlign: 'center',
  },
  featureDesc: {
    color: '#6b451a',
    textAlign: 'center',
  },
  testimonialsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 12,
  },
  testimonialCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    margin: 4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  testimonialText: {
    color: '#4b5563',
    fontStyle: 'italic',
    marginBottom: 8,
    textAlign: 'center',
  },
  testimonialName: {
    fontWeight: 'bold',
    color: '#6b451a',
    textAlign: 'center',
  },
  ctaSection: {
    paddingVertical: 32,
    backgroundColor: '#6b451a',
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  ctaDesc: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  ctaButton: {
    backgroundColor: '#facc15',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  ctaButtonText: {
    color: '#6b451a',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    paddingVertical: 16,
    backgroundColor: '#1f2937',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    textAlign: 'center',
  },
  footerLinks: {
    flexDirection: 'row',
    marginTop: 8,
    gap: 16,
  },
  footerLink: {
    color: '#facc15',
    marginHorizontal: 8,
    textDecorationLine: 'underline',
  },
});

export default Home; 
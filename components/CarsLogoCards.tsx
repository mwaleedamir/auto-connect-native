import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const carouselItems = [
  { image: require('../assets/images/bmw.jpg'), logo: require('../assets/images/bmwLogo.png') },
  { image: require('../assets/images/toyota.jpg'), logo: require('../assets/images/ToyotaLogo.png') },
  { image: require('../assets/images/honda.jpg'), logo: require('../assets/images/hondaLogo.png') },
  { image: require('../assets/images/bmw.jpg'), logo: require('../assets/images/hyundaiLogo.png') },
  { image: require('../assets/images/toyota.jpg'), logo: require('../assets/images/kiaLogo.png') }
];

const CarsLogoCards = () => {
  return (
    <View style={styles.bg}>
      <View style={styles.headerSection}>
        <Text style={styles.title}>Car brands</Text>
        <Text style={styles.subtitle}>Buy your favourite one</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
        {carouselItems.map((item, idx) => (
          <View key={idx} style={styles.card}>
            <Image source={item.image} style={styles.image} resizeMode="cover" />
            <Image source={item.logo} style={styles.logo} resizeMode="contain" />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#fff',
    paddingBottom: 24,
  },
  headerSection: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6b451a',
  },
  subtitle: {
    fontSize: 18,
    color: '#6b451a',
    marginTop: 4,
  },
  carousel: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  card: {
    width: 180,
    height: 180,
    backgroundColor: '#fff',
    borderRadius: 16,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    position: 'relative',
  },
  image: {
    width: 160,
    height: 120,
    borderRadius: 12,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    position: 'absolute',
    top: 8,
    left: 66,
    backgroundColor: '#fff',
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default CarsLogoCards; 
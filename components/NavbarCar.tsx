import React, { useRef } from 'react';
import { View, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';

const images = [
  require('../assets/images/toyota.jpg'),
  require('../assets/images/bmw.jpg'),
  require('../assets/images/hyundai.jpg'),
  require('../assets/images/honda.jpg'),
];

const { width } = Dimensions.get('window');
const size = 128; // 32 * 4 (rem to px)

const NavbarCar = () => {
  const scrollRef = useRef();

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
      >
        {images.map((img, idx) => (
          <View key={idx} style={styles.imageWrapper}>
            <Image source={img} style={styles.image} resizeMode="cover" />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: size,
    height: size,
    borderRadius: size / 2,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  carousel: {
    width: size,
    height: size,
    borderRadius: size / 2,
  },
  imageWrapper: {
    width: size,
    height: size,
    borderRadius: size / 2,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: size,
    height: size,
    borderRadius: size / 2,
  },
});

export default NavbarCar; 
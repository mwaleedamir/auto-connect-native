import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../utils/Button';
// import SaveButton from './SaveButton';

const CarsListings = [
  {
    _id: '1',
    userId: '123',
    carMake: 'Toyota',
    carName: 'Corolla',
    mileage: 50000,
    engineCapacity: 1800,
    color: 'White',
    varients: 'Altis Grande',
    carPrice: '42 Lacs',
    images: require('../assets/images/toyota.jpg'),
  },
  {
    _id: '2',
    userId: '123',
    carMake: 'Honda',
    carName: 'Civic',
    mileage: 35000,
    engineCapacity: 1500,
    color: 'Black',
    varients: 'Turbo RS',
    carPrice: '50 Lacs',
    images: require('../assets/images/toyota.jpg'),
  },
  {
    _id: '3',
    userId: '456',
    carMake: 'Suzuki',
    carName: 'Alto',
    mileage: 25000,
    engineCapacity: 660,
    color: 'Red',
    varients: 'VXL AGS',
    carPrice: '22 Lacs',
    images: require('../assets/images/toyota.jpg'),
  },
  {
    _id: '4',
    userId: '789',
    carMake: 'KIA',
    carName: 'Sportage',
    mileage: 12000,
    engineCapacity: 2000,
    color: 'Blue',
    varients: 'AWD',
    carPrice: '70 Lacs',
    images: require('../assets/images/toyota.jpg'),
  },
  {
    _id: '5',
    userId: '123',
    carMake: 'Hyundai',
    carName: 'Tucson',
    mileage: 10000,
    engineCapacity: 2000,
    color: 'Silver',
    varients: 'Ultimate',
    carPrice: '65 Lacs',
    images: require('../assets/images/toyota.jpg'),
  },
];

const ShowroomsBody = () => {
  const [grid, setGrid] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.toggleRow}>
        <TouchableOpacity
          onPress={() => setGrid(true)}
          style={[styles.toggleBtn, grid && styles.toggleBtnActive]}
        >
          <Text style={[styles.toggleBtnText, grid && styles.toggleBtnTextActive]}>Grid</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setGrid(false)}
          style={[styles.toggleBtn, !grid && styles.toggleBtnActive]}
        >
          <Text style={[styles.toggleBtnText, !grid && styles.toggleBtnTextActive]}>List</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.listings, grid ? styles.grid : styles.list]}>
        {CarsListings.length > 0 ? (
          CarsListings.map(car => (
            <View key={car._id} style={[styles.card, grid ? styles.cardGrid : styles.cardList]}>
              <Image source={car.images} style={[styles.carImage, grid ? styles.carImageGrid : styles.carImageList]} />
              <View style={styles.cardContent}>
                <View style={styles.cardHeader}>
                  <Text style={styles.carTitle}>{car.carMake} {car.carName}</Text>
                  {/* <SaveButton /> */}
                </View>
                <View style={[styles.carDetails, grid ? styles.carDetailsGrid : styles.carDetailsList]}>
                  <Text style={styles.detailText}>{car.mileage} Km</Text>
                  <Text style={styles.detailText}>{car.engineCapacity} CC</Text>
                  {!grid && <Text style={styles.detailText}>{car.color}</Text>}
                  {!grid && <Text style={styles.detailText}>{car.varients}</Text>}
                </View>
                <Text style={styles.updatedText}>updated {car.engineCapacity} days</Text>
                <View style={styles.priceRow}>
                  <Text style={styles.priceText}>{car.carPrice} PKR</Text>
                  <Button name="More detail" />
                </View>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noDataText}>No car data found</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 8,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
    marginBottom: 8,
  },
  toggleBtn: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#6b451a',
    backgroundColor: '#fff',
    marginLeft: 8,
  },
  toggleBtnActive: {
    backgroundColor: '#6b451a',
  },
  toggleBtnText: {
    color: '#6b451a',
    fontWeight: 'bold',
  },
  toggleBtnTextActive: {
    color: '#fff',
  },
  listings: {
    width: '100%',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  list: {
    flexDirection: 'column',
    gap: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  cardGrid: {
    width: '47%',
    marginRight: '3%',
  },
  cardList: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  carImage: {
    borderRadius: 8,
    backgroundColor: '#f3f4f6',
  },
  carImageGrid: {
    width: '100%',
    height: 120,
  },
  carImageList: {
    width: 120,
    height: 80,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
    padding: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  carTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  carDetails: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 4,
  },
  carDetailsGrid: {},
  carDetailsList: {},
  detailText: {
    color: '#666',
    fontSize: 12,
    marginRight: 8,
  },
  updatedText: {
    color: '#888',
    fontSize: 10,
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  priceText: {
    color: '#6b451a',
    fontWeight: 'bold',
    fontSize: 16,
  },
  noDataText: {
    color: '#888',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default ShowroomsBody; 
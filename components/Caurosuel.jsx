import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';


const { width: viewportWidth } = Dimensions.get('window');

const data = [
    {
      image: require('../assets/images/img1.png'),
      title: 'WorldWide Treats',
      description: 'Prepare it in 5 min',
    },
    {
      image: require('../assets/images/img2.jpg'),
      title: 'Trendy T-Shirt',
      description: 'Available in all size',
    },
    {
      image: require('../assets/images/img3.jpg'),
      title: 'Ladies',
      description: 'Perfect for your daily run',
    },
    {
      image: require('../assets/images/img4.jpg'),
      title: 'Mens',
      description: 'Perfect for your daily run',
    },
    {
      image: require('../assets/images/img5.jpg'),
      title: 'Rings and Piercings',
      description: 'Perfect for your daily run',
    },
  ];
  
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  };

const ProductCarousel = () => {
  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth - 60}
      />
    </View>
  );
};

export default ProductCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    height: 250,
    padding: 15,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
});

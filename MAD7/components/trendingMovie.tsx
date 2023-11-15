import React from 'react';
import { View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

interface Movie {
  id: number;
  title: string;
  imageUrl: string;
}

interface Props {
  item: Movie;
  handleClick: () => void;
}

const { width, height } = Dimensions.get('window');

const TrendingMovies: React.FC = () => {
  const navigation = useNavigation();

  const handleClick = (item: Movie) => {
    navigation.navigate('Movie', item);
  };

  const data: Movie[] = [
    { id: 1, title: 'Movie 1', imageUrl: 'data:image/jpeg;base64,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' }, // Replace with your actual base64 image string
  ];

  return (
    <View style={{ marginBottom: 8 }}>
      <Text style={{ color: 'white', fontSize: 20, marginLeft: 4, marginBottom: 5 }}>Trending</Text>
      <Carousel
        data={data}
        renderItem={({ item }) => <MovieCard item={item} handleClick={() => handleClick(item)} />}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.6}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
      />
    </View>
  );
};

const MovieCard: React.FC<Props> = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <ParallaxImage
        source={{ uri: item.imageUrl }}
        containerStyle={{
          width: width * 0.6,
          height: height * 0.4,
          borderRadius: 20,
        }}
        style={{
          resizeMode: 'cover',
        }}
      />
    </TouchableWithoutFeedback>
  );
};

export default TrendingMovies;

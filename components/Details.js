import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
} from 'react-native';
import colors from '../assets/colors/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';

const height = Dimensions.get('window').height;

const Details = ({route, navigation}) => {
  const {item} = route.params;

  const [like, setLike] = useState(false);

  return (
    <>
      <StatusBar barStyle="default" backgroundColor="transparent" translucent />
      <View style={styles.container}>
        <ImageBackground source={item.imageBig} style={styles.backgroundImage}>
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => navigation.goBack()}>
            <Entypo name="chevron-left" size={32} color={colors.white} />
          </TouchableOpacity>
          <View style={styles.titlesWrapper}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <View style={styles.locationWrapper}>
              <Entypo name="location-pin" size={24} color={colors.white} />
              <Text style={styles.locationText}>{item.location}</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.descriptionWrapper}>
          <View style={styles.heartWrapper}>
            <TouchableOpacity onPress={() => setLike(!like)}>
              {like ? (
                <Entypo name="heart" size={32} color={colors.orange} />
              ) : (
                <Entypo name="heart-outlined" size={32} color={colors.gray} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.descriptionTextWrapper}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>{item.description}</Text>
          </View>

          <View style={styles.infoWrapper}>
            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>PRICE</Text>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>${item.price}</Text>
                <Text style={styles.infoSubText}>/person</Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>RATING</Text>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>${item.rating}</Text>
                <Text style={styles.infoSubText}>/5</Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>DURATION</Text>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>${item.duration}</Text>
                <Text style={styles.infoSubText}> hours</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => alert('You Booked a Trip!')}>
            <Text style={styles.buttonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    height: height * 0.55,
    justifyContent: 'space-between',
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -20,
    borderRadius: 25,
  },
  backIcon: {
    marginLeft: 20,
    marginTop: 60,
  },
  titlesWrapper: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  itemTitle: {
    fontSize: 32,
    fontFamily: 'Comfortaa-SemiBold',
    color: colors.white,
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    fontSize: 16,
    fontFamily: 'Comfortaa-Regular',
    color: colors.white,
  },
  heartWrapper: {
    position: 'absolute',
    right: 40,
    top: -20,
    width: 64,
    height: 64,
    backgroundColor: colors.white,
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  descriptionTextWrapper: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  descriptionTitle: {
    fontSize: 24,
    fontFamily: 'Comfortaa-Regular',
    color: colors.black,
  },
  descriptionText: {
    marginTop: 20,
    fontSize: 16,
    height: 90,
    fontFamily: 'Comfortaa-Light',
    color: colors.darkGray,
  },
  infoWrapper: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  infoItem: {},
  infoTitle: {
    fontSize: 12,
    fontFamily: 'Comfortaa-SemiBold',
    color: colors.darkGray,
  },
  infoTextWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 5,
  },
  infoText: {
    fontSize: 24,
    fontFamily: 'Comfortaa-SemiBold',
    color: colors.orange,
  },
  infoSubText: {
    fontSize: 14,
    fontFamily: 'Comfortaa-SemiBold',
    color: colors.darkGray,
  },
  buttonWrapper: {
    marginHorizontal: 20,
    marginTop: 25,
    backgroundColor: colors.orange,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Comfortaa-SemiBold',
    color: colors.white,
  },
});

export default Details;

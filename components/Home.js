import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import activitiesData from '../assets/data/activitiesData';
import discoverCategoriesData from '../assets/data/discoverCategoriesData';
import discoverData from '../assets/data/discoverData';
import learnMoreData from '../assets/data/learnMoreData';
import {SafeAreaView} from 'react-native-safe-area-context';
import profile from '../assets/images/person.png';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  const renderDiscoverItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            item: item,
          })
        }>
        <ImageBackground
          source={item.image}
          style={[
            styles.discoverItem,
            {marginLeft: item.id === 'discover-1' ? 20 : 0},
          ]}
          imageStyle={styles.discoverItemImage}>
          <Text style={styles.discoverItemTitle}>{item.title}</Text>
          <View style={styles.discoverItemLocationWrapper}>
            <Entypo name="location-pin" size={18} color={colors.white} />
            <Text style={styles.discoverItemLocationText}>{item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderActivityItem = ({item}) => {
    return (
      <View
        style={[
          styles.activityItemWrapper,
          {marginLeft: item.id === 'activities-1' ? 20 : 0},
        ]}>
        <Image source={item.image} style={styles.activityItemImage} />
        <Text style={styles.activityItemText}>{item.title}</Text>
      </View>
    );
  };

  const renderLearnMoreItem = ({item}) => {
    return (
      <ImageBackground
        source={item.image}
        style={[
          styles.learnMoreItem,
          {marginLeft: item.id === 'learnMore-1' ? 20 : 0},
        ]}
        imageStyle={styles.learnMoreItemsImage}>
        <Text style={styles.learnMoreText}>{item.title}</Text>
      </ImageBackground>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <SafeAreaView>
            <View style={styles.menuWrapper}>
              <Feather
                name="menu"
                size={32}
                color={colors.black}
                style={styles.menuIcon}
              />
              <Image source={profile} style={styles.profileImage} />
            </View>
          </SafeAreaView>

          {/* Discover */}
          <View style={styles.discoverWrapper}>
            <Text style={styles.discoverTitle}>Discover</Text>
            <View style={styles.discoverCategoriesWrapper}>
              <Text
                style={[styles.discoverCategoriesText, {color: colors.orange}]}>
                All
              </Text>
              <Text style={styles.discoverCategoriesText}>Destinations</Text>
              <Text style={styles.discoverCategoriesText}>Cities</Text>
              <Text style={styles.discoverCategoriesText}>Experiences</Text>
            </View>
            <View style={styles.discoverItemsWrapper}>
              <FlatList
                data={discoverData}
                renderItem={renderDiscoverItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>

          {/* Activities */}
          <View style={styles.activitiesWrapper}>
            <Text style={styles.activitiesTitle}>Activities</Text>
            <View style={styles.activitiesItemsWrapper}>
              <FlatList
                data={activitiesData}
                renderItem={renderActivityItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>

          {/* Learn More */}
          <View style={styles.learnMoreWrapper}>
            <Text style={styles.learnMoreTitle}>Learn More</Text>
            <View style={styles.learnMoreItemsWrapper}>
              <FlatList
                data={learnMoreData}
                renderItem={renderLearnMoreItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  discoverWrapper: {
    marginTop: 20,
  },
  discoverTitle: {
    marginHorizontal: 20,
    fontSize: 32,
    fontFamily: 'Comfortaa-SemiBold',
  },
  discoverCategoriesWrapper: {
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 20,
  },
  discoverCategoriesText: {
    marginRight: 30,
    fontSize: 16,
    fontFamily: 'Comfortaa-Light',
    color: colors.gray,
  },
  discoverItemsWrapper: {
    paddingVertical: 20,
  },
  discoverItem: {
    width: 170,
    height: 250,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 20,
  },
  discoverItemImage: {
    borderRadius: 20,
  },
  discoverItemTitle: {
    fontSize: 16,
    fontFamily: 'Comfortaa-Regular',
    color: colors.white,
  },
  discoverItemLocationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  discoverItemLocationText: {
    marginLeft: 5,
    fontSize: 14,
    fontFamily: 'Comfortaa-SemiBold',
    fontWeight: 'bold',
    color: colors.white,
  },
  activitiesWrapper: {
    marginTop: 10,
  },
  activitiesTitle: {
    marginHorizontal: 20,
    fontSize: 24,
    fontFamily: 'Comfortaa-SemiBold',
    color: colors.black,
  },
  activitiesItemsWrapper: {
    paddingVertical: 20,
  },
  activityItemWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
  },
  activityItemImage: {
    width: 36,
  },
  activityItemText: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: 'Comfortaa-Light',
    color: colors.darkGray,
  },
  learnMoreWrapper: {
    marginTop: 10,
  },
  learnMoreTitle: {
    marginHorizontal: 20,
    fontSize: 24,
    fontFamily: 'Comfortaa-SemiBold',
    color: colors.black,
  },
  learnMoreItemsWrapper: {
    paddingVertical: 20,
  },
  learnMoreItem: {
    width: 170,
    height: 180,
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  learnMoreItemsImage: {
    borderRadius: 20,
  },
  learnMoreText: {
    fontSize: 16,
    fontFamily: 'Comfortaa-Regular',
    color: colors.white,
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

export default Home;

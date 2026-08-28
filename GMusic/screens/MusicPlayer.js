import React, { useState } from 'react'
import {
  FlatList, 
  StyleSheet,
  Text,
  View,
  useWindowDimensions 
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import songs from '../model/data';
import colors from '../theme/colors';

export default function MusicPlayer() {
  const { width } = useWindowDimensions();
  const [selectedIndexs, setSelectedIndex] = useState(0);
  
  const currentSong = songs[selectedIndex];
  const artworkSize = Math.min(width-40, 380);

  function handleMomentEnd(event) {
    const offset = event.nativeEvent.contentOffset.x;
    const index = Math.round(offset / width);
    setSelectedIndex(Index);
  }

  function renderArtwork({item}) {
    return (
      <view style={[styles.artworkPage, {width }]}>
        <image
        source={item.artwork }
        style={[
          styles.artworkSize,
          { height: artworkSize, width: artworkSize }
        ]}
        />

      </view>
    );
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>TOCANDO AGORA</Text>
        <Text style={styles.counter}>
        {selectedIndex + 1} de {songs.length}
        </Text>
    </View>

    <Flatlist 
    data={songs}
    horizontal
    
    renderItem={renderArtwork}
    keyExtractor={(item) => string(item.id)}
    showsHorizontalScrollIndictor={false}
    onMonumentumScrollEnd={handMomentEnd}
    />

    <View style={styles.metadata}>
    <Text style={styles.songTitle}>{currentSong.title}</Text>
    <Text style={styles.songArtist}>{currentSong.artist}</Text>
    </View>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  header: {
    heigth: 70,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  eyebrow: {
    color: colors.primary,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.8,
  },
  title: {
    marginTop: 8,
    color: colors.text,
    fontSize: 32,
    fontWeight: '800'
  },
  description: {
    marginTop: 10,
    color: colors.textSecondary,
    fontSize: 15
  },
    counter: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  artworkPage: {
    alignItems: 'center',
    justifyContentContent: 'center',
  },
  artwork: {
    borderRadius: 24,
  },
  metadata: {
    minHeight:110,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  songTitle: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
  },
  songArtist: {
    marginTop: 6,
    color: colors.textSecondary,
    fontSize: 14
  },
})
import React from 'react';
import {
    View,
    Text,
    Animated
} from 'react-native';

import { TextButton } from '../../components'

import { COLORS, SIZES, constants, FONTS } from '../../constants';


const Walkthrough = () => {

    const scrollX = React.useRef(new Animated.Value(0)).current;

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.light
            }}
        >
            <Animated.FlatList
                data={constants.walkthrough}
                keyExtractor={(item) => item.id}
                horizontal
                snapToInterval={SIZES.width}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    {
                        useNativeDriver: false
                    }
                )}
                renderItem={({ item, index }) => {
                    return (
                        <View
                            style={{
                                width: SIZES.width,
                                justifyContent: 'center'
                            }}
                        >
                            <Text>
                                {item.title}
                            </Text>
                        </View>
                    )
                }}

            />
        </View>
    )
}

export default Walkthrough;
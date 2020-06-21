import React, {FC} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

type Props = {
    result?: any;
};

const ResultsDetail: FC<Props> = ({result}): JSX.Element => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: result.image_url}} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginBottom: 10,
    },
    image: {
        height: 160,
        width: 300,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    }
});

export default ResultsDetail;

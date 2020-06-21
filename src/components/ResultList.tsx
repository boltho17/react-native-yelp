import React, {FC} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsDetail from "./ResultsDetail";

type Props = {
    title: string;
    results: []
};

const ResultList: FC<Props> = ({title, results}): JSX.Element => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result?.id}
                renderItem={({ item }) => {
                    return <ResultsDetail result={item}/>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        // fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 10
    }
});

export default ResultList;

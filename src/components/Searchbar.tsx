import React, {FC} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
    term?: string;
    onTermChange: (term: string) => void;
    onTermSubmit: () => void;
};

const SearchBar: FC<Props> = ({term, onTermChange, onTermSubmit}): JSX.Element => {
    return (
        <View style={styles.backgroundStyle}>
            <Icon name="search"
                  style={styles.iconStyle}/>
            <TextInput
                autoCapitalize='sentences'
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Søk"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'lightgrey',
        height: 50,
        borderRadius: 10,
        marginTop: 15,
        marginBottom: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    }
});

export default SearchBar;

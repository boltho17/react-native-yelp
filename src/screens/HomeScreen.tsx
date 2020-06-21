import React, {FC, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import SearchBar from '../components/Searchbar';
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

type State = {
    name: string;
    setTerm: () => void;
};

declare const global: {HermesInternal: null | {}};

const HomeScreen: FC = (): JSX.Element => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price: string) => {
        return results.filter(result => {
            return result.price === price;
        })
    }

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {results? <Text style={{marginLeft: 15}}>{`${results.length} resultater`}</Text> : null}
            {errorMessage? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                {
                    filterResultsByPrice('$').length?
                    <ResultList results={filterResultsByPrice('$')} title='$'/>
                    : null
                }
                {
                    filterResultsByPrice('$$').length?
                    <ResultList results={filterResultsByPrice('$$')} title='$$'/>
                    : null
                }
                {
                    filterResultsByPrice('$$$').length?
                    <ResultList results={filterResultsByPrice('$$$')} title='$$$'/>
                    : null}
                {
                    filterResultsByPrice('$$$$').length?
                    <ResultList results={filterResultsByPrice('$$$$')} title='$$$$'/>
                    : null
                }
            </ScrollView>
        </>
    );
};

export default HomeScreen;

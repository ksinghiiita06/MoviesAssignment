import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {Appbar, Card, Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {WHITE} from '../../common/colors';
import {POSTER_BASE_URL} from '../../common/constants';
import {isRTL, strings} from '../../common/localize';
import Header from '../../common/components/header';
import {API_KEY} from '../../services/api/apiConstants';
import EmptyListView from './components/EmptyListView';
import ErrorView from './components/ErrorView';
import LoadingView from './components/LoadingView';
import {fetchMoviesAction} from './movies.action';
import styles from './movies.styles';
import {RootState} from 'redux/reducers';

const NUMBER_OF_COLUMNS = 2;

const Movies = () => {
  const {languageCode} = useSelector((state: RootState) => state.appReducer);
  const [page, setPage] = useState(1);
  const {
    moviesResponse = {},
    fetching,
    error,
  } = useSelector((state: RootState) => state.moviesReducer);

  const dispatch = useDispatch();

  //Refetches data on page change
  useEffect(() => {
    const payload = {
      api_key: API_KEY,
      language: languageCode,
      page: page,
    };
    dispatch(fetchMoviesAction(payload));
  }, [page]);

  const nextClick = useCallback(() => {
    if (page < 1000) setPage(page + 1);
  }, [page]);

  const prevClick = useCallback(() => {
    if (page > 1) setPage(page - 1);
  }, [page]);

  const getMovieCard = ({item}: {poster_path: string; title: string}) => {
    return (
      <View style={styles.listItem}>
        <Card mode="outlined" style={styles.cardStyle}>
          <Card.Cover
            style={styles.cardCoverStyle}
            source={{uri: `${POSTER_BASE_URL}${item.poster_path}`}}
          />
          <Card.Content>
            <Text variant="titleSmall" style={styles.textStyle}>
              {item.title}
            </Text>
          </Card.Content>
        </Card>
      </View>
    );
  };

  //Just to fetch next & previous page movies
  const getExtraView = () => (
    <>
      <Appbar.Action
        icon={isRTL() ? 'skip-next' : 'skip-previous'}
        color={WHITE}
        onPress={prevClick}
      />
      <Appbar.Action
        icon={isRTL() ? 'skip-previous' : 'skip-next'}
        color={WHITE}
        onPress={nextClick}
      />
    </>
  );

  if (error) {
    return <ErrorView />;
  }

  return (
    <>
      <Header title={strings('screen2Title')} ExtraView={getExtraView()} />
      {fetching ? (
        <LoadingView />
      ) : (
        <View style={styles.root}>
          <FlatList
            numColumns={NUMBER_OF_COLUMNS}
            data={moviesResponse?.results}
            keyExtractor={item => item.id.toString()}
            ListEmptyComponent={EmptyListView}
            renderItem={getMovieCard}
          />
        </View>
      )}
    </>
  );
};

export default Movies;

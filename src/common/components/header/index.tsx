import React from 'react';
import {Appbar} from 'react-native-paper';
import {WHITE} from '../../colors';
import {ARABIC, ENGLISH} from '../../constants';
import {ARABIC_LANGUAGE, changeLocale, ENGLISH_LANGUAGE} from '../../localize';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import styles from './styles';
import {useSelector} from 'react-redux';
import {Text, View} from 'react-native';
import {RootState} from 'redux/reducers';

const Header = ({title = '', ExtraView = null}: any) => {
  const {languageCode} = useSelector((state: RootState) => state.appReducer);
  const curLangName = languageCode === ARABIC_LANGUAGE ? ARABIC : ENGLISH;

  // Language change menu
  const LanguageMenu = () => {
    return (
      <Menu onSelect={value => changeLocale(value)}>
        <MenuTrigger>
          <View style={styles.rowStyle}>
            <Text style={styles.labelText}>{curLangName}</Text>
            <Appbar.Action icon="chevron-down" color={WHITE} size={32} />
          </View>
        </MenuTrigger>
        <MenuOptions
          customStyles={{
            optionsContainer: styles.menuContainer,
          }}>
          <MenuOption
            value={ENGLISH_LANGUAGE}
            text={ENGLISH}
            customStyles={{
              optionText:
                languageCode === ENGLISH_LANGUAGE
                  ? styles.langSelectedText
                  : styles.langText,
            }}
            disabled={languageCode === ENGLISH_LANGUAGE}
          />
          <MenuOption
            value={ARABIC_LANGUAGE}
            text={ARABIC}
            customStyles={{
              optionText:
                languageCode === ARABIC_LANGUAGE
                  ? styles.langSelectedText
                  : styles.langText,
            }}
            disabled={languageCode === ARABIC_LANGUAGE}
          />
        </MenuOptions>
      </Menu>
    );
  };

  return (
    <>
      <Appbar.Header style={styles.header} mode="small">
        <Appbar.Content title={title} color={WHITE} />
        {ExtraView}
        <LanguageMenu />
      </Appbar.Header>
    </>
  );
};

export default Header;

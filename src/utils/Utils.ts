import {ImageStyle, Platform, TextStyle, ViewStyle} from 'react-native';

export class utils {
  static dynamicStyles(
    portraitStyles:
      | ViewStyle
      | ViewStyle[]
      | TextStyle
      | TextStyle[]
      | ImageStyle
      | ImageStyle[],
    landscapeStylesheet:
      | ViewStyle
      | ViewStyle[]
      | TextStyle
      | TextStyle[]
      | ImageStyle
      | ImageStyle[],
    orientation: string,
  ) {
    return orientation === 'portrait' ? portraitStyles : landscapeStylesheet;
  }

  static isIos() {
    return Platform.OS === 'ios';
  }
}

import { makeStyles } from '@material-ui/core/styles';

import { documentTypes } from 'config';

const drivingLicenseConfig = documentTypes['driving-license'];

const { real: dimensions } = drivingLicenseConfig.dimensions;
const { scale } = drivingLicenseConfig;

const useStyles = makeStyles(() => ({
  root: {
    height: dimensions.height * scale,
    width: dimensions.width * scale,
    padding: dimensions.padding * scale,
    border: '1px solid',
    'border-radius': 7,
    display: 'flex',
    'justify-content': 'space-between',
    'flex-direction': 'column',
  },
  header: {
    width: dimensions.header.width,
    height: dimensions.header.height * scale,
    'background-color': dimensions.header['background-color'],
    position: 'relative',
  },
  divider: {
    width: dimensions.header.divider.width,
    height: dimensions.header.divider.height * scale,
    position: 'absolute',
    'background-color': 'white',
  },
  country: {
    position: 'absolute',
    left: dimensions.header.country.left * scale,
    width: dimensions.header.country.width * scale,
    'background-color': dimensions.header['background-color'],
    color: 'white',
    'font-weight': 900,
    'font-size': dimensions.header.country['font-size'] * scale,
  },
  languages: {
    'text-transform': 'uppercase',
    'align-self': 'flex-end',
    color: 'white',
    height: dimensions.header.languages.height,
    width: dimensions.header.languages.width * scale,
    'padding-top': dimensions.header.languages.padding.top * scale,
    'padding-bottom': dimensions.header.languages.padding.bottom * scale,
    'padding-right': dimensions.header.languages.padding.right * scale,
  },
  upper: {
    'font-size': dimensions.header.languages.upper['font-size'] * scale,
    'font-weight': 900,
    width: '100%',
    'letter-spacing': 1,
    '& :first-child': {
      'margin-right': dimensions.header.languages.upper['first-child']['margin-right'] * scale,
    }
  },
  lower: {
    'font-size': dimensions.header.languages.lower['font-size'] * scale,
    'font-weight': 400,
    width: '100%',
    'letter-spacing': 0.9,
    '& :first-child': {
      'margin-right': dimensions.header.languages.lower['first-child']['margin-right'] * scale,
    }
  },
  footer: {
    width: dimensions.footer.width,
    height: dimensions.footer.height * scale,
    'background-color': '#3A4161',
  },
}));

export default useStyles;

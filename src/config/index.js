import { isMobile } from 'utils';

/* set your data here */
const email = 'info@findmehelp.am';
const domain = 'findmehelp.am'
/* ***************** */

const repository = 'https://github.com/opensourcesociety/helpmefind';

const messages = {
  app: {
    crash: {
      title: 'Oooops... Sorry, I guess, something went wrong. You can:',
      options: {
        email: `contact with author by this email - ${email}`,
        reset: 'Press here to reset the application',
      },
    },
  },
  loader: {
    fail: 'Hmmmmm, there is something wrong with this component loading process... Maybe trying later would be the best idea',
  },
  images: {
    failed: 'something went wrong during image loading :(',
  },
  404: 'Hey bro? What are you looking for?',
};

const copyright = {
  title: 'copyright © ',
  link: domain,
};

const themes = {
  light: {
    palette: {
      type: 'light',
      background: {
        default: '#fafafa',
        paper: '#fff',
      },
      primary: {
        light: '#7986cb',
        main: '#3f51b5',
        dark: '#303f9f',
        contrastText: '#fff',
      },
    },
  },

  dark: {
    palette: {
      type: 'dark',
      background: {
        default: '#111',
        paper: '#171717',
      },
      primary: {
        light: '#7986cb',
        main: '#333',
        dark: '#303f9f',
        contrastText: '#fff',
      },
    },
  },
};

const cancelationMessage = 'operation is manually canceled';

const dateFormat = 'MMMM DD, YYYY';

const title = 'Find Me Help';

const themePair = ['dark', 'light'];

const notifications = {
  options: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    autoHideDuration: 3000,
  },
  maxSnack: isMobile ? 3 : 4,
};

const loader = {
  // no more blinking in your app
  delay: 300, // if your asynchronous process is finished during 300 milliseconds you will not see the loader at all
  minimumLoading: 700, // but if it appears, it will stay for at least 700 milliseconds
};

const documentTypes = {
  passport: {
    type: 'passport',
    fields: [
      {
        documentID: 'string',
        details: 'string',
      },
    ],
  },
  'driving-license': {
    type: 'driving-license',
    fields: [
      {
        documentID: 'string',
        details: 'string',
      },
    ],
    dimensions: {
      real: {
        width: 8.6,
        height: 5.4,
        padding: 0.3,
        header: {
          width: '100%',
          height: 0.7,
          'background-color': '#343D59',
          divider: {
            width: '100%',
            height: 0.1,
            alignment: 'center',
          },
          country: {
            height: '100%',
            width: 1.5,
            left: 0.44,
            'font-size': 0.4411764705882353,
          },
          languages: {
            width: 5.8,
            height: '100%',
            padding: {
              right: 0.15,
              top: 0.07,
              bottom: 0.05,
            },
            upper: {
              'font-size': 0.16470588235294117,
              'first-child': {
                'margin-right': 0.3,
              },
            },
            lower: {
              'font-size': 0.14411764705882354,
              'first-child': {
                'margin-right': 0.4,
              },
            },
          },
        },
        footer: {
          width: '100%',
          height: 0.1,
        },
      },
    },
    scale: 34,
  },
  other: {
    type: 'other',
    fields: [
      {
        documentID: 'string',
        details: 'string',
      },
    ],
  },
};

const publishSteps = [
  'Գտել եք թե՞ փնտրում եք',
  'Ընտրեք փաստաթղթի տեսակը',
  'Լրացրեք անհրաժեշտ դաշտերը',
  'Հետադարձ կապ',
  'Հրապարակել',
];

export {
  messages,
  cancelationMessage,
  dateFormat,
  copyright,
  email,
  domain,
  repository,
  loader,
  title,
  themePair,
  notifications,
  themes,
  documentTypes,
  publishSteps,
};

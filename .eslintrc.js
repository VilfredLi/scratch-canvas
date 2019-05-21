module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': 'standard',
  'plugins': ['html'],
  'settings': {
    'html/indent': '0',
    'html/indent': '+2',
    'html/indent': 'space',
    'html/report-bad-indent': 'error'
  },
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
  }
}

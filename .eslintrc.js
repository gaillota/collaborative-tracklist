module.exports = {
    'extends': 'airbnb-base',
    "env": {
        "es6": true,
        "browser": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "ecmaVersion": 8,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    'rules': {
        'no-underscore-dangle': 'off',
        'indent': [0, 4],
        'comma-dangle': 0,
        'import/export': 0,
        'import/prefer-default-export': 0,
        'object-curly-spacing': 0,
        'no-trailing-spaces': 0,
        'quotes': [
            0,
            'single',
        ],
        "consistent-return": 0,
        'semi': ['error', 'never'],
    },
}

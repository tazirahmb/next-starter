module.exports = {
  env: {
    development: {
      presets: ['@babel/preset-env', '@babel/preset-react'
      ],
      plugins: [
        ['styled-components',
          { ssr: true, displayName: true
          }
        ],
        ['@babel/plugin-proposal-class-properties'
        ]
      ]
    },
    production: {
      presets: [
        ['@babel/preset-env',
          { targets: { ie: 9, uglify: true
            }
          }
        ],
        '@babel/preset-react'
      ],
      plugins: [
        ['styled-components',
          { ssr: true, displayName: true
          }
        ],
        ['@babel/plugin-proposal-class-properties'
        ]
      ]
    },
    test: {
      presets: ['@babel/preset-env', '@babel/preset-react'
      ],
      plugins: [
        ['styled-components',
          { ssr: true, displayName: true
          }
        ],
        ['@babel/plugin-proposal-class-properties'
        ],
        '@babel/plugin-transform-runtime'
      ]
    }
  }
};

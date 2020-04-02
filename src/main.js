const path = require('path')

export default function() {
  this.addPlugin({
    src: path.resolve(__dirname, 'svg4everybody.client.js'),
    fileName: 'generated.plugin.svg4everybody.client.js',
    ssr: false,
  })
}

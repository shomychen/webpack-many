// see http://vuejs-templates.github.io/webpack for documentation.
export default process.env.NODE_ENV === 'development' ? require('./dev.env.json') : require('./prod.env.json')

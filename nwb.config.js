module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactCalendarView',
      externals: {
        react: 'React'
      }
    }
  }
}

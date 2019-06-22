import app from './src/server'

const isProduction = process.env.NODE_ENV === 'production'
const port = isProduction ? process.env.PORT : 3001

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Server running on port ${port}`)
})

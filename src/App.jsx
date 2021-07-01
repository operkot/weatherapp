import { useSelector } from 'react-redux'

import useLocationDetect from 'hooks/useLocationDetect'
import { getLocNameFromQueryStr } from 'utils/location.utils'
import { getCurentWeather } from 'store/weather/weather.selectors'

import { Layout, Searchbox, Locationbox, Weatherbox } from 'components'

const App = () => {
  const currentWeather = useSelector(getCurentWeather)
  const qsLocation = getLocNameFromQueryStr(window.location.search)

  useLocationDetect(qsLocation)

  return (
    <Layout variant={currentWeather?.weather}>
      <Layout.Main>
        <Searchbox />
        <Locationbox />
        <Weatherbox />
      </Layout.Main>
      <Layout.Side>App side container</Layout.Side>
    </Layout>
  )
}

export default App

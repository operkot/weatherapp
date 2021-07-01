import useLocationDetect from 'hooks/useLocationDetect'
import { getLocNameFromQueryStr } from 'utils/location.utils'

import { Layout, Searchbox, Locationbox } from 'components'

const App = () => {
  const qsLocation = getLocNameFromQueryStr(window.location.search)

  useLocationDetect(qsLocation)

  return (
    <Layout>
      <Layout.Main>
        <Searchbox />
        <Locationbox />
      </Layout.Main>
      <Layout.Side>App side container</Layout.Side>
    </Layout>
  )
}

export default App

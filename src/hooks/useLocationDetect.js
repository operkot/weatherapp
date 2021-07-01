import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { locationActions } from 'store/location/location.slice'

const useLocationDetect = providedLocation => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (providedLocation) {
      dispatch(locationActions.detectByName(providedLocation))
    } else {
      dispatch(locationActions.detectByIP())
    }
  }, [dispatch, providedLocation])
}

export default useLocationDetect

import { useSelector } from 'react-redux'

import { formatedCurrentDate } from 'utils/date.utils'
import {
  getLocationName,
  getLocationStatus,
} from 'store/location/location.selectors'

import { LocationboxWrapper, LocationboxDate, LocationboxLabel } from './styles'

export const Locationbox = () => {
  const isLoading = useSelector(getLocationStatus)
  const locationName = useSelector(getLocationName)

  return (
    <LocationboxWrapper>
      <LocationboxDate>{formatedCurrentDate}</LocationboxDate>
      {isLoading ? (
        <LocationboxLabel>Обновление данных...</LocationboxLabel>
      ) : (
        <LocationboxLabel>{locationName}</LocationboxLabel>
      )}
    </LocationboxWrapper>
  )
}

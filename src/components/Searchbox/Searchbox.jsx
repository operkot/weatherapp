import { useDispatch, useSelector } from 'react-redux'

import { autocompleteActions } from 'store/autocomplete/autocomplete.slice'
import {
  getFormatedSuggestions,
  getAutocompleteStatus,
} from 'store/autocomplete/autocomplete.selectors'

import { SearchboxForm, SearchboxSelect } from './Searchbox.styles'

const SelectComponents = {
  DropdownIndicator: null,
}

export const Searchbox = () => {
  const isLoading = useSelector(getAutocompleteStatus)
  const suggestions = useSelector(getFormatedSuggestions)
  const disptch = useDispatch()

  const onChange = (data, { action }) => {
    if (action === 'select-option') {
      console.log(data)
    }

    if (action === 'clear') {
      disptch(autocompleteActions.inputReset())
    }
  }

  const onInputChange = (value, { action }) => {
    if (action !== 'input-change') return
    disptch(autocompleteActions.inputChanges(value))
  }

  return (
    <SearchboxForm>
      <SearchboxSelect
        components={SelectComponents}
        options={suggestions}
        classNamePrefix="SearchboxSelect"
        onChange={onChange}
        onInputChange={onInputChange}
        noOptionsMessage={() => null}
        loadingMessage={() => null}
        isLoading={isLoading}
        isClearable
        placeholder="Search"
      />
    </SearchboxForm>
  )
}

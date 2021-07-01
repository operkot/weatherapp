import styled from 'styled-components'
import CreatableSelect from 'react-select'

export const SearchboxForm = styled.form`
  color: #000;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`

export const SearchboxSelect = styled(CreatableSelect)`
  .SearchboxSelect__control {
    padding: 8px 12px;
    border: 0;
    border-radius: 8px;

    background-color: rgba(255, 255, 255, 0.5);
    color: #000;

    transition: background-color 0.35s ease;
  }

  .SearchboxSelect__control:hover,
  .SearchboxSelect__control--is-focused {
    border-color: transparent;
    background-color: rgba(255, 255, 255, 0.75);
    box-shadow: none;
  }

  .SearchboxSelect__placeholder {
    color: #000;
  }
`

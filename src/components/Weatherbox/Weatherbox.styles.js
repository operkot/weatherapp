import styled from 'styled-components'
import { WeatherIcon } from './Weatherbox.icons'

export const WeatherboxWrapper = styled.div`
  min-height: 162px;
  padding-top: 38px;
  padding-bottom: 38px;
  text-align: center;
`

export const WeatherboxTemp = styled.p`
  font-size: 48px;
  font-weight: 700;
  line-height: 1;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`

export const WeatherboxList = styled.ul`
  display: flex;
  justify-content: center;
`

export const WeatherboxListItem = styled.li`
  font-size: 14px;

  &:not(:last-child):after {
    content: '|';
    padding-right: 4px;
    padding-left: 4px;
  }
`

export const WeatherboxIcon = styled.img`
  width: 100%;
  max-width: 74px;
  max-height: 74px;
  margin-right: auto;
  margin-left: auto;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`

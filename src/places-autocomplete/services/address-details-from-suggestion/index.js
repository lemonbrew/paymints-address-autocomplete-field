/**
 * (franco.montenegro)
 * Some of the props returned by Google are not compliant with our formatter
 * rules (predefined by air ui), this is why we are disabling eslint in this file
 */

/* eslint-disable */

function firstAddressComponentFromSuggestion(googleSuggestion, types) {
  const emptyComponent = {}
  if (typeof googleSuggestion !== 'object') return emptyComponent

  const { address_components } = googleSuggestion
  if (typeof address_components !== 'object') return emptyComponent
  if (typeof address_components.find !== 'function') return emptyComponent

  const typeInRequiredTypes = type => types.includes(type)

  const addressWithAnyRequiredType = component => {
    if (typeof component !== 'object') return false

    const { types } = component
    if (typeof types !== 'object') return false
    if (typeof types.find !== 'function') return false

    return types.find(typeInRequiredTypes)
  }

  return address_components.find(addressWithAnyRequiredType) || emptyComponent
}

function addressFromSuggestion(googleSuggestion) {
  return googleSuggestion.formatted_address
}

function cityFromSuggestion(googleSuggestion) {
  const city = firstAddressComponentFromSuggestion(googleSuggestion, ['locality'])
  return city.long_name
}

function stateFromSuggestion(googleSuggestion) {
  const state = firstAddressComponentFromSuggestion(googleSuggestion, [
    'administrative_area_level_1',
    'administrative_area_level_2',
  ])
  return state.long_name
}

function zipFromSuggestion(googleSuggestion) {
  const zip = firstAddressComponentFromSuggestion(googleSuggestion, ['postal_code'])
  return zip.long_name
}

export default function addressDetailsFromSuggestion(googleSuggestion) {
  const address = addressFromSuggestion(googleSuggestion)
  const city = cityFromSuggestion(googleSuggestion)
  const state = stateFromSuggestion(googleSuggestion)
  const zip = zipFromSuggestion(googleSuggestion)
  return {
    address,
    city,
    state,
    zip,
  }
}

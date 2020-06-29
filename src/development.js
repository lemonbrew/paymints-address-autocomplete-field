import React from 'react'
import ReactDOM from 'react-dom'
import scriptLoader from 'react-async-script-loader'
import GOOGLE_MAPS_KEY from './google-maps-key'
import { PlacesAutocompleteAdvanced, PlacesAutocompleteSimple, PaymintsButton, BUTTON_TYPE } from './index'

const TestSimpleInput = () => (
  <div>
    Simple field:
    <PlacesAutocompleteSimple
      onChange={(address) => console.log('Simple change', address)}
    />
  </div>
)

const TestAdvancedInput = () => (
  <div>
    Advanced field:
    <PlacesAutocompleteAdvanced
      onChange={(addressComponents) => console.log('Advanced change', addressComponents)}
    />
  </div>
)

const Test = ({ isScriptLoadSucceed }) => (
  <>
    {!isScriptLoadSucceed && <div>There was an error loading Google maps</div>}
    {isScriptLoadSucceed && <TestAdvancedInput />}
    {isScriptLoadSucceed && <TestSimpleInput />}
    {isScriptLoadSucceed &&
      <PaymintsButton block pill noShadow type={BUTTON_TYPE.PRIMARY}>
        Request funds
      </PaymintsButton>
    }
  </>
)

const TestWithMaps = scriptLoader(
  `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_KEY}&libraries=places`
)(Test)

ReactDOM.render(<TestWithMaps />, document.getElementById('app'))

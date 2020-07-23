import React from 'react'
import ReactDOM from 'react-dom'
import scriptLoader from 'react-async-script-loader'
import GOOGLE_MAPS_KEY from './google-maps-key'
import { Select } from 'antd'
import {
  PlacesAutocompleteAdvanced,
  PlacesAutocompleteSimple,
  PaymintsButton,
  BUTTON_TYPE,
  PaymintsAlert,
  ALERT_TYPE,
  PaymintsCard,
  CARD_TYPE,
  PaymintsFileUpload,
  PaymintsIconButton,
  ICON_BUTTON_TYPE,
  PaymintsInput,
  PaymintsInputMask,
  MASK,
  PaymintsLabel,
  PaymintsSelect,
  PaymintsTable,
  PaymintsTag,
  PaymintsTextArea,
  PaymintsHarveyBall,
  BALL_TYPE,
  PaymintsCurrencyInput,
  PaymintsNumberFormat,
} from './index'

const TestSimpleInput = () => (
  <div>
    <br/>
    Simple field:
    <PlacesAutocompleteSimple
      onChange={(address) => console.log('Simple change', address)}
    />
    <br/>
  </div>
)

const TestAdvancedInput = () => (
  <div>
    <br/>
    Advanced field:
    <PlacesAutocompleteAdvanced
      onChange={(addressComponents) => console.log('Advanced change', addressComponents)}
    />
    <br/>
  </div>
)

const TestPaymintsButton = () => (
  <div>
    <br/>
    Paymints Button:
    <PaymintsButton block noShadow type={BUTTON_TYPE.BLUE}>
      Request funds
    </PaymintsButton>
    <br/>
  </div>
)

const TestPaymintsCard = () => (
  <div>
    <br/>
    Paymints Card:
    <PaymintsCard type={CARD_TYPE.PRIMARY}>
      Card
    </PaymintsCard>
    <br/>
  </div>
)

const TestPaymintsBall = () => (
  <div>
    <br/>
    Paymints Harvey Ball:
    <PaymintsHarveyBall type={BALL_TYPE.INACTIVE}>
      Inactive
    </PaymintsHarveyBall>
    <br/>
  </div>
)

const TestPaymintsFileUpload = () => (
  <div>
    <br/>
    Paymints File Upload:
    <PaymintsFileUpload onDropFiles={() => {}} textInfo="Drop Files here" />
    <br/>
  </div>
)

const TestPaymintsIconButton = () => (
  <div>
    <br/>
    Paymints Icon Button:
    <PaymintsIconButton type={ICON_BUTTON_TYPE.PRIMARY}>
      Link
    </PaymintsIconButton>
    <br/>
  </div>
)

const TestPaymintsInput = () => (
  <div>
    <br/>
    Paymints Input:
    <PaymintsInput value="Testing value" />
    <br/>
  </div>
)

const TestPaymintsInputMask = () => (
  <div>
    <br/>
    Paymints Input Mask:
    <PaymintsInputMask mask={MASK.US_PHONE} />
    <br/>
  </div>
)

const TestPaymintsLabel = () => (
  <div>
    <br/>
    Paymints Label:
    <PaymintsLabel label="First name" />
    <br/>
  </div>
)

const TestPaymintsSelect = () => (
  <div>
    <br/>
    Paymints Select:
    <PaymintsSelect placeholder="Testing" style={{ width: '100%' }} value="1">
      <Select.Option value="1">Option 1</Select.Option>
      <Select.Option value="2">Option 2</Select.Option>
    </PaymintsSelect>
    <br/>
  </div>
)

const TestPaymintsTable = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'title',
      render: (text, office) => <Link to={`/offices/${office.id}`}>{text}</Link>,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: 'Membership',
      dataIndex: 'membership',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ]

  return (
    <div>
      <br/>
      Paymints Table:
      <PaymintsTable columns={columns} />
      <br/>
    </div>
  )
}

const TestPaymintsTag = () => (
  <div>
    <br/>
    Paymints Tag:
    <PaymintsTag />
    <br/>
  </div>
)

const TestPaymintsTextArea = () => (
  <div>
    <br/>
    Paymints Text Area:
    <PaymintsTextArea />
    <br/>
  </div>
)

const TestPaymintsCurrencyInput = () => (
  <div>
    <br/>
    Paymints Currency Input:
    <PaymintsCurrencyInput />
    <br/>
  </div>
)

const TestPaymintsNumberFormat = () => (
  <div>
    <br/>
    Paymints Number Format:
    <PaymintsNumberFormat
      number={10}
      decimals={2}
      format="currency"
    />
  </div>
)

const Test = ({ isScriptLoadSucceed }) => (
  <>
    {isScriptLoadSucceed &&
      <PaymintsAlert type={ALERT_TYPE.SUCCESS}>
        <h5 className="d-inline font-weight-bold mr-3">{'Title Alert'}</h5>
        {'Alert example'}
      </PaymintsAlert>
    }
    {!isScriptLoadSucceed && <div>There was an error loading Google maps</div>}
    {isScriptLoadSucceed && <TestAdvancedInput />}
    {isScriptLoadSucceed && <TestSimpleInput />}
    {isScriptLoadSucceed && <TestPaymintsButton />}
    {isScriptLoadSucceed && <TestPaymintsCard />}
    {isScriptLoadSucceed && <TestPaymintsFileUpload />}
    {isScriptLoadSucceed && <TestPaymintsIconButton />}
    {isScriptLoadSucceed && <TestPaymintsInput />}
    {isScriptLoadSucceed && <TestPaymintsInputMask />}
    {isScriptLoadSucceed && <TestPaymintsLabel />}
    {isScriptLoadSucceed && <TestPaymintsSelect />}
    {isScriptLoadSucceed && <TestPaymintsTable />}
    {isScriptLoadSucceed && <TestPaymintsTag />}
    {isScriptLoadSucceed && <TestPaymintsTextArea />}
    {isScriptLoadSucceed && <TestPaymintsBall />}
    {isScriptLoadSucceed && <TestPaymintsCurrencyInput />}
    {isScriptLoadSucceed && <TestPaymintsNumberFormat />}
  </>
)

const TestWithMaps = scriptLoader(
  `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_KEY}&libraries=places`
)(Test)

ReactDOM.render(<TestWithMaps />, document.getElementById('app'))

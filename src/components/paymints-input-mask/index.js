import React from 'react'
import InputMask from 'react-input-mask'
import PaymintsInput from '../paymints-input'

const MASK = {
  US_PHONE: '999-999-9999',
}

export { MASK }

export default function PaymintsInputMask(props) {
  return <InputMask {...props}>{inputProps => <PaymintsInput {...inputProps} />}</InputMask>
}

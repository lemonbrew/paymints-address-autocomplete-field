import React, { useState } from 'react'
import { Tag } from 'antd'
import PaymintsButton, { BUTTON_TYPE } from '../paymints-button'
import PaymintsInput from '../paymints-input'
import PaymintsIconButton, { ICON_BUTTON_TYPE } from '../paymints-icon-button'

export default function PaymintsTag({ value, onChange }) {
  const valueAsArray = value && value.map ? value : []
  const [addingTag, setAddingTag] = useState(false)
  const [newTag, setNewTag] = useState('')
  const onCloseTag = closedTag => {
    const newTags = valueAsArray.filter(tag => tag !== closedTag)
    onChange(newTags)
  }
  const onAddTag = whichTag => {
    onChange([...valueAsArray, whichTag])
    setAddingTag(false)
    setNewTag('')
  }
  const tags = valueAsArray.map(tag => (
    <Tag key={tag} onClose={() => onCloseTag(tag)} closable>
      {tag}
    </Tag>
  ))
  const addPersonButton = (
    <PaymintsButton
      className="ml-2"
      type={BUTTON_TYPE.PRIMARY}
      noShadow
      onClick={() => setAddingTag(true)}
    >
      Add person
    </PaymintsButton>
  )
  const addPersonInput = (
    <div className="d-flex">
      <PaymintsInput
        type="text"
        value={newTag}
        onChange={e => setNewTag(e.target.value)}
        onPressEnter={() => onAddTag(newTag)}
      />
      <PaymintsIconButton
        className="ml-2"
        type={ICON_BUTTON_TYPE.PRIMARY}
        onClick={() => setAddingTag(false)}
      >
        <i className="fa fa-close" />
      </PaymintsIconButton>
    </div>
  )
  return (
    <>
      <div>{tags}</div>
      <div>
        {!addingTag && addPersonButton}
        {addingTag && addPersonInput}
      </div>
    </>
  )
}

import { AutoComplete } from 'antd'
import { useState } from 'react'

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
})

export function AntdDataInputCom() {
  const [value, setValue] = useState('')
  const [options, setOptions] = useState<{ value: string }[]>([])
  const onSelect = (data: string) => {
    console.log(`onSelect:${data}`)
  }
  const getPanelValue = (searchText: string) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]

  const onChange = (data: string) => {
    setValue(data)
  }

  return (
    <>
      <style>
        {`
        .mg-10 {
          margin-top: 10px;
        }
        `}
      </style>
      <div className="mg-10">
        <AutoComplete
          value={value}
          options={options}
          style={{ width: 200 }}
          onSelect={onSelect}
          onSearch={(text) => setOptions(getPanelValue(text))}
          onChange={onChange}
          placeholder="input here"
        ></AutoComplete>
      </div>
    </>
  )
}

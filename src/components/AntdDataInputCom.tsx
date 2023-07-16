import {
  AutoComplete,
  Cascader,
  Checkbox,
  ColorPicker,
  App,
  DatePicker,
} from 'antd'
import { useState } from 'react'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import type { ColorPickerProps } from 'antd/es/color-picker'

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
})

interface CascaderOption {
  value: string | number
  label: string
  children?: CascaderOption[]
}

const CascaderOptions: CascaderOption[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
]

const plainOptions = ['Apple', 'Pear', 'Orange']

export function AntdDataInputCom() {
  const [value, setValue] = useState('')
  const [colorValue, setColorValue] =
    useState<ColorPickerProps['value']>('#1677ff')
  const { message } = App.useApp()
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

  const checkboxChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`)
  }

  const { RangePicker } = DatePicker

  return (
    <>
      <style>
        {`
        .mgt-10 {
          margin-top: 10px;
        }
        .mgr-10{
          margin-right: 10px;
        }
        `}
      </style>
      <div className="mgt-10">
        <AutoComplete
          className="mgr-10"
          value={value}
          options={options}
          style={{ width: 200 }}
          onSelect={onSelect}
          onSearch={(text) => setOptions(getPanelValue(text))}
          onChange={onChange}
          placeholder="input here"
        ></AutoComplete>
        <Cascader
          className="mgr-10"
          options={CascaderOptions}
          placeholder="select Cascader"
          status="warning"
        ></Cascader>
        <Checkbox className="mgr-10" onChange={checkboxChange}>
          Checked
        </Checkbox>
        <Checkbox.Group
          options={plainOptions}
          defaultValue={['Apple']}
        ></Checkbox.Group>
      </div>
      <div className="mgt-10">
        <ColorPicker
          size="large"
          value={colorValue}
          onChangeComplete={(color) => {
            setColorValue(color)
            message.success(`The selected color is ${color.toHexString()}`)
          }}
        />
        <DatePicker />
        <RangePicker />
      </div>
    </>
  )
}

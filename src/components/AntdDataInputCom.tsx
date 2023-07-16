import { AutoComplete, Cascader } from 'antd'
import { useState } from 'react'

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
          options={CascaderOptions}
          placeholder="select Cascader"
          status="warning"
        ></Cascader>
      </div>
    </>
  )
}

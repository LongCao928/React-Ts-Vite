import {
  AutoComplete,
  Cascader,
  Checkbox,
  ColorPicker,
  App,
  DatePicker,
  Form,
  Input,
  Switch,
  Button,
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

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
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
      <div className="mgt-10">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item label="switch" name="switch">
            <Switch defaultChecked />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      {/** 数据录入
       * Input 输入框
          InputNumber 数字输入框
          Mentios 提及
          Radio 单选框
          Rate 评分
          Select 选择器
          Slider 滑动输入条
          Switch 开关
          TimePicker 时间选择器
          Transfer 穿梭框
          TreeSelect 树选择
          Upload 上传
        */}
      {/** 数据展示
       * Avatar 头像
       * Badge 徽标数
       * Calendar 日历
       */}
    </>
  )
}

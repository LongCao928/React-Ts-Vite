import { useState } from 'react'
import { ConfigProvider, DatePicker, message, Alert } from 'antd'
// antd 组件默认文案是英文，所以需要修改为中文
// 可以全局配置一次，也可以单个组件进行配置
import dayjs from 'dayjs'
// import * as dayjs from 'dayjs'
// import type { Dayjs } from 'dayjs'
import 'dayjs/locale/zh-cn'
import zhCN from 'antd/locale/zh_CN'
dayjs.locale('zh-cn')
export default function UseAntd() {
  const [date, setDate] = useState<dayjs>(null)
  const [messageApi, contextHolder] = message.useMessage()
  const handleChange = (value: dayjs) => {
    messageApi.info(
      `您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`
    )
    setDate(value)
  }
  return (
    <ConfigProvider locale={zhCN}>
      <div style={{ width: 400, margin: '100px auto' }}>
        <DatePicker onChange={handleChange} allowClear bordered />
        <div style={{ marginTop: 16 }}>
          {/* 当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'} */}
          <Alert
            message="当前日期"
            description={date ? date.format('YYYY年MM月DD日') : '未选择'}
          />
        </div>
      </div>
      {contextHolder}
    </ConfigProvider>
  )
}

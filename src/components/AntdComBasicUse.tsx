import { Button, Space } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
export default function AntdComBasicUse() {
  const handleButonClick = () => {
    console.log('危险')
  }
  return (
    <>
      <style>
        {`
          .compont-area {
            margin: 15px 0;
          }
        `}
      </style>
      <div className="compont-area">
        <Space align="start" size={10}>
          <Button type="primary">主按钮</Button>
          <Button>默认</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="text">Text</Button>
          <Button type="link">链接</Button>
          <Button icon={<SearchOutlined />}>Search Button</Button>
          <Button type="primary" danger onClick={handleButonClick}>
            危险
          </Button>
          <Button type="primary" loading disabled size="small" shape="round">
            loading
          </Button>
        </Space>
      </div>
      <div className="component-area"></div>
    </>
  )
}

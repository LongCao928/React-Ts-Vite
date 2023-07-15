import { Button, Space, Typography, Divider } from 'antd'
import {
  SearchOutlined,
  UsergroupAddOutlined,
  ChromeFilled,
  AlipayCircleFilled,
  UsbTwoTone,
  RedoOutlined,
  LoadingOutlined,
  HeartTwoTone,
  createFromIconfontCN, // 使用 iconfont 图标
} from '@ant-design/icons'

console.log('APP-NAME:' + import.meta.env.VITE_APP_NAME) // APP-NAME:REACT-TS-VITE
console.log(import.meta.env.VITE_APP_TITLE) // REACT$18.0

const Iconfont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_3387618_v2slvmt19r.js',
})

const { Title, Paragraph, Text, Link } = Typography

export default function AntdComBasicUse() {
  const handleButonClick = () => {
    console.log('危险')
  }
  return (
    <>
      <style>
        {`
          .component-area {
            margin: 15px 0;
            text-align: center;
          }
          .component-area span {
            margin: 0 10px;
          }
        `}
      </style>
      <div className="component-area">
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
      <div className="component-area">
        <UsergroupAddOutlined />
        <ChromeFilled />
        <AlipayCircleFilled />
        <UsbTwoTone />
        <RedoOutlined spin />
        <LoadingOutlined />
        <HeartTwoTone twoToneColor="#eb2f96" className="" />
        <Iconfont type="icon-youkachongzhi" />
      </div>
      <div className="component-area">
        <Typography>
          <Title>标题1</Title>
          <Paragraph>
            段落内容1 &nbsp;
            <Divider type="vertical" />
            <Link href="https://ant.design" target="_blank">
              Ant Design (Link)
            </Link>
          </Paragraph>
          <Divider>分割线</Divider>
          <Title level={2}>标题2</Title>
          <Paragraph>
            段落内容2
            <Divider type="vertical" />
            <Text code>code</Text>
            <Text keyboard>keyboard</Text>
            <Text delete>delete</Text>
            <Text underline>underline</Text>
            <Text disabled>disabled</Text>
            <Text type="success">success</Text>
          </Paragraph>
        </Typography>
      </div>
    </>
  )
}

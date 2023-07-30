import {
  Space,
  Col,
  Row,
  Layout,
  Anchor,
  Breadcrumb,
  Dropdown,
  MenuProps,
  Button,
  Menu,
  Pagination,
  Steps,
  message,
} from 'antd'
import { useState } from 'react'
import {
  HomeOutlined,
  UserOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import '@/styles/antd/antdComponent.less'

const { Header, Footer, Sider, Content } = Layout

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
}

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
}

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
}

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
}

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
]

const menuItems: MenuProps['items'] = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: 'alipay',
  },
]

const description = 'This is a description.'

export function AntdComponent() {
  const [current, setCurrent] = useState('mail')

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  const [messageApi, contextHolder] = message.useMessage()

  const showLoading = () => {
    messageApi.loading({
      content: 'loading...',
    })
  }
  return (
    <>
      {contextHolder}
      <Row>
        <Col span={24}>col 24</Col>
      </Row>
      <Row>
        <Col span={12}>col 12-1</Col>
        <Col span={12}>col 12-2</Col>
      </Row>
      <Row>
        <Col span={8}>col 8-1</Col>
        <Col span={8}>col 8-2</Col>
        <Col span={8}>col 8-3</Col>
      </Row>
      <Row>
        <Col span={6}>col 6-1</Col>
        <Col span={6}>col 6-2</Col>
        <Col span={6}>col 6-3</Col>
        <Col span={6}>col 6-4</Col>
      </Row>
      <div className="mg">
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
          <Layout>
            <Sider style={siderStyle}>Sider</Sider>
            <Layout>
              <Header style={headerStyle}>Header</Header>
              <Content style={contentStyle}>Content</Content>
              <Footer style={footerStyle}>Footer</Footer>
            </Layout>
          </Layout>
        </Space>
      </div>
      <div className="mg">
        <Row>
          <Col span={16}>
            <div
              id="part-1"
              style={{ height: '500px', background: 'lightpink' }}
            />
            <div
              id="part-2"
              style={{ height: '500px', background: 'lightgray' }}
            />
          </Col>
          <Col span={8}>
            <Anchor
              items={[
                {
                  key: 'part-1',
                  href: '#part-1',
                  title: 'Part 1',
                },
                {
                  key: 'part-2',
                  href: '#part-2',
                  title: 'Part 2',
                },
              ]}
            ></Anchor>
          </Col>
        </Row>
      </div>
      <div className="mg">
        <Breadcrumb
          items={[
            {
              href: '',
              title: <HomeOutlined />,
            },
            {
              href: '',
              title: (
                <>
                  <UserOutlined />
                  <span>Application List</span>
                </>
              ),
            },
            {
              title: 'Application',
            },
          ]}
        ></Breadcrumb>
      </div>
      <div className="mg">
        <Dropdown
          menu={{ items }}
          placement="bottomLeft"
          arrow={{ pointAtCenter: true }}
        >
          <Button>bottomLeft</Button>
        </Dropdown>
        <Dropdown menu={{ items }} placement="bottom" arrow>
          <Button>bottom</Button>
        </Dropdown>
        <Dropdown menu={{ items }} placement="bottomRight" arrow>
          <Button>bottomRight</Button>
        </Dropdown>
        <Dropdown menu={{ items }} placement="topLeft" arrow>
          <Button>topLeft</Button>
        </Dropdown>
        <Dropdown menu={{ items }} placement="top" arrow>
          <Button>top</Button>
        </Dropdown>
        <Dropdown menu={{ items }} placement="topRight" arrow>
          <Button>topRight</Button>
        </Dropdown>
      </div>
      {/* Menu导航 Pagination分页 Steps步骤条 */}
      <div className="mg">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={menuItems}
        />
      </div>
      <div className="mg">
        <Pagination
          total={85}
          showSizeChanger
          showQuickJumper
          showTotal={(total) => `Total ${total} items`}
        ></Pagination>
      </div>
      <div className="mg">
        <Steps
          size="small"
          direction="vertical"
          current={1}
          items={[
            {
              title: 'Finished',
              description,
            },
            {
              title: 'In Progress',
              description,
              subTitle: 'Left 00:00:08',
            },
            {
              title: 'Waiting',
              description,
            },
          ]}
        ></Steps>
      </div>
      <Button onClick={showLoading}>loading</Button>
    </>
  )
}

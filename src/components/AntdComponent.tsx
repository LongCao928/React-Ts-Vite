import { Space, Col, Row, Layout, Anchor } from 'antd'
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

export function AntdComponent() {
  return (
    <>
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
    </>
  )
}

import { Col, Row } from 'antd'
import '@/styles/antd/antdComponent.less'

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
    </>
  )
}

import React from 'react';
import { Row, Col } from 'antd';
import classnames from 'classnames';
import { CloseCircleOutlined } from '@ant-design/icons';

import './windowError.scss';

export const WindowError = ({ message, status, ...props }) => {
  return (
    <Row>
      <Col span={9}></Col>
      <Col span={6}>
        <section className={classnames({ "error-warning": !status, "error-no-warning": status })}>
          <div className="error__message">
            <span>
              <CloseCircleOutlined style={{ color: "#fffffff", fontSize: "27px", padding: "5px" }} />
              {message}
            </span>
          </div>
        </section>
      </Col>
      <Col span={9}></Col>
    </Row>
  )
}

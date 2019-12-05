import React, { Component } from 'react'
import { ConfigProvider, DatePicker, message } from 'antd'

class demo2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null
    }
  }

  handleChange = date => {
    message.info(`您选择的日期是: ${date ? date.format('YYYY-MM-DD') : '未选择'}`);
    this.setState({ date : date });
  }

  render() {
    return (
      <ConfigProvider>
        <div style={{ width: 400, margin: '100px auto' }}>
          <DatePicker onChange={this.handleChange} />
          <div style={{ marginTop: 20 }}>
            当前日期：{this.state.date ? this.state.date.format('YYYY-MM-DD') : '未选择'}
          </div>
        </div>
      </ConfigProvider>
    );
  }
}

export default demo2;
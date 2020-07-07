// logs.ts
// const util = require('../../utils/util.js')
import { formatTime } from '../../util/util';//'../../util/util'

Page({
  data: {
    logs: [],
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map((log: string) => {
        return formatTime(new Date(log))
      }),
    })
  },
})

import * as $ from '@/api/api'

const user = {
  state: {
    userInfo: {},
    address: ''
  },
  mutations: {
    setUserInfo: (state, data) => {
      state.userInfo = data
    }
  },
  actions: {
    async getAddress (context,req) {
      const res = await $.getAddress(req)
      context.state.address = res.result.address_component.district
    }
  }
}

export default user

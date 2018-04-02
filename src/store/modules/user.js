import * as $ from '@/api/api'

const user = {
  state: {
    userInfo: {},
    address: '',
    position: [],
  },
  mutations: {
    setUserInfo: (state, data) => {
      state.userInfo = data
    }
  },
  actions: {
    async getAddress (context,req) {
      context.state.position = req
      const res = await $.getAddress(`${req[0]},${req[1]}`)
      context.state.address = res.result.address_component.district
    }
  }
}

export default user

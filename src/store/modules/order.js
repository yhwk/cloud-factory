import * as $ from '@/api/api'

const order = {
  state: {},
  actions: {
    async publish (context,req) {
      const res = await $.publish(req)
    }
  }
}

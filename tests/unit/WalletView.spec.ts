import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import WalletView from '@/views/WalletView.vue'
import Buefy from 'buefy'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(Buefy)
localVue.use(VueRouter)

describe('WalletView.vue', () => {
  it('should render correct contents', () => {
    const wallet = {
      name: 'Main Account',
      amount: 123,
      color: 'blue'
    }

    const wrapper = shallowMount(WalletView, {
      localVue,
      propsData: {
        wallet
      }
    })

    expect(wrapper.text()).to.include(wallet.name)
  })
})

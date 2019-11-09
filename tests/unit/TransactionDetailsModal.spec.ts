import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import sinon from 'sinon'
import TransactionDetailsModal from '@/components/modals/TransactionDetailsModal.vue'

describe('TransactionDetailsModal.vue', () => {
  it('should render correct contents', () => {
    const transaction = {
      txid: 'fb6786d19c94c6766d1caa454b65af849c042c00e379b08cfc5a092f6ba85439',
      confirmations: 2705,
      time: 1572380947,
      action: 'sent',
      amount: 10000000,
      outputs: [
        {
          address: 'D8tF73Fd56BgsGGxe9ZQP4v3amU4cMxyMT',
          amount: 10000000,
          message: null
        }
      ]
    }

    const $electron = { remote: { app: { getLocale: () => 'nl' } } }
    const wrapper = shallowMount(TransactionDetailsModal, {
      propsData: {
        transaction
      },
      mocks: {
        $electron
      }
    })

    expect(wrapper.text()).to.include(transaction.txid)
    expect(wrapper.text()).to.include(transaction.confirmations)
    expect(wrapper.text()).to.include(transaction.action)
  })

  it('should open the tx address in a explorer', () => {
    const transaction = {
      txid: 'fb6786d19c94c6766d1caa454b65af849c042c00e379b08cfc5a092f6ba85439',
      confirmations: 2705,
      time: 1572380947,
      action: 'sent',
      amount: 10000000,
      outputs: [
        {
          address: 'D8tF73Fd56BgsGGxe9ZQP4v3amU4cMxyMT',
          amount: 10000000,
          message: null
        }
      ]
    }

    const openExternal = sinon.stub()
    const $electron = { shell: { openExternal }, remote: { app: { getLocale: () => 'nl' } } }
    const wrapper = shallowMount(TransactionDetailsModal, {
      propsData: {
        transaction
      },
      mocks: {
        $electron
      }
    })

    wrapper.find('#show-address-details').trigger('click')

    // eslint-disable-next-line no-unused-expressions
    expect(openExternal.called).to.be.true
  })

  it('should open the tx id in a explorer', () => {
    const transaction = {
      txid: 'fb6786d19c94c6766d1caa454b65af849c042c00e379b08cfc5a092f6ba85439',
      confirmations: 2705,
      time: 1572380947,
      action: 'sent',
      amount: 10000000,
      outputs: [
        {
          address: 'D8tF73Fd56BgsGGxe9ZQP4v3amU4cMxyMT',
          amount: 10000000,
          message: null
        }
      ]
    }

    const openExternal = sinon.stub()
    const $electron = { shell: { openExternal }, remote: { app: { getLocale: () => 'nl' } } }
    const wrapper = shallowMount(TransactionDetailsModal, {
      propsData: {
        transaction
      },
      mocks: {
        $electron
      }
    })

    wrapper.find('#show-txid-details').trigger('click')

    // eslint-disable-next-line no-unused-expressions
    expect(openExternal.called).to.be.true
  })
})

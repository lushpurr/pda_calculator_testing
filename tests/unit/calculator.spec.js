import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })

  // add() - add 1 to 4 and get 5
  it('should be able to add two numbers', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('1');
    expect(wrapper.vm.runningTotal).to.equal(5)
  })

  // subtract() subtract 4 from 7 and get 3
  it('should be able to subtract number', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  // multiply() - multiply 3 by 5 and get 15
  it('should be able to multiply', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15)
  })
  // divide() - divide 21 by 7 and get 3
  it('should be able to divide', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })
// numberClick() - concatenate multiple number button clicks
it('should be able to concatenate multiple number button clicks', () => {
  const wrapper = shallowMount(App)
  wrapper.vm.runningTotal = 0
  wrapper.vm.newTotal = true
  wrapper.vm.numberClick('7');
  wrapper.vm.numberClick('2');
  wrapper.vm.numberClick('3');
  expect(wrapper.vm.runningTotal).to.equal(723)
})
// operatorClick() - chain multiple operations together
it('should be able to chain multiple operations together', () => {
  const wrapper = shallowMount(App)
  wrapper.vm.previousTotal = 1
  wrapper.vm.previousOperator = '+'
  wrapper.vm.numberClick('8');
  wrapper.vm.operatorClick('*');
  wrapper.vm.numberClick('2');
  wrapper.vm.operatorClick('=');
 expect(wrapper.vm.runningTotal).to.equal(18)
})

// clearClick() - clear the running total without affecting the calculation


})





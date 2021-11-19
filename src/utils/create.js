// 1.声明一个函数create
// 2.将传入组件配置转化为构造函数
// 3.将创建组件实例手动挂载到body
import Vue from 'vue'
export default function create(Component,props){
  // 1.转换组件的构造函数
  // 1.1 Vue.extend(Comp)
  // 1.2 new Vue({render：h=>h(Comp)})
  console.log(Component);
  const Ctor=Vue.extend(Component)
  const comp =new Ctor({
    propsData:props
  })
  // 2挂载
  comp.$mount() //只挂载: vdom => dom
  // 挂载之后$el填充了
  // 手动追加之body
  document.body.appendChild(comp.$el)
  comp.remove=function(){
    document.body.removeChild(comp.$el)
    comp.$destroy()
  }
  return comp
}
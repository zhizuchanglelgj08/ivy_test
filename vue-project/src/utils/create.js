//创建指定组件实例，挂在body上
import Vue from 'vue'
export default function create(Component,props){
    //创建组件实例
    //方式1，： Vue.extend(Component)
    // let Vue = Vue.extend({
    //     render(h) {
    //       return h(Component, {props})
    //     }
    //   })
    //   let vm = new Vue()
    //方式2，通过new Vue()
    const vm = new Vue({
        render(createElement){
            //render函数给我们提供一个createElement函数，他可以渲染VNode
            return createElement(Component,{props})
        }
    }).$mount();//更新操作，$mount后会在vm中生成$el，但不挂载到dom中,写$('#app')也可以执行下面代码，
    //这样可以按需生成 执行挂载函数，但未指定挂载目标，表示只执行初始化工作
    //手动挂载说明
    //1.当vm中没有$el时，说明vm并没有挂载到某个dom中
    //假如需要延迟挂载，可以在之后手动调用vm.$mount('#app')方法来挂载

    //方式三
      // 组件构造函数如何获取？
    //   // 1. Vue.extend()
    //   const Ctor = Vue.extend(Component)
    //   // 创建组件实例
    //   const vm = new Ctor({ propsData: props })


    console.log('vm',vm)
    //1.在vm上创建一个组件实例
    //2.通过$children获取该组件实例
        //当前vm中只有一个组件，就是创建的这个
    const comp = vm.$children[0]
    
    //3追加至body
    document.body.appendChild(comp.$el)
    //4.清理函数
    comp.remove = ()=>{
        document.body.removeChild(vm.$el)
        console.log('remove')
        vm.$destroy()
    }
    return comp
}
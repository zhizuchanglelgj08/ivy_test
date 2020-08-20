//创建指定组件实例，挂在body上
import Vue from 'vue'
export default function create(Component,props){
    //创建组件实例
    //方式1，通过Vue.extend({})创建组件实例
    //const Ctor = Vue.extend({})
    //方式2，通过new Vue()
    const vm = new Vue({
        render(createElement){
            //render函数给我们提供一个createElement函数，他可以渲染VNode
            return createElement(Component,{props})
        }
    }).$mount();//更新操作，参数为空时 ，只是渲染成一个dom不挂载
    //1.上面vm帮我们创建组件实例
    //2.通过$children获取该组件实例
        //当前vm中只有一个组件，就是创建的这个
    const comp = vm.$children[0]
    //3追加至body
    document.body.appendChild(comp.$el)
    //4.清理函数
    comp.remove = ()=>{
        document.body.removeChild(vm.$el)
        vm.$destroy()
    }
    return comp
}
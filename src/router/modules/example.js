import SubExample from '@/views/example/sub-example';
import SubExample2 from '@/views/example/sub-example2';

/**
 * 首页路由配置
 */
export default {
  path: '/home/example',
  name: 'example',
  meta: {
    label: '实例',
    icon: 's-grid'
  },
  component: {
    render: (h) => h('router-view')
  },
  redirect: '/home/example/sub-example1',
  children: [
    {
      path: '/home/example/sub-example1',
      name: 'sub-example1',
      component: SubExample,
      meta: {
        label: '实例1',
        icon: 'document'
      }
    },
    {
      path: '/home/example/sub-example2',
      name: 'sub-example2',
      component: SubExample2,
      meta: {
        label: '实例2',
        icon: 'document'
      }
    }
  ]
};

import ServiceIndex from '@/views/service/ServiceIndex.vue'
import ServiceHome from '@/views/service/ServiceHome'
import ServiceDeploy from './parts/ServiceDeploy'
import ServiceEnv from './parts/ServiceEnv'
import ServiceDestroy from './parts/ServiceDestroy'
import ServiceDomains from './parts/ServiceDomains'
import ServiceHeaders from './parts/ServiceHeaders'
import ServiceLogs from './parts/ServiceLogs'
import ServiceNetwork from './parts/ServiceNetwork'
import ServiceRedirects from './parts/ServiceRedirects'
import ServiceIntegration from './parts/ServiceIntegration'
export default {
    path: '/service/:service',
    component: ServiceIndex,
    children: [
        {
            path: '',
            name: 'ServiceHome',
            component: ServiceHome
        },
        {
            path: 'build',
            name: 'ServiceDeploy',
            component: ServiceDeploy
        },
        {
            path: 'env',
            name: 'ServiceEnv',
            component: ServiceEnv
        },
        {
            path: 'destroy',
            name: 'ServiceDestroy',
            component: ServiceDestroy
        },
        {
            path: 'domains',
            name: 'ServiceDomains',
            component: ServiceDomains
        },
        {
            path: 'headers',
            name: 'ServiceHeaders',
            component: ServiceHeaders
        },
        {
            path: 'logs',
            name: 'ServiceLogs',
            component: ServiceLogs
        },
        {
            path: 'network',
            name: 'ServiceNetwork',
            component: ServiceNetwork
        },
        {
            path: 'redirects',
            name: 'ServiceRedirects',
            component: ServiceRedirects
        },
        {
            path: 'integration',
            name: 'ServiceIntegration',
            component: ServiceIntegration
        }
    ]
}
import { App } from 'vue'
import chooseIcon from './chooseIcon'
import chooseArea from './chooseArea'
import trend from './trend'
import notification from './notification'
import list from './list'

const components = [
    chooseIcon,
    chooseArea,
    trend,
    notification,
    list
]

export default {
    install(app: App) {
        components.map(item => {
            app.use(item)
        })
    }
}
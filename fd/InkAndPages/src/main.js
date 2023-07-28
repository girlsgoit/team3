
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import MostPopularReviewsContainer from './components/MostPopularReviewsContainer.vue';


const app = createApp(App)
app.component('MostPopularReviewsContainer', MostPopularReviewsContainer);


app.use(router)

app.mount('#app')

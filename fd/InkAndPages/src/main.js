
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import MostPopularReviewsContainer from './components/MostPopularReviewsContainer.vue';
import DidYouKnow from "./components/DidYouKnow.vue";
import Books from "./components/Books.vue"
import ChooseByGeanres from "./components/ChooseByGeanres.vue"


const app = createApp(App)
app.component('MostPopularReviewsContainer', MostPopularReviewsContainer);
app.component('DidYouKnow', DidYouKnow )
app.component('Books', Books)
app.component('ChooseByGeanres', ChooseByGeanres)
app.use(router)

app.mount('#app')

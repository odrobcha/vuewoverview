import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);
import CoachDetail from "@/pages/coaches/CoachDetail";
import CoachesList from "@/pages/coaches/CoachesList";
import CoachRegistration from "@/pages/coaches/CoachRegistration";
import ContactCoach from "@/pages/requests/ContactCoach";
import RequestsReceived from "@/pages/requests/RequestsReceived";
import UserAuth from "@/pages/auth/UserAuth";
import NotFound from "@/pages/NotFound";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', redirect : '/coaches'},
        {path: '/coaches', component: CoachesList},
        {
            path: '/coaches/:id',
            component: CoachDetail,
            props: true,
            children :[
                {path: 'contact', component: ContactCoach}, // /coaches/id/contact
            ]},
        {path: '/register', component: CoachRegistration},
        {path: '/requests', component: RequestsReceived},
        {path: '/auth', component: UserAuth},
        {path: '/:notFound(.*)', component: NotFound}, //to handle any other routs entered in address line to show the error

    ],
});

export default router;
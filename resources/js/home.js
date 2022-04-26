Vue.component('post-media', require('./components/PostMedia.vue').default);
Vue.component('post-small-media', require('./components/PostSmallMedia.vue').default);
Vue.component('post-card', require('./components/PostCard.vue').default);
Vue.component('category-card', require('./components/CategoryCard.vue').default);
new Vue({
    el: '#app_bro_bug',
    data() {
        return {
            slider_loaded: false,
            sliders: [
                {
                    category: 'Business',
                    date: 'July 2, 2020',
                    category_link: '#',
                    link: '#',
                    title: 'Your most unhappy customers are your greatest source of learning.',
                    content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
                    img: 'https://preview.colorlib.com/theme/magdesign/images/xpost_lg_4.jpg.pagespeed.ic.hSr_aHpE_J.webp',
                    user: {
                        name: 'BROBUG Admin',
                        role: 'Admin, 26 published post',
                        img: 'https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp'
                    }
                },
                {
                    category: 'Business',
                    date: 'July 2, 2020',
                    category_link: '#',
                    link: '#',
                    title: 'Your most unhappy customers are your greatest source of learning.',
                    content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
                    img: 'https://preview.colorlib.com/theme/magdesign/images/xpost_lg_4.jpg.pagespeed.ic.hSr_aHpE_J.webp',
                    user: {
                        name: 'BROBUG Admin',
                        role: 'Admin, 26 published post',
                        img: 'https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp'
                    }
                },
                {
                    category: 'Business',
                    date: 'July 2, 2020',
                    category_link: '#',
                    link: '#',
                    title: 'Your most unhappy customers are your greatest source of learning.',
                    content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
                    img: 'https://preview.colorlib.com/theme/magdesign/images/xpost_lg_4.jpg.pagespeed.ic.hSr_aHpE_J.webp',
                    user: {
                        name: 'BROBUG Admin',
                        role: 'Admin, 26 published post',
                        img: 'https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp'
                    }
                },
            ],
            cards: [
                {
                    category: 'Business',
                    date: 'July 2, 2020',
                    category_link: '#',
                    link: '#',
                    title: 'Your most unhappy customers are your greatest source of learning.',
                    content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
                    img: 'https://preview.colorlib.com/theme/magdesign/images/xpost_lg_4.jpg.pagespeed.ic.hSr_aHpE_J.webp',
                    user: {
                        name: 'BROBUG Admin',
                        role: 'Admin, 26 published post',
                        img: 'https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp'
                    }
                },
                {
                    category: 'Business',
                    date: 'July 2, 2020',
                    category_link: '#',
                    link: '#',
                    title: 'Your most unhappy customers are your greatest source of learning.',
                    content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
                    img: 'https://preview.colorlib.com/theme/magdesign/images/xpost_lg_4.jpg.pagespeed.ic.hSr_aHpE_J.webp',
                    user: {
                        name: 'BROBUG Admin',
                        role: 'Admin, 26 published post',
                        img: 'https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp'
                    }
                },
                {
                    category: 'Business',
                    date: 'July 2, 2020',
                    category_link: '#',
                    link: '#',
                    title: 'Your most unhappy customers are your greatest source of learning.',
                    content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
                    img: 'https://preview.colorlib.com/theme/magdesign/images/xpost_lg_4.jpg.pagespeed.ic.hSr_aHpE_J.webp',
                    user: {
                        name: 'BROBUG Admin',
                        role: 'Admin, 26 published post',
                        img: 'https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp'
                    }
                },
                {
                    category: 'Business',
                    date: 'July 2, 2020',
                    category_link: '#',
                    link: '#',
                    title: 'Your most unhappy customers are your greatest source of learning.',
                    content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
                    img: 'https://preview.colorlib.com/theme/magdesign/images/xpost_lg_4.jpg.pagespeed.ic.hSr_aHpE_J.webp',
                    user: {
                        name: 'BROBUG Admin',
                        role: 'Admin, 26 published post',
                        img: 'https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp'
                    }
                },
                {
                    category: 'Business',
                    date: 'July 2, 2020',
                    category_link: '#',
                    link: '#',
                    title: 'Your most unhappy customers are your greatest source of learning.',
                    content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
                    img: 'https://preview.colorlib.com/theme/magdesign/images/xpost_lg_4.jpg.pagespeed.ic.hSr_aHpE_J.webp',
                    user: {
                        name: 'BROBUG Admin',
                        role: 'Admin, 26 published post',
                        img: 'https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp'
                    }
                },
                {
                    category: 'Business',
                    date: 'July 2, 2020',
                    category_link: '#',
                    link: '#',
                    title: 'Your most unhappy customers are your greatest source of learning.',
                    content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
                    img: 'https://preview.colorlib.com/theme/magdesign/images/xpost_lg_4.jpg.pagespeed.ic.hSr_aHpE_J.webp',
                    user: {
                        name: 'BROBUG Admin',
                        role: 'Admin, 26 published post',
                        img: 'https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp'
                    }
                },
                {
                    category: 'Business',
                    date: 'July 2, 2020',
                    category_link: '#',
                    link: '#',
                    title: 'Your most unhappy customers are your greatest source of learning.',
                    content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
                    img: 'https://preview.colorlib.com/theme/magdesign/images/xpost_lg_4.jpg.pagespeed.ic.hSr_aHpE_J.webp',
                    user: {
                        name: 'BROBUG Admin',
                        role: 'Admin, 26 published post',
                        img: 'https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp'
                    }
                },
                {
                    category: 'Business',
                    date: 'July 2, 2020',
                    category_link: '#',
                    link: '#',
                    title: 'Your most unhappy customers are your greatest source of learning.',
                    content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
                    img: 'https://preview.colorlib.com/theme/magdesign/images/xpost_lg_4.jpg.pagespeed.ic.hSr_aHpE_J.webp',
                    user: {
                        name: 'BROBUG Admin',
                        role: 'Admin, 26 published post',
                        img: 'https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp'
                    }
                },
                {
                    category: 'Business',
                    date: 'July 2, 2020',
                    category_link: '#',
                    link: '#',
                    title: 'Your most unhappy customers are your greatest source of learning.',
                    content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
                    img: 'https://preview.colorlib.com/theme/magdesign/images/xpost_lg_4.jpg.pagespeed.ic.hSr_aHpE_J.webp',
                    user: {
                        name: 'BROBUG Admin',
                        role: 'Admin, 26 published post',
                        img: 'https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp'
                    }
                },
                {
                    category: 'Business',
                    date: 'July 2, 2020',
                    category_link: '#',
                    link: '#',
                    title: 'Your most unhappy customers are your greatest source of learning.',
                    content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
                    img: 'https://preview.colorlib.com/theme/magdesign/images/xpost_lg_4.jpg.pagespeed.ic.hSr_aHpE_J.webp',
                    user: {
                        name: 'BROBUG Admin',
                        role: 'Admin, 26 published post',
                        img: 'https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp'
                    }
                },
            ],
            categories: [
                {
                    link: '#',
                    title: 'Sports',
                    count: '20 posts',
                },
                {
                    link: '#',
                    title: 'Sports',
                    count: '20 posts',
                },
                {
                    link: '#',
                    title: 'Sports',
                    count: '20 posts',
                },
                {
                    link: '#',
                    title: 'Sports',
                    count: '20 posts',
                },
                {
                    link: '#',
                    title: 'Sports',
                    count: '20 posts',
                },
            ]
        };
    },
    mounted() {
        this.slider_loaded = true;
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    }
});

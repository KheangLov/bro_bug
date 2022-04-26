@extends('layouts.app')

@section('content')
    <section class="py-5">
        <div :class="`container${slider_loaded ? '' : ' loading-skeleton'}`">
            <h2 class="text-center fs-2 fw-bolder mb-5">
                Feature
            </h2>
            <div id="feature-posts-slider" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button
                        v-for="(v, k) in sliders.length"
                        type="button"
                        data-bs-target="#feature-posts-slider"
                        :data-bs-slide-to="k"
                        :class="k === 0 ? 'active' : ''"
                        aria-current="true"
                        :aria-label="`Slide ${k}`"
                        :key="k"
                    ></button>
                </div>
                <div class="carousel-inner">
                    <div
                        v-for="({
                            category,
                            date,
                            title,
                            content,
                            user,
                            img,
                            category_link,
                            link
                        }, k) in sliders"
                        :class="`carousel-item${k === 0 ? ' active' : ''}`"
                        data-bs-interval="5000"
                        :key="k"
                    >
                        <post-media
                            :category="category"
                            :date="date"
                            :title="title"
                            :content="content"
                            :user="user"
                            :img="img"
                            :category_link="category_link"
                            :link="link"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-5">
        <div class="container">
            <div class="row g-5">
                <div
                    v-for="({
                        category,
                        date,
                        title,
                        content,
                        user,
                        img,
                        category_link,
                        link
                    }, k) in cards"
                    class="col-md-6 col-lg-4"
                    v-if="k < 9"
                    :key="k"
                >
                    <post-card
                        :category="category"
                        :date="date"
                        :title="title"
                        :content="content"
                        :user="user"
                        :img="img"
                        :category_link="category_link"
                        :link="link"
                    />
                </div>
            </div>
        </div>
    </section>
    <section class="py-5 bg-light bg-gradient">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6">
                    <h2 class="fs-4 fw-bold mb-4">
                        <a href="#" class="text-dark text-decoration-none">
                            Sports
                        </a>
                    </h2>
                    <div
                        v-for="({
                            category,
                            date,
                            title,
                            user,
                            img,
                            category_link,
                            link
                        }, k) in sliders"
                        class="mb-4"
                    >
                        <post-small-media
                            :category="category"
                            :date="date"
                            :title="title"
                            :user="user"
                            :img="img"
                            :category_link="category_link"
                            :link="link"
                        />
                    </div>
                </div>
                <div class="col-lg-6">
                    <h2 class="text-dark fs-4 fw-bold mb-4">
                        <a href="#" class="text-dark text-decoration-none">
                            Sports
                        </a>
                    </h2>
                    <div
                        v-for="({
                            category,
                            date,
                            title,
                            user,
                            img,
                            category_link,
                            link
                        }, k) in sliders"
                        class="mb-4"
                    >
                        <post-small-media
                            :category="category"
                            :date="date"
                            :title="title"
                            :user="user"
                            :img="img"
                            :category_link="category_link"
                            :link="link"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

@push('after_scripts')
    <script src="{{ asset('js/home.js') . '?v=' . config('backpack.base.cachebusting_string') }}"></script>
@endpush

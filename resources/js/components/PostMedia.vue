<template>
    <div class="d-block d-lg-flex align-items-center">
        <div class="flex-shrink-1 me-lg-5">
            <img
                :src="img"
                :alt="img"
                class="img-fluid rounded-3 mb-4"
            >
        </div>
        <div class="w-100 post-content">
            <div class="post-meta mb-3 text-muted">
                <a :href="category_link" class="category fw-bold text-decoration-none text-dark">
                    {{ category }}
                </a>
                —
                <span class="date">
                    {{ date }}
                </span>
            </div>
            <h2
                class="heading-media fs-1 fw-bold"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                :title="title"
            >
                <a :href="link" class="text-decoration-none text-dark">
                    {{ title }}
                </a>
            </h2>
            <p class="text-muted content-media">
                {{ content }}
            </p>
            <a href="#" class="post-author d-flex align-items-center text-decoration-none">
                <div
                    class="author-pic rounded-circle bg-white me-2"
                    :style="`background-image: url(${user.img})`"
                >
                </div>
                <div class="text-muted">
                    <strong class="fw-bold text-dark d-block">{{ user.name }}</strong>
                    <span>{{ user.role }}</span>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['category', 'date', 'title', 'content', 'user', 'img', 'category_link', 'link'],
    }
</script>

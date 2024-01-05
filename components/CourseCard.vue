<script setup lang="ts">
import type { Course } from '~/data/courses';

defineProps<{
    course: Course;
}>();
</script>

<template>
    <a target="_blank" :href="course.link" class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img :src="course.image" :alt="course.name" /></figure>
    </a>
</template>
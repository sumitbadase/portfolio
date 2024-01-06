<script setup lang="ts">
import { allCourses } from '~/data/courses';

useSeoMeta({
    title: 'Skills by Sumit',
    description: 'Learn programming skills with Sumit Badase, software engineer with 2+ YOE working on high-throughput applications.',
})
</script>

<template>
    <section class="mt-16 mx-12">
        <div class="flex-col lg:flex lg:flex-row-reverse">
            <img src="/cover.jpg" class="max-w-sm rounded-lg shadow-2xl h-56 lg:h-96 my-6 lg:my-0" />
            <div>
                <h1 class="text-5xl font-bold font-primary">Hey, I am Sumit. 👋</h1>
                <p class="py-6 font-secondary">
                    I am a software engineer and a passionate programmer.
                    <br><br>
                    I completed my engineering in 2022 from College of Engineering, Pune.
                    Since then, I am on a quest to educate <span class="text-secondary font-bold">10,000</span> students to
                    become amazing engineers who solve problems and benefit humanity.
                    <br><br>
                    Come join me in this journey, get started.
                </p>
                <div class="flex justify-start space-x-2">
                    <a target="_blank" href="https://sumitbadase.graphy.com/courses" class="btn btn-outline btn-neutral">Explore Courses</a>
                    <a target="_blank" href="https://www.linkedin.com/in/sumit-badase/" class="btn btn-neutral btn-active">
                        <Icon name="mdi:linkedin" class="h-4 w-4 md:h-5 md:w-5" /> Let's Connect
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section class="mt-16 w-full px-12">
        <div class="font-primary font-bold text-3xl">
            Courses I Offer
        </div>
        <div class="w-1/12 border-b-4 border-black h-1 mt-4" />
        <div class="grid grid-cols-1 gap-10 my-6 lg:grid-cols-4">
            <CourseCard v-for="course in allCourses" :key="course.id" :course="course" />
        </div>
    </section>
    <section class="mt-16 w-full px-12">
        <div class="font-primary font-bold text-3xl">
            Past Experience
        </div>
        <div class="w-1/12 border-b-4 border-black h-1 my-4" />
        <Timeline/>
    </section>
    <section class="font-secondary bg-base-300 pt-32 pb-16 mt-32 flex w-full items-center justify-center">
        <div class=" text-center">
            Made with ❤️<br>
            Copyright &copy; Sumit Badase. All Rights Reserved.
        </div>
    </section>
</template>
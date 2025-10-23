<script setup lang="ts">
import { allCourses } from '~/data/courses';

useSeoMeta({
    title: 'Skills by Sumit',
    description: 'Learn programming skills with Sumit Badase, Senior software engineer with 4+ YOE working on high-throughput applications.',
})
</script>

<template>
    <section class="mt-16 mx-12">
        <div class="flex-col lg:flex lg:flex-row-reverse">
            <img src="/cover.jpg" class="max-w-sm rounded-lg shadow-2xl h-56 lg:h-96 my-6 lg:my-0" />
            <div>
                <h1 class="text-5xl font-bold font-primary">Hey, I am Sumit. 👋</h1>
                <p class="py-6 font-secondary">
                    I am a Senior software engineer and a passionate programmer.
                    <br><br>
                    I completed my engineering in 2022 from College of Engineering, Pune and Executive MBA from IIM Indore in 2025.
                    Since then, I am on a quest to educate <span class="text-secondary font-bold">10,000</span> students to
                    become amazing engineers who solve problems and benefit humanity.
                    <br><br>
                    Come join me in this journey, get started.
                </p>
                <div class="flex justify-start space-x-2">
                    <a target="_blank" href="https://learn.skillsbysumit.com/" class="btn btn-outline btn-neutral">Explore Courses</a>
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
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            <CourseCard v-for="course in allCourses" :key="course.id" :course="course" />
        </div>
    </section>
    <!-- Premium Services Section Start -->
    <section class="mt-16 w-full px-12">
        <div class="font-primary font-bold text-3xl">
            Premium Services
        </div>
        <div class="w-1/12 border-b-4 border-black h-1 my-4" />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            <div class="card bg-gradient-to-br from-purple-900 to-blue-900 shadow-2xl border border-purple-500">
                <div class="card-body">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                            <Icon name="mdi:robot" class="text-white text-2xl" />
                        </div>
                        <h3 class="text-xl font-bold text-white">AI Mastery Course</h3>
                    </div>
                    <p class="text-gray-300 mb-4">Complete AI journey from basics to advanced ML, LLM, and Agentic AI implementations. Hands-on projects with real-world applications.</p>
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold text-white">₹15,999</span>
                        <button class="btn btn-primary btn-sm">Enroll Now</button>
                    </div>
                </div>
            </div>
            
            <div class="card bg-gradient-to-br from-green-900 to-teal-900 shadow-2xl border border-green-500">
                <div class="card-body">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                            <Icon name="mdi:chart-line" class="text-white text-2xl" />
                        </div>
                        <h3 class="text-xl font-bold text-white">Quantitative Trading</h3>
                    </div>
                    <p class="text-gray-300 mb-4">Master algorithmic trading strategies, backtesting, and quantitative analysis. Build profitable trading systems.</p>
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold text-white">₹25,999</span>
                        <button class="btn btn-success btn-sm">Start Trading</button>
                    </div>
                </div>
            </div>
            
            <div class="card bg-gradient-to-br from-orange-900 to-red-900 shadow-2xl border border-orange-500">
                <div class="card-body">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                            <Icon name="mdi:code-braces" class="text-white text-2xl" />
                        </div>
                        <h3 class="text-xl font-bold text-white">DSA & System Design</h3>
                    </div>
                    <p class="text-gray-300 mb-4">Advanced Data Structures, Algorithms, and System Design for FAANG-level interviews. Mock interviews included.</p>
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold text-white">₹12,999</span>
                        <button class="btn btn-warning btn-sm">Master DSA</button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Call to Action Section -->
        <div class="mt-16 bg-gradient-to-r from-gray-900 to-black rounded-2xl p-12 text-center relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl"></div>
            <div class="relative z-10">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Level Up Your Skills?</h2>
                <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of students who have transformed their careers with our premium courses. Start your journey to becoming an expert today.</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button class="btn btn-primary btn-lg px-8 py-3 text-lg">
                        <Icon name="mdi:rocket-launch" class="mr-2" />
                        Start Learning Now
                    </button>
                    <button class="btn btn-outline btn-lg px-8 py-3 text-lg text-white border-white hover:bg-white hover:text-black">
                        <Icon name="mdi:phone" class="mr-2" />
                        Book a Consultation
                    </button>
                </div>
            </div>
        </div>
    </section>
    <!-- Premium Services Section End -->
    
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
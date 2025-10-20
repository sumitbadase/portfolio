<template>
    <section class="navbar bg-base-100 border-b border-black sticky top-0 z-50 shadow-sm">
        <div class="navbar-start px-4 sm:px-6 md:px-8">
            <a class="btn btn-ghost text-lg sm:text-xl md:text-2xl font-primary hover:bg-base-200">SKILLS BY SUMIT</a>
        </div>
        <div class="navbar-end px-4 sm:px-6 md:px-8">
            <a href="#courses" class="btn btn-ghost btn-sm sm:btn-md text-xs sm:text-sm">Courses</a>
            <a href="#experience" class="btn btn-ghost btn-sm sm:btn-md text-xs sm:text-sm">Experience</a>
        </div>
    </section>
    <slot/>
</template>
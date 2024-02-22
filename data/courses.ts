export type Course = {
    id: string;
    name: string;
    image: string;
    link: string;
}

export const allCourses: Course[] = [
    {
        id: 'java-for-beginners',
        name: 'Java for Beginners',
        image: '/courses/java.png',
        link: 'https://sumitbadase.graphy.com/courses/Java-for-Beginners-65980ef1e4b09a2778d842c0',
    },
    {
        id: 'dsa-for-beginners',
        name: 'DSA for Beginners',
        image: '/courses/dsa.png',
        link: 'https://learn.skillsbysumit.com/courses/DSA-For-Beginners-659810d0e4b040d30039d4d8',
    },
    {
        id: 'c-for-intermediate',
        name: 'C for Intermediate',
        image: '/courses/c.png',
        link: 'https://learn.skillsbysumit.com/courses/C-from-basic-to-advance-65d5133de4b06a57884f747d',
    }
    
]
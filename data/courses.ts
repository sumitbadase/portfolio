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
        link: 'https://sumitbadase.graphy.com/courses/DSA-For-Beginners-659810d0e4b040d30039d4d8',
    },
    
]
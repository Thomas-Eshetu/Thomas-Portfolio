const project = [
    {
        title: "Fetan Maid Agency",
        description:
            "Fetan Maid Agency is designed and built to simplify the process of finding home maids. Maids are registered in the system by the agency, allowing employers to browse and select suitable candidates from their convenient location and make bookings with ease.",
        image: "/projects/project.jpg",
        tags: ["HTML", "CSS", "Bootstrap", "Codeigniter", "MySQL"],
        link: "#",
    },
    {
        title: "Ethio Dream Draw",
        description:
            "A nationwide lottery platform that allows users to buy tickets through authorized operators and participate in lucky draws.",
        image: "/projects/project.jpg",
        tags: ["HTML", "CSS", "Bootstrap", "Codeigniter", "MySQL"],

        link: "#",
    },

    {
        title: "Polutry Farm Management System",
        description:
            "A nationwide lottery platform that allows users to buy tickets through authorized operators and participate in lucky draws.",
        image: "/projects/project.jpg",
        tags: ["HTML", "CSS", "Bootstrap", "Laravel", "MySQL"],

        link: "#",
    },

    {
        title: "Furniture Management System",
        description:
            "A nationwide lottery platform that allows users to buy tickets through authorized operators and participate in lucky draws.",
        image: "/projects/project.jpg",
        tags: ["HTML", "CSS", "Bootstrap", "Codeigniter", "MySQL"],

        link: "#",
    },

];


export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/**Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">

            </div>
        </section>
    )
}
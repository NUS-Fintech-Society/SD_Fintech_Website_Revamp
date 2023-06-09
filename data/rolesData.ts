import RolesData from '@data/interface/rolesData';

const rolesData: RolesData = {
    roles: [
        {
            name: 'Software Engineer',
            path: 'software-engineer',
            logo: {
                src: '/images/departments/departmentLogos/SD-main-icon.jpg',
                alt: 'SD logo',
            },
            aboutUs: {
                header: 'About Us',
                desc: 'The Software Development department has the main focus on building client facing products based on our external partnerships and research projects from the Machine Learning and Blockchain departments. As part of the team, members will get to learn and be part of the entire product development lifecycle, gain firsthand experience in SCRUM methodology and deliver features weekly as part of our continuous deployment software development approach.',
            },
            onboarding: {
                header: 'Onboarding',
                desc: 'Members with no experience will join a 4-weeks program to learn about front/backend technologies and UI/UX design. Frontend is done with NextJs, and the backend with Express and Prisma, as well as basic command line commands. You will be building your own projects during the training (think of it as a bootcamp). For designers, we are doing our prototyping on Figma, and throughout your time here at FTS, you will have the opportunity to add various design projects to your portfolio.',
            },
            requirements: {
                header: 'Requirements',
                desc: 'Software Engineer Requirements',
            },            
            subteams: [
                {
                    teamName: 'Engineering',
                    teamDescription: 'Engineering desc',
                    teamImage: {
                        src: '/images/departments/departmentLogos/SD-main-icon.jpg',
                        alt: 'Engineering logo',
                    }
                },
                {
                    teamName: 'Design',
                    teamDescription: 'Design desc',
                    teamImage: {
                        src: '/images/departments/departmentLogos/SD-main-icon.jpg',
                        alt: 'Design logo',
                    }
                }
            ],
        },
        {
            name: 'Technical Lead',
            path: 'technical-lead',
            logo: {
                src: '/images/departments/departmentLogos/SD-main-icon.jpg',
                alt: 'SD logo',
            },
            aboutUs: {
                header: 'About Us',
                desc: 'The Software Development department has the main focus on building client facing products based on our external partnerships and research projects from the Machine Learning and Blockchain departments. As part of the team, members will get to learn and be part of the entire product development lifecycle, gain firsthand experience in SCRUM methodology and deliver features weekly as part of our continuous deployment software development approach.',
            },
            onboarding: {
                header: 'Onboarding',
                desc: 'Members with no experience will join a 4-weeks program to learn about front/backend technologies and UI/UX design. Frontend is done with NextJs, and the backend with Express and Prisma, as well as basic command line commands. You will be building your own projects during the training (think of it as a bootcamp). For designers, we are doing our prototyping on Figma, and throughout your time here at FTS, you will have the opportunity to add various design projects to your portfolio.',
            },
            requirements: {
                header: 'Requirements',
                desc: 'Technical Lead Requirements',
            },        
            subteams: [
                {
                    teamName: 'Engineering',
                    teamDescription: 'Engineering desc',
                    teamImage: {
                        src: '/images/departments/departmentLogos/SD-main-icon.jpg',
                        alt: 'Engineering logo',
                    }
                },
                {
                    teamName: 'Design',
                    teamDescription: 'Design desc',
                    teamImage: {
                        src: '/images/departments/departmentLogos/SD-main-icon.jpg',
                        alt: 'Design logo',
                    }
                }
            ],
        },
    ]
}

export default rolesData;
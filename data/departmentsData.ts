import DepartmentsData from '@data/interface/departmentsData';

const departmentsData : DepartmentsData = {
    departments: [
        {
            name: "Machine Learning",
            path: "machinelearning",
            directors: [
                {
                    src: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
                    alt: "Image of director",
                    directorName: "John Doe"
                },
                {
                    src: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
                    alt: "Image of director",
                    directorName: "John Doe"
                },
            ],
            roles: [
                "Training Head", 
                "Tech Leads (Research, Project, Algo Trading)", 
                "Tech Analysts (Research, Project, Algo Trading)"
            ],
            projects: [
                {
                    projectName: "Algo Trading",
                    year: '22/23',
                    projectImage: {
                        src: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXJ8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                        alt: "Project Image"
                    },
                    members: [
                        {
                            memberName: "Alicia Wong",
                            src: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Member Image"
                        },
                        {
                            memberName: "Brandon Tan",
                            src: "https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Member Image"
                        }
                    ],
                    collaborations: [
                        {
                            companyName: "Company A",
                            src: "https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Company Logo"
                        }
                    ]
                },
                {
                    projectName: "Natural Language Processing of Financial News",
                    year: '21/22',
                    projectImage: {
                        src: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXJ8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                        alt: "Project Image"
                    },
                    members: [
                        {
                            memberName: "Alicia Wong",
                            src: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Member Image"
                        },
                        {
                            memberName: "Brandon Tan",
                            src: "https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Member Image"
                        }
                    ],
                    collaborations: [
                        {
                            companyName: "Company A",
                            src: "https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Company Logo"
                        }
                    ]
                }
            ]
        },
        {
            name: "Blockchain",
            path: "blockchain",
            directors: [
                {
                    src: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
                    alt: "Image of director",
                    directorName: "John Doe"
                },
                {
                    src: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
                    alt: "Image of director",
                    directorName: "John Doe"
                },
            ],
            roles: [
                "Training Head", 
                "Tech Leads (Research, Project, Algo Trading)", 
                "Tech Analysts (Research, Project, Algo Trading)"
            ],
            projects: [
                {
                    projectName: "Algo Trading",
                    year: '22/23',
                    projectImage: {
                        src: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXJ8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                        alt: "Project Image"
                    },
                    members: [
                        {
                            memberName: "Alicia Wong",
                            src: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Member Image"
                        },
                        {
                            memberName: "Brandon Tan",
                            src: "https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Member Image"
                        }
                    ],
                    collaborations: [
                        {
                            companyName: "Company A",
                            src: "https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Company Logo"
                        }
                    ]
                },
                {
                    projectName: "Natural Language Processing of Financial News",
                    year: '21/22',
                    projectImage: {
                        src: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXJ8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                        alt: "Project Image"
                    },
                    members: [
                        {
                            memberName: "Alicia Wong",
                            src: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Member Image"
                        },
                        {
                            memberName: "Brandon Tan",
                            src: "https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Member Image"
                        }
                    ],
                    collaborations: [
                        {
                            companyName: "Company A",
                            src: "https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Company Logo"
                        }
                    ]
                }
            ]
        },
        {
            name: "Software Development",
            path: "software",
            directors: [
                {
                    src: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
                    alt: "Image of director",
                    directorName: "John Doe"
                },
                {
                    src: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
                    alt: "Image of director",
                    directorName: "John Doe"
                },
            ],
            roles: [
                "Training Head", 
                "Tech Leads (Research, Project, Algo Trading)", 
                "Tech Analysts (Research, Project, Algo Trading)"
            ],
            projects: [
                {
                    projectName: "Algo Trading",
                    year: '22/23',
                    projectImage: {
                        src: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXJ8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                        alt: "Project Image"
                    },
                    members: [
                        {
                            memberName: "Alicia Wong",
                            src: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Member Image"
                        },
                        {
                            memberName: "Brandon Tan",
                            src: "https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Member Image"
                        }
                    ],
                    collaborations: [
                        {
                            companyName: "Company A",
                            src: "https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Company Logo"
                        }
                    ]
                },
                {
                    projectName: "Natural Language Processing of Financial News",
                    year: '21/22',
                    projectImage: {
                        src: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXJ8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                        alt: "Project Image"
                    },
                    members: [
                        {
                            memberName: "Alicia Wong",
                            src: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Member Image"
                        },
                        {
                            memberName: "Brandon Tan",
                            src: "https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Member Image"
                        }
                    ],
                    collaborations: [
                        {
                            companyName: "Company A",
                            src: "https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Company Logo"
                        }
                    ]
                }
            ]
        },
        {
            name: "Operations (Internal)",
            path: "operationsinternal",
            directors: [
                {
                    src: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
                    alt: "Image of director",
                    directorName: "John Doe"
                },
                {
                    src: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
                    alt: "Image of director",
                    directorName: "John Doe"
                },
            ],
            roles: [
                "Training Head", 
                "Tech Leads (Research, Project, Algo Trading)", 
                "Tech Analysts (Research, Project, Algo Trading)"
            ],
            projects: [
                {
                    projectName: "Algo Trading",
                    year: '22/23',
                    projectImage: {
                        src: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXJ8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                        alt: "Project Image"
                    },
                    members: [
                        {
                            memberName: "Alicia Wong",
                            src: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Member Image"
                        },
                        {
                            memberName: "Brandon Tan",
                            src: "https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Member Image"
                        }
                    ],
                    collaborations: [
                        {
                            companyName: "Company A",
                            src: "https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Company Logo"
                        }
                    ]
                },
                {
                    projectName: "Natural Language Processing of Financial News",
                    year: '21/22',
                    projectImage: {
                        src: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXJ8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                        alt: "Project Image"
                    },
                    members: [
                        {
                            memberName: "Alicia Wong",
                            src: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Member Image"
                        },
                        {
                            memberName: "Brandon Tan",
                            src: "https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Member Image"
                        }
                    ],
                    collaborations: [
                        {
                            companyName: "Company A",
                            src: "https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Company Logo"
                        }
                    ]
                }
            ]
        },
        {
            name: "Operations (External)",
            path: "operationsexternal",
            directors: [
                {
                    src: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
                    alt: "Image of director",
                    directorName: "John Doe"
                },
                {
                    src: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
                    alt: "Image of director",
                    directorName: "John Doe"
                },
            ],
            roles: [
                "Training Head", 
                "Tech Leads (Research, Project, Algo Trading)", 
                "Tech Analysts (Research, Project, Algo Trading)"
            ],
            projects: [
                {
                    projectName: "Algo Trading",
                    year: '22/23',
                    projectImage: {
                        src: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXJ8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                        alt: "Project Image"
                    },
                    members: [
                        {
                            memberName: "Alicia Wong",
                            src: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Member Image"
                        },
                        {
                            memberName: "Brandon Tan",
                            src: "https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Member Image"
                        }
                    ],
                    collaborations: [
                        {
                            companyName: "Company A",
                            src: "https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Company Logo"
                        }
                    ]
                },
                {
                    projectName: "Natural Language Processing of Financial News",
                    year: '21/22',
                    projectImage: {
                        src: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXJ8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                        alt: "Project Image"
                    },
                    members: [
                        {
                            memberName: "Alicia Wong",
                            src: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Member Image"
                        },
                        {
                            memberName: "Brandon Tan",
                            src: "https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Member Image"
                        }
                    ],
                    collaborations: [
                        {
                            companyName: "Company A",
                            src: "https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                            alt: "Company Logo"
                        }
                    ]
                }
            ]
        },
    ]
}

export default departmentsData;

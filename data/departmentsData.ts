import DepartmentsData from '@data/interface/departmentsData';

const departmentsData: DepartmentsData = {
  departments: [
    {
      name: 'Machine Learning',
      path: 'machine-learning',
      logo: {
        src: '/images/departments/departmentLogos/Machine-Learning-logo.png',
        alt: 'ML logo',
      },
      purpose:
        'Explore beyond our school syllabus and expose our members to working with real and complex datasets.',
      vision:
        'To foster a community of data-savvy members who are comfortable with wrangling and deriving insights from data',
      directors: [
        {
          src: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
          alt: 'Image of director',
          directorName: 'Mr. Daniel',
        },
        {
          src: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
          alt: 'Image of director',
          directorName: 'Mr. Kleon',
        },
      ],
      roles: [
        'Training Head',
        'Tech Leads (Research, Project, Algo Trading)',
        'Tech Analysts (Research, Project, Algo Trading)',
      ],
      projects: [
        {
          projectName: 'Credit Model Sabotage Using Adversarial AI',
          year: '21/22',
          description:
            'Artificial Neural Networks are increasingly being used for risk management purposes like fraud detection or credit risk analysis in the finance industry. Adversarial AI is an AI technique that attempts to fool models through malicious input. They cause AI systems to malfunction in the form of Evasion or Poisoning. This threatens the adoption of AI in risk analytics. This project demonstrates how adversarial techniques can be used to sabotage otherwise high performing credit risk models. /n The team was able to demonstrate that an Artificial Neural Network trained with over 99% accuracy in detecting credit fraud could be attacked to the level of having less than 11% accuracy.',
          projectImage: [
            {
              src: '/images/departments/projectImages/machineLearning/creditModel1.png',
              alt: 'Project Image',
              height: '500',
              width: '440',
            },
          ],
          members: [
            {
              memberName: 'Alicia Wong',
              src: 'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Member Image',
            },
            {
              memberName: 'Brandon Tan',
              src: 'https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Member Image',
            },
          ],
          collaborations: [
            {
              companyName: 'Company A',
              src: 'https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Company Logo',
            },
          ],
        },
        {
          projectName: 'Collaboration with BNP Paribas Treasury',
          year: '21/22',
          description:
            'BNP Paribas is a French Multinational Bank that offers clients solutions for capital markets, securities services, financing, treasury and financial advisory.  NUS Fintech Society is collaborating with their Corporate Treasury unit to work on interesting projects like Cash Flow Forecasting and Fraud Detection. /n Cash Flow Forecasting: Creating a cash flow forecasting model for BNPP clients to have a clearer understanding of their working capital /n Farud Detection: Creating a transparent and interpretable model to detect corporate fraud',
          projectImage: [
            {
              src: '/images/departments/projectImages/machineLearning/BNP1.png',
              alt: 'Project Image',
              height: '500',
              width: '440',
            },
          ],
          members: [
            {
              memberName: 'Alicia Wong',
              src: 'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Member Image',
            },
            {
              memberName: 'Brandon Tan',
              src: 'https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Member Image',
            },
          ],
          collaborations: [
            {
              companyName: 'Company A',
              src: 'https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Company Logo',
            },
          ],
        },
        {
          projectName: 'Algo Trading',
          year: '21/22',
          description:
            'Our algo trading teams experiment with and try out cutting edge machine learning algorithms for trading. Previous works include Generative Adversarial Networks for price prediction, and a comprehensive Comparison of Prophet, LSTM and Decision Trees for Price Signal prediction. /n The current teams are working on: /n - Reinforcement learning for Cryptocurrency trading /n - Paper trading of algorithms like pairs trading, leveraged ETF on Quantconnect /n - Ongoing Collaborating with NUS Fintech Lab on this topic',
          projectImage: [
            {
              src: '/images/departments/projectImages/machineLearning/algoTrading1.png',
              alt: 'Project Image',
              height: '500',
              width: '440',
            },
          ],
          members: [
            {
              memberName: 'Alicia Wong',
              src: 'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Member Image',
            },
            {
              memberName: 'Brandon Tan',
              src: 'https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Member Image',
            },
          ],
          collaborations: [
            {
              companyName: 'Company A',
              src: 'https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Company Logo',
            },
          ],
        },
        {
          projectName: 'Natural Language Processing of Financial News',
          year: '21/22',
          description:
            'Increasingly, many investors are looking to alternative data to find buy signals for stocks. The most popular of which is Sentiment Analysis since the price of a stock is usually highly correlated with market sentiment. Previously, our members built a sentiment analysis dashboard for Financial Data provider SmartKarma which scored stocks based on market outlook. /n Currently, our members are also creating a public web application to implement markets sentiment analysis on Financial News. This will be available for use soon on the Fintech website. In addition, our training wing members are all trying their hand at building their own NLP model for stock price signal prediction.',
          projectImage: [
            {
              src: '/images/departments/projectImages/machineLearning/nlpFinancial.png',
              alt: 'Project Image',
              height: '500',
              width: '440',
            },
          ],
          members: [
            {
              memberName: 'Alicia Wong',
              src: 'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Member Image',
            },
            {
              memberName: 'Brandon Tan',
              src: 'https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Member Image',
            },
          ],
          collaborations: [
            {
              companyName: 'Company A',
              src: 'https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Company Logo',
            },
          ],
        },
      ],
    },
    {
      name: 'Blockchain',
      path: 'blockchain',
      logo: {
        src: '/images/departments/departmentLogos/Blockchain-Logo.png',
        alt: 'Blockchain logo',
      },
      purpose:
        'Raise professionals and enthusiasts of blockchain, cryptocurrency, and distributed ledger technology to be early adopters, pioneers, and trailblazers of the industry',
      vision:
        'Provide ample connections and opportunities to the best companies, organizations, and individuals in the blockchain sphere, create solutions of tangible and industrial value',
      directors: [
        {
          src: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
          alt: 'Image of director',
          directorName: 'Mr. Jones',
        },
        {
          src: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
          alt: 'Image of director',
          directorName: 'Mr. David',
        },
      ],
      roles: [
        'Training Head',
        'Tech Leads (Research, Project, Algo Trading)',
        'Tech Analysts (Research, Project, Algo Trading)',
      ],
      projects: [
        {
          projectName: 'Charity Chain',
          year: '21/22',
          description:
            "People often find themselves skeptical of donations to charity organizations, such as the organization's authenticity and usage of funds. This proof of concept project aims to build a public, user-friendly platform that makes the identification of any charity and your own record of donation simple.",
          projectImage: [
            {
              src: '/images/departments/projectImages/blockchain/charityChain.png',
              alt: 'Project Image',
              height: '500',
              width: '440',
            },
          ],
          members: [
            {
              memberName: 'Alicia Wong',
              src: 'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Member Image',
            },
            {
              memberName: 'Brandon Tan',
              src: 'https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Member Image',
            },
          ],
          collaborations: [
            {
              companyName: 'Company A',
              src: 'https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Company Logo',
            },
          ],
        },
        {
          projectName: 'E-Auction Platform',
          year: '21/22',
          description:
            'Centralized E-Auctions face the problems of a lack of trust from participants, hidden middlemen costs and a risk of corruption. This decentralized application demonstrates how the trust, authenticity and anonymity of auction bids can be improved by migrating to a blockchain-based system.',
          projectImage: [
            {
              src: '/images/departments/projectImages/blockchain/eAuction.png',
              alt: 'Project Image',
              height: '500',
              width: '440',
            },
          ],
          members: [
            {
              memberName: 'Alicia Wong',
              src: 'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Member Image',
            },
            {
              memberName: 'Brandon Tan',
              src: 'https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Member Image',
            },
          ],
          collaborations: [
            {
              companyName: 'Company A',
              src: 'https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Company Logo',
            },
          ],
        },
        {
          projectName: 'Game',
          year: '21/22',
          description:
            'The vast majority of online games stores store in-game data on a centralized server, with gamers lacking personal ownership of valuable in-game items and vulnerable to hacks and game-economy manipulation. Blockchain, as a distributed database is able to return this ownership to the gamers. In this proof of concept, we demonstrate how games can be built on top of a distributed platform such as Ethereum.',
          projectImage: [
            {
              src: '/images/departments/projectImages/blockchain/game.png',
              alt: 'Project Image',
              height: '500',
              width: '440',
            },
          ],
          members: [
            {
              memberName: 'Alicia Wong',
              src: 'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Member Image',
            },
            {
              memberName: 'Brandon Tan',
              src: 'https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Member Image',
            },
          ],
          collaborations: [
            {
              companyName: 'Company A',
              src: 'https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Company Logo',
            },
          ],
        },
      ],
    },
    {
      name: 'Software Development',
      path: 'software',
      logo: {
        src: '/images/departments/departmentLogos/Software-Development-Logo.png',
        alt: 'SD logo',
      },
      purpose:
        'Provide opportunities for members to collaborate and work on fintech software projects and maintain production applications',
      vision:
        'To create a community of fintech enthusiast developers who are passionate about learning and building fintech applications and products',
      directors: [
        {
          src: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
          alt: 'Image of director',
          directorName: 'Mr. Owen',
        },
        {
          src: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
          alt: 'Image of director',
          directorName: 'Ms. Pun Pun',
        },
      ],
      roles: [
        'Training Head',
        'Tech Leads (Research, Project, Algo Trading)',
        'Tech Analysts (Research, Project, Algo Trading)',
      ],
      projects: [
        {
          projectName: 'Smart Finance',
          year: '21/22',
          description:
            'Organize expenses, learn from spending patterns, and manage finances optimally with the help of an analysis dashboard and a Robo Advisor.',
          projectImage: [
            {
              src: '/images/departments/projectImages/softwareDevelopment/smartFinance1.png',
              alt: 'Project Image',
              height: '360',
              width: '450',
            },
            {
              src: '/images/departments/projectImages/softwareDevelopment/smartFinance2.png',
              alt: 'Project Image',
              height: '360',
              width: '450',
            },
            {
              src: '/images/departments/projectImages/softwareDevelopment/smartFinance3.png',
              alt: 'Project Image',
              height: '360',
              width: '450',
            },
            {
              src: '/images/departments/projectImages/softwareDevelopment/smartFinance4.png',
              alt: 'Project Image',
              height: '360',
              width: '450',
            },
          ],
          members: [
            {
              memberName: 'Alicia Wong',
              src: 'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Member Image',
            },
            {
              memberName: 'Brandon Tan',
              src: 'https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Member Image',
            },
          ],
          collaborations: [
            {
              companyName: 'Company A',
              src: 'https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Company Logo',
            },
          ],
        },
        {
          projectName: 'Fintech Folio',
          year: '21/22',
          description:
            'FintechFolio is a personal finance app designed to help NUS students save money, plan for their future, and view all their finances in one place. With FintechFolio, students can keep track of their daily expenses automatically with bank synchronization. Based on their financial goals and daily expenses history, they can create daily budgets to save better and achieve their financial goals sooner. In order for students to further enhance their experience in personal finance, our app provides daily FinTech news, promotional deals and education on finance and investments.With one place to keep track of their personal finance as well as learn more about finance, investments and FinTech, there’s no need to log into multiple sites. Students can access their personal finance app from anywhere, on any device.',
          projectImage: [
            {
              src: '/images/departments/projectImages/softwareDevelopment/fintechFolio1.png',
              alt: 'Project Image',
              height: '380',
              width: '345',
            },
            {
              src: '/images/departments/projectImages/softwareDevelopment/fintechFolio2.png',
              alt: 'Project Image',
              height: '380',
              width: '345',
            },
            {
              src: '/images/departments/projectImages/softwareDevelopment/fintechFolio3.png',
              alt: 'Project Image',
              height: '380',
              width: '345',
            },
            {
              src: '/images/departments/projectImages/softwareDevelopment/fintechFolio4.png',
              alt: 'Project Image',
              height: '380',
              width: '345',
            },
          ],
          members: [
            {
              memberName: 'Alicia Wong',
              src: 'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Member Image',
            },
            {
              memberName: 'Brandon Tan',
              src: 'https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Member Image',
            },
          ],
          collaborations: [
            {
              companyName: 'Company A',
              src: 'https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Company Logo',
            },
          ],
        },
        {
          projectName: 'NUS Fintech Month Microsite',
          year: '21/22',
          description:
            "Fintech Month Website 2021 was built in collaboration with the Operations department. The website's main homepage has a countdown timer for the event and other components in the website include information on the event overview, workshops, partners, etc. It is a static website built using ReactJS framework and Material UI design, whilst hosted using Firebase. Throughout the process, the engineering team practiced proper project management and releases using JIRA tools, and practiced Agile methodology to keep the development process adaptable to any product requirement changes during the period.",
          projectImage: [
            {
              src: '/images/departments/projectImages/softwareDevelopment/fintechMonth1.png',
              alt: 'Project Image',
              height: '450',
              width: '450',
            },
            {
              src: '/images/departments/projectImages/softwareDevelopment/fintechMonth2.png',
              alt: 'Project Image',
              height: '450',
              width: '450',
            },
            {
              src: '/images/departments/projectImages/softwareDevelopment/fintechMonth3.png',
              alt: 'Project Image',
              height: '450',
              width: '450',
            },
          ],
          members: [
            {
              memberName: 'Alicia Wong',
              src: 'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Member Image',
            },
            {
              memberName: 'Brandon Tan',
              src: 'https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Member Image',
            },
          ],
          collaborations: [
            {
              companyName: 'Company A',
              src: 'https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Company Logo',
            },
          ],
        },
      ],
    },
    {
      name: 'Operations',
      path: 'operations',
      logo: {
        src: '/images/departments/departmentLogos/Internal-Op-Logo.png',
        alt: 'Ops Internal Logo',
      },
      purpose: 'To be filled',
      vision: 'To be filled',
      directors: [
        {
          src: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
          alt: 'Image of director',
          directorName: 'John Doe',
        },
        {
          src: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
          alt: 'Image of director',
          directorName: 'John Doe',
        },
      ],
      roles: [
        'Training Head',
        'Tech Leads (Research, Project, Algo Trading)',
        'Tech Analysts (Research, Project, Algo Trading)',
      ],
      projects: [
        {
          projectName: 'Algo Trading',
          year: '22/23',
          description: '',
          projectImage: [
            {
              src: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXJ8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Project Image',
              height: '500',
              width: '400',
            },
            {
              src: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXJ8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Project Image',
              height: '500',
              width: '400',
            },
          ],
          members: [
            {
              memberName: 'Alicia Wong',
              src: 'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Member Image',
            },
            {
              memberName: 'Brandon Tan',
              src: 'https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Member Image',
            },
          ],
          collaborations: [
            {
              companyName: 'Company A',
              src: 'https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Company Logo',
            },
          ],
        },
        {
          projectName: 'Natural Language Processing of Financial News',
          year: '21/22',
          description: '',
          projectImage: [
            {
              src: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXJ8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Project Image',
              height: '500',
              width: '400',
            },
            {
              src: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXJ8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Project Image',
              height: '500',
              width: '400',
            },
          ],
          members: [
            {
              memberName: 'Alicia Wong',
              src: 'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Member Image',
            },
            {
              memberName: 'Brandon Tan',
              src: 'https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Member Image',
            },
          ],
          collaborations: [
            {
              companyName: 'Company A',
              src: 'https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              alt: 'Company Logo',
            },
          ],
        },
      ],
    },
  ],
};

export default departmentsData;

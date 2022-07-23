import DepartmentsData from '@data/interface/departmentsData';

const departmentsData: DepartmentsData = {
  departments: [
    {
      name: 'Machine Learning',
      path: 'machine-learning',
      logo: {
        src: '/images/departments/departmentLogos/ml-logo.png',
        alt: 'ML logo',
      },
      purpose:
        'Explore beyond our school syllabus and expose our members to working with real and complex datasets.',
      vision:
        'To foster a community of data-savvy members who are comfortable with wrangling and deriving insights from data',
      directors: [
        {
          src: '/images/exco/ml1.jpg',
          alt: 'Image of director',
          directorName: 'Daniel',
        },
        {
          src: '/images/exco/ml2.jpg',
          alt: 'Image of director',
          directorName: 'Kleon',
        },
      ],
      roles: [
        'Training Head',
        'Tech Leads (Research, Project, Algo Trading)',
        'Tech Analysts (Research, Project, Algo Trading)',
      ],
      projects: [],
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
          src: '/images/exco/blockchain1.jpg',
          alt: 'Image of director',
          directorName: 'Jones',
        },
        {
          src: '/images/exco/blockchain2.jpg',
          alt: 'Image of director',
          directorName: 'David',
        },
      ],
      roles: [
        'Training Head',
        'Tech Leads (Research, Project, Algo Trading)',
        'Tech Analysts (Research, Project, Algo Trading)',
      ],
      projects: [
        {
          projectName: 'FX Algorithmic Trading with Machine Learning Models',
          year: '21/22',
          htmlContent:
            "<div class='flex flex-col  gap-y-5'> <p>The forex market has very high volatility. It is the largest financial market in the world with a daily volume of up to 6.6 trillion. This gives more way to algorithmic trading, which identifies patterns in the market and learns from the patterns to obtain profitable trades</p><p>The team was able to incorporated multiple variations of models to investigate the different performances for different specifications of models. They managed to execute profitable automated forex trading using signals generated from ML Models.</p><ul class='list-disc ml-5'> <li>Number of Trades: 4311</li><li>Number of Win Trades: 2909</li><li>Number of Lose Trades: 1402</li><li>Total Profit: 14740.84SGD</li></ul> <a class='underline' href='https://medium.com/@nusfintech.ml/fx-algorithmic-trading-with-machine-learning-models-7d6821fa7e67'>https://medium.com/@nusfintech.ml/fx-algorithmic-trading-with-machine-learning-models-7d6821fa7e67</a></div>",
          projectImage: [
            {
              src: '/images/departments/projectImages/blockchain/algo-trading1.jpg',
              alt: 'Project Image',
              height: '500',
              width: '440',
            },
            {
              src: '/images/departments/projectImages/blockchain/algo-trading2.jpg',
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
          collaborations: [],
        },
        {
          projectName: 'Magic Formula Investing: A Singapore Case Study',
          year: '21/22',
          htmlContent:
            "<div class='flex flex-col gap-y-3'> <p>In 2006, Joel Greenblatt published his now-famous book, The Little Book that Beats the Market. In it, he describes a value investing strategy that he calls the Magic Formula. The unique feature of Magic Formula Investing is that it uses only two financial metrics, Return on Capital (ROC) and Earnings Yield (EY) to select a portfolio of stocks. Amazingly, according to Greenblatt, his Magic Formula Investing strategy could achieve an average of 30.8% in annual returns over 17 years when tested on the US market, far exceeding the market index — the S&P 500 — which returned 12.4% each year on average over that same 17-year time period.</p><p> Taking inspiration from Greenblatt’s Magic Formula, we decided to use ROC and EY as the only two features when training our machine learning models. Furthermore, since we found that the Magic Formula has yet to be extensively studied in our local (Singapore) context, we decided to apply this value investing strategy to SGX stocks and framed it as a machine learning problem. In this project, we explored using a variety of models including SVMs, KNNs, Neural Networks, and Gradient Boosted Models. Our best performing model achieved an accuracy of 86% in predicting outperformance of SGX stocks against the market index STI.</p><p> Members: Kleon Ang, Vinod ,Hans Neddyanto Tandjung, Nixon Widjaja</p><a href='https://medium.com/@nusfintech.ml/beating-the-singapore-stock-market-with-the-magic-formula-aa62989fda7d'> https://medium.com/@nusfintech.ml/beating-the-singapore-stock-market-with-the-magic-formula-aa62989fda7d</a></div>",
          projectImage: [
            {
              src: '/images/departments/projectImages/blockchain/algo-trading1.jpg',
              alt: 'Project Image',
              height: '500',
              width: '440',
            },
            {
              src: '/images/departments/projectImages/blockchain/algo-trading2.jpg',
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
          collaborations: [],
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
          src: '/images/exco/sd.jpg',
          alt: 'Image of director',
          directorName: 'Owen',
        },
      ],
      roles: [
        'Training Head',
        'Tech Leads (Research, Project, Algo Trading)',
        'Tech Analysts (Research, Project, Algo Trading)',
      ],
      projects: [],
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
      projects: [],
    },
  ],
};

export default departmentsData;

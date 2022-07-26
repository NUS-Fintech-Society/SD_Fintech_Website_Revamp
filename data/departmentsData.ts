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
        'Technical Analyst Trainee',
        'Technical Lead (Project/Quant)',
        'Technical Analyst (Project/Quant)',
      ],
      projects: [
        {
          projectName: 'FX Algorithmic Trading with Machine Learning Models',
          year: '21/22',
          htmlContent:
            "<p>The forex market has very high volatility. It is the largest financial market in the world with a daily volume of up to 6.6 trillion. This gives more way to algorithmic trading, which identifies patterns in the market and learns from the patterns to obtain profitable trades</p><p>The team was able to incorporated multiple variations of models to investigate the different performances for different specifications of models. They managed to execute profitable automated forex trading using signals generated from ML Models.</p><ul > <li>Number of Trades: 4311</li><li>Number of Win Trades: 2909</li><li>Number of Lose Trades: 1402</li><li>Total Profit: 14740.84SGD</li></ul><b>Article: </b><a class='underline' href='https://medium.com/@nusfintech.ml/fx-algorithmic-trading-with-machine-learning-models-7d6821fa7e67'>https://medium.com/@nusfintech.ml/fx-algorithmic-trading-with-machine-learning-models-7d6821fa7e67</a><b>Members:</b><p>Huaian, Siqi, Gu Geng, Jia Xuan, Hong Po</p>",
          projectImage: [
            {
              src: '/images/departments/projectImages/machineLearning/algo-trading1.jpg',
              alt: 'Project Image',
              height: '500',
              width: '440',
            },
            {
              src: '/images/departments/projectImages/machineLearning/algo-trading2.jpg',
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
            " <p>In 2006, Joel Greenblatt published his now-famous book, The Little Book that Beats the Market. In it, he describes a value investing strategy that he calls the Magic Formula. The unique feature of Magic Formula Investing is that it uses only two financial metrics, Return on Capital (ROC) and Earnings Yield (EY) to select a portfolio of stocks. Amazingly, according to Greenblatt, his Magic Formula Investing strategy could achieve an average of 30.8% in annual returns over 17 years when tested on the US market, far exceeding the market index — the S&P 500 — which returned 12.4% each year on average over that same 17-year time period.</p><p> Taking inspiration from Greenblatt’s Magic Formula, we decided to use ROC and EY as the only two features when training our machine learning models. Furthermore, since we found that the Magic Formula has yet to be extensively studied in our local (Singapore) context, we decided to apply this value investing strategy to SGX stocks and framed it as a machine learning problem. In this project, we explored using a variety of models including SVMs, KNNs, Neural Networks, and Gradient Boosted Models. Our best performing model achieved an accuracy of 86% in predicting outperformance of SGX stocks against the market index STI.</p><b>Article:</b><a href='https://medium.com/@nusfintech.ml/beating-the-singapore-stock-market-with-the-magic-formula-aa62989fda7d'> https://medium.com/@nusfintech.ml/beating-the-singapore-stock-market-with-the-magic-formula-aa62989fda7d</a> <b>Members:</b> <p>Kleon Ang, Vinod ,Hans Neddyanto Tandjung, Nixon Widjaja</p>",
          projectImage: [
            {
              src: '/images/departments/projectImages/machineLearning/magic-formula1.jpg',
              alt: 'Project Image',
              height: '500',
              width: '440',
            },
            {
              src: '/images/departments/projectImages/machineLearning/magic-formula2.jpg',
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
          projectName: 'NLP on FOMC Meetings',
          year: '21/22',
          htmlContent:
            '<p>The US Federal Reserve meets roughly 8 times a year to discuss issues involving the economy. During these meetings, topics such as economic growth, inflation and unemployment are discussed. As such, analysts have taken a strong interest in Federal Open Market Committee(FOMC) minutes. Insights derived from the meeting can be utilised for applications such as portfolio optimisation and investment. However, such analyses can take time and are subject to personal biases. </p><p>To aid the analysis of the minutes and minimise potential inaccuracies, our team employed 2 models that satisfy different objectives. </p><ul> <li>Topic modelling is done by employing Latent Dirichlet Allocation (LDA). This tracks the topics discussed by the Federal Reserve committee over time, which provides new information for fresh insights.</li><li>Sentiment Analysis is done by employing the BERT model in order to determine hawkish / bullish sentiment, to generate predictions on federal funds rate.</li></ul> <b>Article:</b><a href="https://medium.com/@nusfintech.ml/nlp-on-fomc-meetings-50b48c447fe1">https://medium.com/@nusfintech.ml/nlp-on-fomc-meetings-50b48c447fe1</a><b>Members:</b><p>Keane, Andrew Walker, Ho Yan Qi, Dhruv Shah, Pang Jiarong Jacob</p>',
          projectImage: [
            {
              src: '/images/departments/projectImages/machineLearning/nlp1.jpg',
              alt: 'Project Image',
              height: '500',
              width: '440',
            },
            {
              src: '/images/departments/projectImages/machineLearning/nlp2.jpg',
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
          directorName: 'Marcus',
        },
      ],
      roles: ['Research Analyst', 'Community Manager', 'Blockchain Developer'],
      projects: [
        {
          projectName: 'Xfers NUS Transaction Risk Detection Website',
          year: '21/22',
          htmlContent:
            "<p>This project is a collaboration between NUS Fintech Society and Xfers where we aimed to quantify the risks involved in transactions on the Blockchain, making use of CryptoScamDB and CoinGecko. This was done to address two main problems facing the industry: lack of standard regulations on identifying suspicious transactions and addresses and the lack of access to fraud detection tools. </p><p>Consequently, the team came up with a 'risk score' metric to evaluate transactions and the likelihood that an account is involved in scams. The calculation is based off the following parameters: </p><ul> <li>Type of Transaction</li><li>Transaction Volume</li><li>Token Risk</li><li>Sender History</li><li>Sender Risk</li></ul><p>The application allows you to evaluate a transaction or address on the blockchain and returns a general risk rating. A questionnaire was also created to determine a token’s level of risk and the likelihood of the token being classified as a security. </p><b>News Article:</b><a href='https://www.straitsx.com/sg-blog/nus-fintech-society-partners-with-xfers-on-industry-project'>https://www.straitsx.com/sg-blog/nus-fintech-society-partners-with-xfers-on-industry-project</a><b>Members:</b><p>Yin Ruohang, Keith Chan, Megan Yee, Simon Teo, Lai Yuen, Nicole Leong, Ezra Daniel</p>",
          projectImage: [
            {
              src: '/images/departments/projectImages/blockchain/xfers1.jpg',
              alt: 'Project Image',
              height: '500',
              width: '440',
            },
            {
              src: '/images/departments/projectImages/blockchain/xfers2.jpg',
              alt: 'Project Image',
              height: '500',
              width: '440',
            },
            {
              src: '/images/departments/projectImages/blockchain/xfers3.jpg',
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
              src: '/images/departments/projectImages/blockchain/xfers-logo.svg',
              alt: 'xfers logo',
              companyName: 'xfers',
            },
          ],
        },
        {
          projectName: 'ABCDao',
          year: '21/22',
          htmlContent:
            "<p> ABCDao is a BlockChain DAO built for members of the Blockchain Department within the NUS Fintech Society </p><p>The ABCDao acts as an internal tracking system to encourage members of the NUS Fintech Society Blockchain Department to contribute more and meaningfully towards the organisation. The tokens are used as a form of proof and incentive, where members earn tokens for every contribution that they make towards the society (e.g. attendance for department and society meetings, project participation, leadership roles, articles written on Medium, months of stay within the society). The higher the contribution, the more tokens they earn. </p><p>The ABCDao is also used to democratise voting processes relating to the functioning of the department (e.g. selection of blockchain projects, selection of technical leads in projects, etc), where voting rights for DAO proposals are based on the members' tokens. If a particular individual has more tokens, usually as a result of excellent performance in the society, they will get a higher voting preference over another.</p><b>Members:</b><p> Jun Xiong, Bryan Woo, Vimuth Mendis </p>",
          projectImage: [
            {
              src: '/images/departments/projectImages/blockchain/abcdao.jpg',
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
          projectName: 'Potamus Loan - Real-time Loan and Instalment',
          year: '21/22',
          htmlContent:
            '<p>On Potamus Loan, users can take a loan from a fund pool (fund contract) and repay it slowly using money streaming. Similarly, users can also create fund pools by supplying the address and some quantity of the token. These tokens will generate interest automatically for users, and enable others to loan from their pools. </p><b>Members:</b> <p>Ngo Phuc Cuong, Marcus Tan, James Yak, Seungryeol, Louis</p>',
          projectImage: [
            {
              src: '/images/departments/projectImages/blockchain/potamus.jpg',
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
          projectName: 'Multi-Signature Wallet',
          year: '21/22',
          htmlContent:
            '<p>Multi-signature wallet is created through a smart contract, to require more than one private key to sign and authorise a crypto transaction, or to generate a signature. </p><p>On this MultiSig wallet, users can add or delete their wallets, assign or remove owners, read all owners, submit transactions, multi-sign, and execute a transaction after enough signatures have been authorised.</p><p>On the frontend application, users can peform a Metamask login or logout, view past transactions, view all wallets they own or have been shared with them, send or receive tokens, and deploy their multiSig wallet onto a Ropsten test network</p><b>Members:</b><p>Marcus Pang, Foo Siqi, Ernest Chan</p>',
          projectImage: [
            {
              src: '/images/departments/projectImages/blockchain/wallet.jpg',
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
        'UIUX Designer',
        'Designer Manager',
        'Techinical Lead',
        'Software Engineer',
      ],
      projects: [
        {
          projectName: 'Insurtech Computer Vision',
          year: '21/22',
          htmlContent:
            '<p>In this project, we sought to train a computer vision model to detect the location and severity of car damages in order to give an estimate of the cost of repairs, which could help insurance firms process claims faster and detect fraudulent claims. For the model training, we gathered around 140 images of damaged cars with either scratches or dents. To train the damage detection model, we identified scratches and dents in images and labeled them with VGG Image Annotator. </p><p>For the training of the model, we fine-tuned a Mask R-CNN Model that was trained on the MS COCO object detection problem as a starting point to finetune the model with our dataset of damaged cars. With a very small dataset at around 140 images, we decided to augment our images to add more variety to the dataset. This helps the model in capturing some of the patterns under different angles, different lighting conditions and different image resolutions. </p><p>For the location detection, we trained another Yolov5 model on 3 classes, namely front, back and side. We did not train location detection using Mask R-CNN as we only needed to know whether the damages are front, side or back and hence instance segmentation was not really necessary. </p><p>Using Flask and REST API, we integrated the MaskRCNN and YOLOv5 models into a web application that enables end users to upload car images and receive model inference results. </p><b>Article:</b><a href="https://medium.com/@nusfintech.ml/car-claims-insurance-technology-insurtech-4ffbe2c948c5">https://medium.com/@nusfintech.ml/car-claims-insurance-technology-insurtech-4ffbe2c948c5</a><b>Members:</b><p>Daniel, Amateus, Chester, Nielsen, Zhili</p>',
          projectImage: [
            {
              src: '/images/departments/projectImages/softwareDevelopment/insurtech1.jpg',
              alt: 'Project Image',
              height: '500',
              width: '440',
            },
            {
              src: '/images/departments/projectImages/softwareDevelopment/insurtech2.jpg',
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
          projectName:
            'PropertyRecommender - Property Recommendation application with future price prediction',
          year: '21/22',
          htmlContent:
            '<p>The PropertyRecommender application is a web application that aims to recommend properties that are most suited to the user"s preferences. In the application, users are able to select filters such as type, size, price per square feet, age and planning area. </p><p>With the results, users are also able to view detailed information of the properties and predicted future prices. An affordability calculator is also available for users to calculate the maximum property price they can afford and maximum bank loan that they can take based on information such as marital status and age. </p>',
          projectImage: [
            {
              src: '/images/departments/projectImages/softwareDevelopment/property.jpg',
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
      name: 'Operations',
      path: 'operations',
      logo: {
        src: '/images/departments/departmentLogos/Internal-Op-Logo.png',
        alt: 'Ops Internal Logo',
      },
      purpose:
        '(Internal Affairs) Provide programmes and workshops for members of FinTech Society to build relationships and develop a love for FinTech. (External Relations)To reach out to external stakeholders and industry partners, strengthening FinTech Society’s network and presence .',
      vision:
        '(Internal Affairs) To organise programmes and workshops to introduce FinTech to the wider community. (External Relations) To widen the outreach and expand FinTech Society’s network both within the NUS community and with industry partners.',
      directors: [
        {
          src: '/images/exco/er.jpg',
          alt: 'Image of director',
          directorName: 'Elicia',
        },
        {
          src: '/images/exco/ia1.jpg',
          alt: 'Image of director',
          directorName: 'James',
        },
        {
          src: '/images/exco/ia2.jpg',
          alt: 'Image of director',
          directorName: 'Jin',
        },
      ],
      roles: [
        'Project Management Lead/Executives (Internal Affairs)',
        'Talent Management Lead/Executives (Internal Affairs)',
        'Finance Lead/Executives (Internal Affairs)',
        'Community Development Lead/Executives (Internal Affairs)',
        'Product Manager (Internal Affairs)',
        'Partnership Lead/Executive (External Relations)',
        'Marketing Lead/Executive (External Relations)',
      ],
      projects: [
        {
          projectName: 'Singapore FinTech Festival',
          year: '21/22',
          htmlContent:
            '<p>For the Singapore Fintech Festival (SFF) event 2020, our society collaborated with Monetary Authority of Singapore and the other institutes of higher learning for the Talent Pavilion Segment (TP). TP is a one-stop-shop for jobs and skills focusing on Professionals, Managers, Executives and Technicians (PMETs), career switchers, students and fresh graduates to meet their talent-related needs. It is a partnership involving government agencies, labour movement, institutes of higher learning and industry collaborating to reimagine and redefine the future of work in the growing Technology space. </p><p>The FinTech Society was actively involved in planning and execution of the FinTech Literacy in Heartlands programme and the Round Table Discussions from 7 December, 2020 to 10th December 2020 as part of Talent Pavilion and SFF 2020. Our society is proud to have been able to collaborate with the Monetary Authority of Singapore for the third time this year. </p>',
          projectImage: [
            {
              src: '/images/departments/projectImages/ops/fintech-festival.jpg',
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
              src: '/images/departments/projectImages/ops/mas-logo.jpg',
              alt: 'MAS logo',
              companyName: 'MAS',
            },
          ],
        },
        {
          projectName: 'NUS FinTech Month',
          year: '21/22',
          htmlContent:
            '<p>FinTech Month is a series of workshops and hackathon designed to give tertiary students an insight into the world of FinTech. Through this one month of engaging activities catered to all tertiary students regardless of their background, we aimed to create an inclusive environment and encourage more people to explore this emerging field. </p><p>Despite this being our very first iteration of FinTech Month, we’re extremely proud and thankful to have received an overwhelming response of over 800 sign-ups. Please continue to look forward to our subsequent iterations in future years! </p>',
          projectImage: [
            {
              src: '/images/departments/projectImages/ops/finmonth.jpg',
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
  ],
};

export default departmentsData;

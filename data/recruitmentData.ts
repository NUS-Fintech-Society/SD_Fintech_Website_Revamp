import RecruitmentData from '@data/interface/recruitmentData';
import {FAQData} from '@data/interface/recruitmentData';

const recruitmentData: RecruitmentData = {'departmentCards' : [
    {
        coverImage:{
            src:'https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
            alt:"image1",
        },
        name:"Blockchain",
        description:"desc",
    },
    {
        coverImage:{
            src:'https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
            alt:"image2",
        },
        name:"Machine Learning",
        description:"desc",
    },
    {
        coverImage:{
            src:'https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
            alt:"image3",
        },
        name:"Software Development",
        description:"desc",
    },
    {
        coverImage:{
            src:'https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
            alt:"image4",
        },
        name:"Operations - External",
        description:"desc",
    },
    {
        coverImage:{
            src:'https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
            alt:"image5",
        },
        name:"Operations - Internal",
        description:"desc",
    },
]};

const faqData: FAQData = {'departmentsFAQ' :[
    {
        departmentName : 'Blockchain',
        questions: [
            {
                question:'Question 1',
                answer:'Answer 1',
            }
        ]
    },
    {
        departmentName : 'Machine Learning',
        questions: [
            {
                question:'Question 2',
                answer:'Answer 2',
            }
        ]
    },
    {
        departmentName : 'Software Development',
        questions: [
            {
                question:'Question 3',
                answer:'Answer 3',
            }
        ]
    },
    {
        departmentName : 'Operations',
        questions: [
            {
                question:'Question 4',
                answer:'Answer 4',
            }
        ]
    },
]}

export default recruitmentData;

//type
import RecruitmentData from '@data/interface/recruitmentData';
import { HomeData } from '@data/interface/homeData';
import { EventsData } from '@data/interface/eventsData';
import DepartmentsData from '@data/interface/departmentsData';

//code
import homeData from '@data/homeData';
import recruitmentData from '@data/recruitmentData';
import eventsData from '@data/eventsData'
import departmentsData from '@data/departmentsData';

// fake fetch to be replaced by backend calls in the future, used in getStaticProps of page files
const fetchRecruitmentData: () => Promise<RecruitmentData> = async () =>
  recruitmentData;
const fetchHomeData: () => Promise<HomeData> = async () => homeData;
const fetchEventsData: () => Promise<EventsData> = async () => eventsData;
const fetchDepartmentsData: () => Promise<DepartmentsData> = async () => 
  departmentsData;

export { fetchHomeData, fetchRecruitmentData,fetchDepartmentsData, fetchEventsData };

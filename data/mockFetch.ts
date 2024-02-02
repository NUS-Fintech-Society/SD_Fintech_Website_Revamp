// type
import RecruitmentData from '@data/interface/recruitmentData';
import RolesData from '@data/interface/rolesData';
import { HomeData } from '@data/interface/homeData';
import EventsData from '@data/interface/eventsData';
import DepartmentsData from '@data/interface/departmentsData';

// code
import homeData from '@data/homeData';
import recruitmentData from '@data/recruitmentData';
import rolesData from '@data/rolesData';
import eventsData from '@data/eventsData';
import departmentsData from '@data/departmentsData';
import ExcoData from '@data/interface/excoData';
import excoData from '@data/excoData';

// fake fetch to be replaced by backend calls in the future, used in getStaticProps of page files
const fetchRecruitmentData: () => Promise<RecruitmentData> = async () =>
  recruitmentData;
const fetchRolesData: () => Promise<RolesData> = async () =>
rolesData;
const fetchHomeData: () => Promise<HomeData> = async () => homeData;
const fetchEventsData: () => Promise<EventsData> = async () => eventsData;
const fetchDepartmentsData: () => Promise<DepartmentsData> = async () =>
  departmentsData;
const fetchExcoData: () => Promise<ExcoData> = async () => excoData;

export {
  fetchHomeData,
  fetchRecruitmentData,
  fetchRolesData,
  fetchDepartmentsData,
  fetchEventsData,
  fetchExcoData,
};

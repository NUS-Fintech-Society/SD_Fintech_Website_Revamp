//type
import RecruitmentData from '@data/interface/recruitmentData';
import { HomeData } from '@data/interface/homeData';

//code
import homeData from '@data/homeData';
import recruitmentData from '@data/recruitmentData';

// fake fetch to be replaced by backend calls in the future, used in getStaticProps of page files
const fetchRecruitmentData: () => Promise<RecruitmentData> = async () =>
  recruitmentData;
const fetchHomeData: () => Promise<HomeData> = async () => homeData;

export { fetchHomeData, fetchRecruitmentData };

export interface People {
  role: string;
  title?: string;
  name: string;
  imgSrc: string;
}

export interface Category {
  header: string;
  people: People[];
}
interface ExcoData {
  categories: Category[];
}

export default ExcoData;

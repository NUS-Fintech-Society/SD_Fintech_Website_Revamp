interface ExcoData {
  categories: Category[];
}

export interface Category {
  header: string;
  people: People[];
}

export interface People {
  role: string;
  title?: string;
  name: string;
}

export default ExcoData;

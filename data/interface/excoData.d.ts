interface ExcoData{
    categories: Category[];
}

export interface Category{
    header: string;
    subcategories: SubCategory[];
}

interface SubCategory{
    header: string;
    excos: Exco[];
}

export interface Exco{
    role: string;
    designation: string;
    name: string;
    text: string;
}

export default ExcoData;
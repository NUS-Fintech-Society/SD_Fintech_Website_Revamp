import { WingType } from "@data/homeData";

export interface DepartmentCardProps {
  name: string;
  path: string;
  wingType: WingType;
  cardDescription: string;
  coverImage: {
    src: string;
    alt: string;
  };
}

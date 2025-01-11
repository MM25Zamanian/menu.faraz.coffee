import IItem from "./item";

interface IDataBase {
  data: Record<string, Category>;
}

interface Category {
  name: string;
  enName: string;
  items: IItem[];
}

export default IDataBase;

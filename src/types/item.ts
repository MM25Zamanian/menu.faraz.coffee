interface IItem {
  name: string;
  image: string;
  variants: Record<string, Variant>;
}

interface Variant {
  name: string;
  price: number;
  default?: true;
}

export default IItem;

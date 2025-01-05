interface IItem {
  name: string;
  image: string;
  variants: Record<string, Variant>;
}

interface Variant {
  name: string;
  price: number;
}

export default IItem;

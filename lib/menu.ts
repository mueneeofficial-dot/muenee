export interface Menu {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  time: string;

  // สำหรับอาหารคาว / อาหารที่มีความเผ็ด
  spicy?: string;

  // สำหรับของหวาน / เครื่องดื่ม
  sweetness?: string;

  calories: number;
  difficulty: string;
  tags: string[];
  favorite: boolean;
  ingredients: string[];
  recipe: string[];
}
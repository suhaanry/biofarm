export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'residential' | 'commercial' | 'educational';
  size?: string;
  inStock: boolean;
}

export interface EducationalResource {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'video' | 'guide';
  thumbnail: string;
  readTime?: string;
}
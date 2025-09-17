export interface Product {
  id: string;
  name: string;
  brandId: string;
  category: string;
  description: string;
  details: string;
  price: number;
  inStock: boolean;
  imageUrl: string;
  featured?: boolean;
}

export interface Brand {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

export interface InquiryForm {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  productId?: string;
  serviceId?: string;
}
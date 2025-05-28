export interface CardProps {
  title: string;
  subtitle: string;
}

export interface ListObject extends CardProps {
  id: string;
}

export interface ListProps {
  list: Array<ListObject>;
  noObjsctsMsg: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export type OptionalAttrs = {
  brand?: string;
  ingredients?: string[];
  rating?: number;
  notes?: string;
}

export type Obj = OptionalAttrs & {
  createdAt: string;
  name: string;
  id: string;
};

export interface DetailsProps {
  obj: Obj;
}

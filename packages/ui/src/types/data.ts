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

export interface Items {
  label: string;
  value: string;
  icon: {
    name: string;
    color: string;
  };
}

export interface Cooperator {
  title: string;
  description: string;
  items: Items[];
  duplicateAccountButton?: boolean;
}

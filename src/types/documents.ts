
export type Document = {
  id: string;
  name: string;
  description: string;
  uploaded: boolean;
  required: boolean;
  files?: File[];
};

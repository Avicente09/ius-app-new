export interface IUser {
  id: string | undefined;
  name: string | undefined;
  email: string | undefined;
  authToken?: string | undefined;
  picture?:
    | {
        data: {
          height: number;
          width: string;
          is_silhouette: boolean;
          url: string;
        };
      }
    | undefined;
}

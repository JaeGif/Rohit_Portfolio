export declare interface PublicationType {
  title: string;
  src: string | null;
  reviewed: boolean;
  year: number | null;
  publisher: string | null;
  type:
    | 'Journal'
    | 'Conference'
    | 'Abstract'
    | 'Review'
    | 'Work in Progress'
    | string;
  summary: string | null;
}

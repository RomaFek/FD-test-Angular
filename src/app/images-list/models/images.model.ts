export interface ImageInfo {
    id: string;
    description: string;
    urls: {
      raw: string;
      full: string;
      regular: string;
      small: string;
      thumb: string;
    };
    likes: number;
    user: {
      username: string;
      name: string;
      portfolio_url: string | null;
    };
    created_at: string;
  }


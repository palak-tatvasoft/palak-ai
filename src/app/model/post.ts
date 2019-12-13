export interface Weather {
  hits?: (HitsEntity)[] | null;
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  query: string;
  params: string;
  processingTimeMS: number;
}
export interface HitsEntity {
  created_at: string;
  title: string;
  url?: string | null;
  author: string;
  points: number;
  story_text?: string | null;
  comment_text?: null;
  num_comments: number;
  story_id?: null;
  story_title?: null;
  story_url?: null;
  parent_id?: null;
  created_at_i: number;
  _tags?: (string)[] | null;
  objectID: string;
  _highlightResult: HighlightResult;
}
export interface HighlightResult {
  title: TitleOrUrlOrAuthorOrStoryText;
  url?: TitleOrUrlOrAuthorOrStoryText1 | null;
  author: TitleOrUrlOrAuthorOrStoryText;
  story_text?: TitleOrUrlOrAuthorOrStoryText2 | null;
}
export interface TitleOrUrlOrAuthorOrStoryText {
  value: string;
  matchLevel: string;
  matchedWords?: (null)[] | null;
}
export interface TitleOrUrlOrAuthorOrStoryText1 {
  value: string;
  matchLevel: string;
  matchedWords?: (null)[] | null;
}
export interface TitleOrUrlOrAuthorOrStoryText2 {
  value: string;
  matchLevel: string;
  matchedWords?: (null)[] | null;
}

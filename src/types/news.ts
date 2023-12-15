export interface NewsArticle {
  id: string
  attributes: {
    title: string
    content: string
    createdAt: Date
    updatedAt: Date
    publishedAt: Date
    publishedAtInJST?: string
  }
}

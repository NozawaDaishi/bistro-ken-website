import { defineStore } from 'pinia'
import { NewsArticle } from '@/types/news'
import newsService from '@/services/newsService'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

interface State {
  currentNewsArticle: NewsArticle | null
  newsArticles: NewsArticle[]
}

const useNewsStore = defineStore('useNews', {
  state: (): State => ({
    currentNewsArticle: null,
    newsArticles: [],
  }),
  actions: {
    async getNewsArticles(): Promise<NewsArticle[]> {
      const articles = await newsService().fetchNewsArticles()
      const convertMarkdownToSafeHtml = (markdown: string) => {
        const rawHtml = marked(markdown)
        return DOMPurify.sanitize(rawHtml)
      }
      // マークダウンからHTMLに変換
      this.newsArticles = articles.map((article) => ({
        ...article,
        attributes: {
          ...article.attributes,
          content: convertMarkdownToSafeHtml(article.attributes.content),
        },
      }))

      if (this.newsArticles.length > 0) {
        // 日付順に並べ替えて、最新のニュースを取得
        this.currentNewsArticle = this.newsArticles.sort(
          (a, b) =>
            new Date(b.attributes.publishedAt).getTime() -
            new Date(a.attributes.publishedAt).getTime()
        )[0]
      }
      return this.newsArticles
    },
    selectNewsArticle(newsArticle: NewsArticle): void {
      this.currentNewsArticle = newsArticle
    },
  },
})

export default useNewsStore

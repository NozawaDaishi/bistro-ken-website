import { get } from '@/http/axiosInstance'
import { NewsArticle } from '@/types/news'

type FuncType = {
  fetchNewsArticles: () => Promise<NewsArticle[]>
}

export default function useNewsService(): FuncType {
  const fetchNewsArticles = async (): Promise<NewsArticle[]> => {
    try {
      const response = await get<NewsArticle[]>('news-articles', {})

      // 日本時間への変換（秒を除く）
      const articlesWithConvertedDate = response.map((article) => {
        const publishedAt = new Date(article.attributes.publishedAt)
        const publishedAtInJST = publishedAt.toLocaleString('ja-JP', {
          timeZone: 'Asia/Tokyo',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        })
        return {
          ...article,
          attributes: {
            ...article.attributes,
            publishedAtInJST: publishedAtInJST,
          },
        }
      })

      return articlesWithConvertedDate
    } catch (error) {
      console.error('APIからのデータ取得に失敗しました。', error)
      throw error
    }
  }
  return {
    fetchNewsArticles,
  }
}

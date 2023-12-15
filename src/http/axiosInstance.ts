import axios from 'axios'
const baseURL = import.meta.env.VITE_API_BASE_URL

// axios インスタンスの作成
const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    // 他の共通ヘッダーもここに設定できます
  },
})

// リクエストインターセプタ
axiosInstance.interceptors.request.use(
  (config) => {
    // ここでリクエストの設定を調整できます
    return config
  },
  (error) => {
    // リクエストエラーの処理
    return Promise.reject(error)
  }
)

// レスポンスインターセプタ
axiosInstance.interceptors.response.use(
  (response) => {
    // レスポンスデータを処理
    return response
  },
  (error) => {
    // レスポンスエラーの処理
    // エラーハンドリングのロジックをここに追加
    return Promise.reject(error)
  }
)

/**
 * GETリクエストを実行する関数
 * @param entryPoint - エントリーポイント
 * @param params - クエリパラメータ
 * @returns レスポンスデータを含むPromiseオブジェクト
 */
export const get = async <T>(
  entryPoint: string,
  params: Record<string, unknown> = {}
): Promise<T> => {
  const response = await axiosInstance.get<{ data: T }>(`/${entryPoint}`, {
    params,
  })
  return response.data.data
}

/**
 * POSTリクエストを実行する関数
 * @param entryPoint - エントリーポイント
 * @param data - ボディデータ
 * @returns レスポンスデータを含むPromiseオブジェクト
 */
export const post = async <T>(
  entryPoint: string,
  data: Record<string, unknown>
): Promise<T> => {
  const response = await axiosInstance.post<T>(`/${entryPoint}`, data)
  return response.data
}

export default axiosInstance

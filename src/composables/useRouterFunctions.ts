import { RouteParamsRaw, useRouter } from 'vue-router'

type FuncType = {
  routerPush: (name: string, params?: RouteParamsRaw) => void
  routerBack: () => void
}

/**
 * @return {Function} routerPush
 * @return {Function} routerBack
 */
export default function useRouterFunctions(): FuncType {
  const { back, push } = useRouter()

  const routerPush = (name: string, params?: RouteParamsRaw): void => {
    push({ name, params })
  }

  const routerBack = (): void => {
    back()
  }

  return { routerPush, routerBack }
}

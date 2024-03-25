// react-query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

//组件渲染介绍前展示加载
import { Suspense } from 'react';
import React from 'react'
import ReactDOM from 'react-dom/client'

//import { HelmetProvider } from 'react-helmet-async';
import 'virtual:svg-icons-register';
import App from '@/App'


// i18n
import './locales/i18n';
// tailwind css
import './theme/index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3, // 失败重试次数
      staleTime: 10_1000, // 数据变得 "陈旧"（stale）的时间 10s
      refetchOnWindowFocus: false, // 禁止窗口聚焦时重新获取数据
      refetchOnReconnect: false, // 禁止重新连接时重新获取数据
      refetchOnMount: false, // 禁止组件挂载时重新获取数据
    },
  },
});
async function enableMocking() {
  // if (process.env.NODE_ENV !== 'development') {
  //   return
  // }

  const { worker } = await import('./_mock/index')

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start({ onUnhandledRequest: 'bypass' })
}
enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Suspense>
          <App />
        </Suspense>
      </QueryClientProvider>
    </React.StrictMode>,
  )
}
)
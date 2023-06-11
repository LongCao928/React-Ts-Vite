import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => ({ message: 'Hello Data Router!' }),
    Component() {
      const data = useLoaderData() as { message: string }
      return <h1>{data.message}</h1>
    },
  },
])

export default function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<p>Loading...</p>}
    ></RouterProvider>
  )
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose())
}

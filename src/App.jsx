import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import ErrorPage from "./components/ErrorPage"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <TaskList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/NewTask",
    element: <TaskForm />
  },
  {
    path: "/EditTask/:id",
    element: <TaskForm />
  }
])
function App() {

  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Admin from "../Pages/Admin/Admin";
import Users from "../Pages/Users/Users";
import Question from "../Pages/Questions/Questions";
import Adminlogin from "../Pages/Adminlogin/Adminlogin";
import Userlogin from "../Pages/Userlogin/Userlogin";
import VoteQuestion from "../Pages/VoteQuestion/VoteQuestion";
import ViewAdminQuestion from "../Pages/ViewAdminQuestion/ViewAdminQuestion";
import ViewAllQuestions from "../Pages/ViewAllQuestions/ViewAllQuestions";
import ViewAnswers from "../Pages/ViewAnswers/ViewAnswers";
import PostAnswer from "../Pages/PostAnswer/PostAnswer";
import YourComponent from "../Pages/YourComponent/YourComponent";

// Define the routes
export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/admin/login',
        element: <Admin />
      },
      {
        path:'/users/register',
        element:<Users></Users>
      },
      {
        path:'/admin/questions',
        element:<Question></Question>
      },
      {
        path:'/admin/logout',
        element:<Adminlogin></Adminlogin>
      },
      {
        path:'/users/login',
        element:<Userlogin></Userlogin>
      },
      {
        path:'/manage-question',
        element:<Question></Question>
      },
      {
        path:'/view-admin-question/:id',
        element:<ViewAdminQuestion></ViewAdminQuestion>
      },
      {
        path:'/vote/:id',
        element:<VoteQuestion></VoteQuestion>
      },
      {
        path:'/questions/view',
        element:<ViewAllQuestions></ViewAllQuestions>
      },
      {
        path: "/answers/view",
        element: <ViewAnswers></ViewAnswers>
      },
      {
        path: "/questions/answer",
        element: <PostAnswer></PostAnswer>
      },
      {
        path: "/startpolling",
        element: <YourComponent></YourComponent>
      }
      

      
      
    ],
  },
]);

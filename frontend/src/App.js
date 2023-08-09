import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { AuthProvider } from "./providers/authProvider";
import { QuizContextProvider } from "./providers/quizProvider";
import { useAuth } from "./providers/authProvider";
import Layout from "./components/main/Layout";
import Sidebar from "./components/main/Sidebar";
import Dashboard from "./pages/main/Dashboard";
import Planner from "./pages/main/Planner";
import PlaylistsPage from "./pages/main/PlaylistPage";
import Toolbox from "./pages/main/Toolbox";
import Matiere from "./components/main/library/matiere/Matiere";
import Item from "./components/main/library/item/Item";
import Colors from "./components/common/Colors";
import LibraryPage from "./pages/main/LibraryPage";
import AnnalesPage from "./pages/main/AnnlaesPage";
import Quiz from "./pages/exam/Quiz";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";

const ProtectedRoute = () => {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/auth/signin" replace={true} />;
};

function App() {
  return (
    <div className="App">
      <QuizContextProvider>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Layout Sidebar={Sidebar}><Dashboard /></Layout>} />
                <Route path="/library/" element={<Layout Sidebar={Sidebar}><LibraryPage /></Layout>} />
                <Route path="/library/matiere/:id?" element={<Layout Sidebar={Sidebar}><Matiere /></Layout>} />
                <Route path="/library/item/:id?" element={<Layout Sidebar={Sidebar}><Item /></Layout>} />
                <Route path="/annales/" element={<Layout Sidebar={Sidebar}><AnnalesPage /></Layout>} />
                <Route path="/planner/" element={<Layout Sidebar={Sidebar}><Planner /></Layout>} />
                <Route path="/playlists/" element={<Layout Sidebar={Sidebar}><PlaylistsPage /></Layout>} />
                <Route path="/toolbox/" element={<Layout Sidebar={Sidebar}><Toolbox /></Layout>} />
                <Route path="/quiz/" element={<Quiz />} />
                <Route path="/colors/" element={<Colors />} />
              </Route>
              <Route path="/auth/signin" element={<Signin />} />
              <Route path="/auth/signup" element={<Signup />} />
              <Route path="*" element={<Navigate to="/" replace={true} />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </QuizContextProvider>
    </div>
  );
}

export default App;

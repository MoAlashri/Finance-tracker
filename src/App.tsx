import {BrowserRouter,Routes, Route} from "react-router"
import Dashboard from "./pages/Dashboard"
import Transactions from "./pages/Transactions"
import Accounts from "./pages/Accounts"
import Budgets from "./pages/Budgets"
import Goals from "./pages/Goals"
import Bills from "./pages/Bills"
import Settings from "./pages/Settings"
import AppLayout from "./ui/AppLayout"
import useTheme from "./hooks/useTheme"

export default function App() {
  useTheme();
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="budgets" element={<Budgets />} />
        <Route path="goals" element={<Goals />} />
        <Route path="bills" element={<Bills />} />
        <Route path="settings" element={<Settings />} />
        </Route>
    </Routes>
    </BrowserRouter>
    
  )
}

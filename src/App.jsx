import {Routes, Route} from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Balance />} />
          <Route path="income" element={<Income />} />
          <Route path="expense" element={<Expense />} />
        </Route>
      </Routes>
    </Routes>
  )
};
export default App;

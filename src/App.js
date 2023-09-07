import 'bootstrap/dist/css/bootstrap.min.css';

import CostForm from './components/CostForm'
import ReportGenerator from './components/ReportGenerator';

function App() {
  return (
    <main className="d-flex flex-column justify-content-center align-items-center vh-100">
      <CostForm />
      <ReportGenerator />
    </main>
  );
}

export default App;

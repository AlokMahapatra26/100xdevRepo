
import { RevenueCard } from "./components/RevenueCard"

function App() {
  

  return (
    <>
    <div className="grid grid-cols-3">
    <RevenueCard title={"Amount Pending"} orderCount={788} amount={13450.89}/>
    </div>
      
    </>
  )
}

export default App

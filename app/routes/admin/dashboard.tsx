import Header from "components/Header"

const Dashboard = () => {
    const user = {name: 'Adrain'};
  return (
    <main className="dashboard wrapper">
      <Header title={`welcome ${user?.name ?? 'Guset'}`}
      description=' Track activiy, trennds and popular destinations in real time'/>
      Dashboard page contents
    </main>
  )
}

export default Dashboard

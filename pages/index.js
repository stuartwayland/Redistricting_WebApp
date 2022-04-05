import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import Run_Sim from '../components/run_sim'


export default function Index(props){


  return(
  <section>
      <h1> Redistricting Visualization</h1>
      <h2> States </h2>
      <Run_Sim></Run_Sim>
      <h2> Grids </h2>
      <p>Grids Coming Soon</p>


  </section>
)
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}


import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import styles from '../styles/Home.module.css'

export default function Index(props){
  return(
  <section>
      <h1> Redistricting Visualization</h1>
      <h2> States </h2>
      <h2> Grids </h2>
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


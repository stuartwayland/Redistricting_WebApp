// state.js
import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Animation from '../../components/animation'
//import fs from 'fs'
//import path from 'path'


function State(props) {

  return (
    <section>
      <h2> {props.state} </h2>
      <p>The Sum of Ndists and Nsims is {props.data2}</p>
       <Animation images={props.images} list_length = {props.number_images}/>
    </section>
  )
}

State.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}

export async function getServerSideProps(context){

  const res = await fetch('http://127.0.0.1:5757/health-check')
  const data = await res.json()

        const { state } = context.query
        const { nsims } = context.query
        const { ndists } = context.query
        const {number_images} = context.query

    const res1 = await fetch('http://127.0.0.1:5757/post-check?a='+ nsims + '&b=' + ndists)
    const data2 = await res1.json()

    const res2 = await fetch('http://127.0.0.1:5757/run_sim?name='+state+'&nsims='+nsims+'&ndists='+ndists)
    var images = await res2.json();
    //var list_length = image_list.length
    //for(let i = 0; i<list_length; i++){
    //    images.push(fs.readFileSync(dirPath + '/'+image_list[i]).toString());
    //}

  return {
    props: {
      //message,
      //filename,
     // image_list,
      //dirPath,
     // images,
     state,
     nsims,
     ndists,
     number_images,
     data,
     data2,
     images,
    }, 
  }
}

export default State
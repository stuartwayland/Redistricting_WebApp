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
       <Animation images={props.images} list_length = {props.list_length}/>
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

        const { state } = context.query
        const { nsims } = context.query
        const { ndists } = context.query

      //  let dirPath = path.resolve('public/'+ state);
      //  var image_list = fs.readdirSync(dirPath)
  //let filename = dirPath
  //let message = image_list.length
  //var images = fs.readFileSync('/Users/stuartwayland/Downloads/Redistricting/texas_enc.txt').toString();

    //const res = await fetch(`http://127.0.0.1:8892/health-check`);

    var images = [];
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
     images,
     //res,
     
    }, 
  }
}

export default State
// Animation.js 
import {Component} from 'react'
import Image from 'next/image'
export default class Animation extends Component {
    constructor(props) {
        super(props);
        this.images = props.images
        this.next = this.next.bind(this);
        this.state = {index: 0};
        this. list_length = props.list_length
    }

    componentDidMount() {
        this.next();
    }

    next() {
        setTimeout(() => {
            this.setState({index: (this.state.index+1)%(this.list_length-1)});
            this.next();
        }, 800);
    }

    render() {
        return (
            <Image src = {`data:image/png;base64,${this.images[this.state.index]}`} height = {400} width={400}  />
             // source={this.images[this.state.index]}
            // src = {this.images}
              //style={styles.image}
          //  />
        )
    }
}
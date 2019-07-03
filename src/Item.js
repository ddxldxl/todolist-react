import React,{Component} from 'react'

class Item extends Component {
    constructor(props){
        super(props)
        this.delData = this.delData.bind(this)
    }
    delData(){
        const {handleDel,index} = this.props
        handleDel(index)
    }
    render(){
        const {content} = this.props
        return (
            <div onClick={this.delData.bind(this)}>{content}</div>
        )
    }
}

export default Item
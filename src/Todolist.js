import React,{Component,Fragment} from 'react';
import Item from './Item'
// function App() {
//   return (
//     <div>
//       hello react
//     </div>
//   );
// }
class Todolist extends Component {
	constructor(props) {
	    super(props)
		this.state = {
			list:[],
			text:''
		}
		this.setData = this.setData.bind(this)
		this.getData = this.getData.bind(this)
		this.delLi = this.delLi.bind(this)
	}
	getData(){
		this.setState({
			list:[...this.state.list,this.state.text],
			text:''
		})
	}
	setData(e){
		this.setState({
			text:e.target.value
		})
	}
	delData(index) {
		let list = [...this.state.list]
		list.splice(index,1)
		this.setState({
			list
		})
	}
	delLi(index){
		let list = [...this.state.list]
		list.splice(index,1)
		this.setState({
			list
		})
	}
	getItem(){
		return (
			this.state.list.map((item,index)=>{
				return (
					<Item 
						content={item} 
						key={index} 
						index={index} 
						handleDel={this.delLi}
					/>
				)
			})
		)
	}
  render() {
		return (
		  <Fragment>
				<div>
					<input type="text" value={this.state.text} onChange={this.setData}/>
					<button className="btn" style={{color:'#fff',background:'red'}} onClick={this.getData}>添加</button>
				</div>
				<ul>
					{
						this.getItem()
					}
				</ul>
		  </Fragment>
		)
	}
}
export default Todolist;

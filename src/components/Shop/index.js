import {Component} from 'react'
import {connect} from 'react-redux'
import {buyLaptop,buyMobile, fetchUsers} from '../../redux/actions'
import './index.css'

class Shop extends Component{
    /* state={
        noOfLaptops:100
    } 

    buyLaptop=()=>{
        this.setState({noOfLaptops:this.state.noOfLaptops-1})
    } */
    
    render(){
        return(
            <div >
                <h1>Welcome to Vshop</h1>
                <div className='container'>
                <div className='card'>
                    <h1>hp Laptop</h1>
                    <p>Available: {this.props.noOfLaptops}</p>
                    <button onClick={this.props.buyLaptop} className='button'>Buy</button>
                </div>
                <div className='card'>
                    <h1>Mobiles</h1>
                    <p>Available: {this.props.noOfMobiles}</p>
                    <button onClick={this.props.buyMobile} className='button'>Buy</button>
                </div>
                <div className='card'>
                    <h1>Constumers</h1>
                    <p>No. of customers: {this.props.noOfUsers}</p>
                    <button onClick={this.props.fetchUsers} className='button'>Fetch Customers</button>
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        noOfLaptops:state.laptops.noOfLaptops,
        noOfMobiles:state.mobiles.noOfMobiles,
        noOfUsers:state.users.users.length
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        buyLaptop:()=>dispatch(buyLaptop()),
        buyMobile:()=>dispatch(buyMobile()),
        fetchUsers:()=>dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Shop)
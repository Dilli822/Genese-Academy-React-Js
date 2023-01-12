import React,{Component} from "react";
import Practice_State from "./practice_state";

class Practice extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            address: "",
            date: new Date()
        }
    };


    // arrow functins here which automatically binds the function with class 
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // overrding the component method in react
    componentDidMount(){
        console.log("this is component did mount method in react js");
        let self = this;
        this.state.timer = setInterval(function(){
            self.setState({
                date: new Date()
            })
        }, 1000)
    }
    
    componentWillUnmount(){
        console.log("Component is unmounted");
    }


    render(){    
        const get_time = new Date();
        get_time.getHours();
        const checkHours = 12;
  

            if(get_time < checkHours){
                console.log("It is am");
                var dc = "am";
                
            } else{
                console.log("It is AM");
                var dc = "pm";
            }
  
        return (
            <div>
                <h3>Practice Component</h3>
                <input type="text" name="username" onChange={this.handleChange}></input>
                <input type="text" name="address" onChange={this.handleChange}></input>
                <div>{this.state.username}</div> <br></br>
                <div>{this.state.address}</div> <br></br>


                <div>
                    <h3> Digital_Clock </h3>
                    <div style={{display: "flex"}}> 
                    <div>{this.state.date.getHours()-12} Hours:</div>
                    <div>{this.state.date.getMinutes()} min:</div>
                    <div>{this.state.date.getSeconds()}s</div>
                    <span>{dc}</span>
                    

                    </div>     
              
                </div>
        
                <Practice_State username= {this.state.username} address={this.state.address} />
            </div>
        )
    }
}

export default Practice;
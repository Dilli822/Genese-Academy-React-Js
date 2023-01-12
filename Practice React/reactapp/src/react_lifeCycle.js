import React, {Component} from "react";

class React_LifeCycleMethod extends Component{
    // componentdidmount
    // no need bind with class 
    componentDidMount(){
        console.log("Component Did Mount!");
    }

    componentWillUnmount(){
        console.log("This is component unmount once component is rendered it will gets destroyed!");
    }
    render(){
        return(
            <div>
                hello from react lifecycle method component!
                <div>
                    <h3>React lifecycle Methods is by default run itself</h3>
                    <span>using any react lifecycle method means we are already overrding the method</span>
                    <h4>componentDidMount</h4>
                    <p>This lifecycle method is widely used for api call.</p>

                    <h4>componentWillUnmount</h4>
                    <p>It gets called when DOM of component will gets destroyed.</p>
                </div>
            </div>
        )
    }
};

export default React_LifeCycleMethod;
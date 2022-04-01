
import React, {Component} from 'react';

export default class MyThirdComponent extends Component{

    // LifeCycle Methods in React JS
    componentDidMount(){
        // this is most used method lifecycle in React Js
        console.log('this is componentDid Mount ---> ')
    }

    componentWillUnmount(nextProps, nextContext) {
        console.log(nextProps)
        console.log(nextContext)
    }

    componentWillUnmount(){
        console.log('This is component will Unmount ')
    }

    render(){
        return (
            <div>
                This is my Third Component!
            </div>
        )
    }
}
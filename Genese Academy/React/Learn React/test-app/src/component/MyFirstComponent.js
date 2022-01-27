
import React, {Component} from 'react';
import MySecondComponent from './MySecondComponent'
import MyThirdComponent from './MyThirdComponent';

export default class MyFirstComponent extends Component{
    render() {
        return (
            <div>
                This is my First Component!
                <MySecondComponent/>
                <MyThirdComponent/>
            </div>
        )
    }
}

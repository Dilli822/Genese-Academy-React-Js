
// This is simple Material-i- Home Component

import React, {Component} from "react";
import Header from './material-header';
import FormExample from './form-material';

class MaterialHome extends Component {
    render(){
        return (
            <div>
                <Header />
                <FormExample />
            </div>
        )
    }
}

export default MaterialHome;
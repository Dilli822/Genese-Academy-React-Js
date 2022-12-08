
// This is simple Material-i- Home Component

import React, {Component} from "react";
import Header from './material-header';
import FormExample from './form-material';
import MaterialGrid from './material-grid';
import MaterialButton from './material-button';
import MaterialDialogue from "./material-dialogue";

class MaterialHome extends Component {
    render(){
        return (
            <div>
                <Header />
                <FormExample />
                <MaterialGrid />
                <MaterialButton />
                <MaterialDialogue />
            </div>
        )
    }
}

export default MaterialHome;
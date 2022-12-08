
// import React, {Component} from "React";
import { createTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import green from '@material-ui/core/colors/green';

// use material.io/resources/color for professional colors 

export const theme = createTheme({
    palette: {
      primary: orange[500],
    },
    secondary: {
        main: green[500]
    },
  });


// class MaterialTheme extends Component {
//     render(){
//         return(
//             <div>
                
//             </div>
//         )
//     }
// }


import React, {Component} from 'react';
import React, {Component} from 'react';



class Form extends Component{
  constructor(super){
    super(props);
  }
    render(){

      const items=this.props.data.map(singleItem=>
        <div className={singleItem.cName} >
           <a className={singleItem.cLink} href={singleItem.url}>
              {singleItem.title}
           </a>
        </div>
      );
      return(
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
          <ul className="mynav navbar-nav col-8">
            {items}
          </ul>
        </nav>
      );
    }
}

export default Form;
    }
}

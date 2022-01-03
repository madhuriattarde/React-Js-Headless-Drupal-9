import React from 'react';
import Article from "./Article";
import './Article.css';

export default class Articles extends React.Component {

  render() {
    let { data } = this.props;
    
    return (
      <div className='articles'>
        <h1>Articles</h1>
        {data !== null &&
        data !== undefined &&
        data.length > 0 ?
          data.map(item => <Article {...item} key={item.nid}/>)
          :
          
          <div>No Articles found.</div>
        }
      </div>
    );
  }
}
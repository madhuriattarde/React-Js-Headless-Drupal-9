import React from 'react';
import './Article.css';

export default class Article extends React.Component {
  
  render() {
    const node = this.props;
    return (
      <div className='article'>
        <div className='article__name'><h2><a href={node.id} target="_blank">{node.title}</a></h2></div>
        <div className='article__body'> {node.body.substring(0, 100)} </div>
        <div className='article__delete'><button onClick={e => (node.nid)}>x</button></div>
      </div>
    );
  }

}
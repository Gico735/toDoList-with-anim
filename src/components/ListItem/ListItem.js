import React from 'react';
import './ListItem.css'


class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.task,
    }
  }

  componentWillReceiveProps() {
    this.setState({
      ...this.props.task
    })
  }

  render() {
    const { id , desc, done} = this.state
    return (
      <div className='listitem'>
        <div className='listitem__key'>{id}</div>
        <div className='listitem__name'>{desc}</div>
        <div data-task={id} onClick={this.props.checkTask}  className='listitem__check'>{done === false ? 'false' : 'true'}</div>
        <div data-task={id} onClick={this.props.removeTask} className='listitem__remove'>[X]</div>
      </div>
    )
  }
}


export default ListItem
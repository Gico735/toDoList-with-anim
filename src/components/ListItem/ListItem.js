import React from 'react';
import './ListItem.css'


class ListItem extends React.Component {

  render() {
    const { id, desc, done, posId } = this.props.task
    const { checkTask, removeTask } = this.props
    const top = 135 * posId;
    return (
      <div className='listitem' style={{top: top}}>
        <div className='listitem__key'>{id}</div>
        <div className='listitem__name'>{desc}</div>
        <div data-task={id} onClick={checkTask} className='listitem__check'>{done === false ? 'false' : 'true'}</div>
        <div data-task={id} onClick={removeTask} className='listitem__remove'>[X]</div>
      </div>
    )
  }
}


export default ListItem
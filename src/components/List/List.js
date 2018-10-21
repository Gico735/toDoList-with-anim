import React from 'react';
import './List.css'
import ListItem from '../ListItem/ListItem'
import FlipMove from 'react-flip-move';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      tasks: [
        {
          id: 1,
          desc: 'test_1',
          done: false
        },
        {
          id: 2,
          desc: 'test_2',
          done: false
        },
        {
          id: 3,
          desc: 'test_3',
          done: false
        },
        {
          id: 4,
          desc: 'test_4',
          done: false
        },
      ]
    }
  }

  changeInput = (e) => {
    const input = e.target.value
    this.setState({ input })
  }

  addTask = () => {
    const tasks = this.state.tasks
    let newId = 0
    tasks.map(el => {
      if (el.id > newId) {
        return newId = el.id
      }
    })
    const newTask = {
      id: newId + 1,
      desc: this.state.input,
      done: false
    }
    tasks.push(newTask)
    this.setState({
      input: '',
      tasks
    })
  }

  removeTask = (e) => {
    const taskId = +e.target.dataset.task
    const tasks = this.state.tasks
    tasks.map((el, i) => {
      if (el.id === taskId) {
        return tasks.splice(i, 1)
      }
    })
    this.sortTasks(tasks)
  }

  checkTask = (e) => {
    const taskId = +e.target.dataset.task
    const tasks = this.state.tasks
    tasks.map(el => {
      if (el.id === taskId) {
        return el.done = !el.done
      }
    })
    this.sortTasks(tasks)
  }

  sortTasks = (tasks) => {
    tasks.map(() => {
      tasks.map((elem, i) => {
        if (i === tasks.length - 1) return
        if (elem.done < tasks[i + 1].done) {
          const old = elem
          tasks[i] = tasks[i + 1]
          tasks[i + 1] = old
        } else if (elem.done === tasks[i + 1].done) {
          if (elem.id > tasks[i + 1].id) {
            const old = elem
            tasks[i] = tasks[i + 1]
            tasks[i + 1] = old
          }
        }
      })
    })
    this.setState({ tasks })
  }

  render() {
    const { input, tasks } = this.state
    return (
      <div className='List'>
        <div className='add'>
          <input value={input} onChange={this.changeInput} type='text' className='add__input' />
          <button onClick={this.addTask} className='add__btn'>ADD</button>
        </div>
        <div className='list__wrap'>
          <FlipMove>
            {
              tasks.map(el => {
                console.log(el)
                return (
                  <ListItem key={el.id} task={el} checkTask={this.checkTask} removeTask={this.removeTask} />
                )
              })
            }
          </FlipMove>
        </div>
      </div>
    )
  }
}


export default List
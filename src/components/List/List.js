import React from 'react';
import './List.css'
import ListItem from '../ListItem/ListItem'

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 'add',
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
    const newTask = {
      id: tasks.length + 1,
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
    const taskId = +e.target.dataset.task - 1
    const tasks = this.state.tasks
    tasks.splice(taskId, 1)
    this.sortTasks(tasks)
  }

  checkTask = (e) => {
    const taskId = +e.target.dataset.task
    const tasks = this.state.tasks
    tasks.map((el, i) => {
      if (el.id === taskId) {
        el.done = !el.done
      }
    })
    console.log(tasks[taskId], taskId)
    // this.setState({ tasks })
    this.sortTasks(tasks)
  }

  sortTasks(tasks) {
    tasks.map((el, i) => {
      tasks.map((elem, j) => {
        if (j === tasks.length - 1) return
        if (elem.done < tasks[j + 1].done) {
          const old = elem
          tasks[j] = tasks[j + 1]
          tasks[j + 1] = old
          console.log(tasks)
        } else if (elem.done === tasks[j + 1].done) {
          if (elem.id < tasks[j + 1].id) {
            const old = elem
            tasks[j] = tasks[j + 1]
            tasks[j + 1] = old
            console.log(tasks)
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
          {
            tasks.map((el, i) => {
              return (
                <ListItem key={i} task={el} checkTask={this.checkTask} removeTask={this.removeTask} />
              )
            })
          }
        </div>
      </div>
    )
  }
}


export default List
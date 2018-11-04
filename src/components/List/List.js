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
          done: false,
          posId: 0
        },
        {
          id: 2,
          desc: 'test_2',
          done: false,
          posId: 1
        },
        {
          id: 3,
          desc: 'test_3',
          done: false,
          posId: 2
        },
        {
          id: 4,
          desc: 'test_4',
          done: false,
          posId: 3
        },
        {
          id: 5,
          desc: 'test_5',
          done: false,
          posId: 4
        }
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

  // sortTasks = (tasks) => {
  //   tasks.forEach((el, i) => {
  //     tasks.forEach((elem, j) => {
  //       if (j === tasks.length - 1) return
  //       if (i === tasks.length - 1) return
  //       console.log(el.id, el.posId, '>', tasks[j + 1].posId, tasks[j + 1].id, 'asdasd', i)
  //       if ((el.done < tasks[j + 1].done) && (el.posId < tasks[j + 1].posId)) {
  //         const old = el.posId
  //         tasks[i].posId = tasks[j + 1].posId
  //         tasks[j + 1].posId = old
  //         console.log('asd')
  //       } else if (el.done === tasks[j + 1].done) {
  //         if (el.posId > tasks[j + 1].posId) {
  //           const old = el.posId
  //           tasks[i].posId = tasks[j + 1].posId
  //           tasks[j + 1].posId = old
  //           console.log('qwe')
  //         }
  //       }
  //     })
  //   })
  //   this.setState({ tasks })
  // }

  sortTasks = (tasks) => {
    tasks.forEach(el1 => {
      tasks.forEach(el2 => {
        if (el1.id === el2.id || el1.id > el2.id) return
        if ((el1.done < el2.done) && (el1.posId < el2.posId)) {
          const old = el1.posId
          el1.posId = el2.posId
          el2.posId = old
        } else if ((el1.done === el2.done)) {
          if (el1.id === 3 || el1.id === 1) {
            console.log(el1.id, el2.id)
          }
          if ((el1.posId > el2.posId) && (el1.id < el2.id)) {
            const old = el1.posId
            el1.posId = el2.posId
            el2.posId = old
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
        <div className='list__add'>
          <input value={input} onChange={this.changeInput} type='text' className='add__input' />
          <button onClick={this.addTask} className='add__btn'>ADD</button>
        </div>
        <div className='list__wrap'>
          {/* <FlipMove> */}
          {
            tasks.map(el => {
              console.log(el)
              return (
                <ListItem key={el.id} task={el} checkTask={this.checkTask} removeTask={this.removeTask} />
              )
            })
          }
          {/* </FlipMove> */}
        </div>
      </div>
    )
  }
}


export default List
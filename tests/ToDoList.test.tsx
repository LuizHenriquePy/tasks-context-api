import React from "react"
import { render, screen } from "@testing-library/react"
import ToDoList from '../src/pages/ToDoList'
import userEvent from '@testing-library/user-event'
import { AppContextProvider } from '../src/context/AppContextProvider'


describe('Page ToDoList', () => {
  it('Testa se é possível adicionar uma nova tarefas', async () => {
    const user = userEvent.setup()
    render(<AppContextProvider><ToDoList /></AppContextProvider>)
    const inputAddTask = screen.getByRole('textbox')
    const buttonAddTask = screen.getByRole('button', { name: /add task/i })
    const text = 'texto para testar a tarefa'

    await user.type(inputAddTask, text)
    await user.click(buttonAddTask)

    const task = await screen.findByRole('heading', {
      name: text
    })

    expect(task).toBeVisible()
    expect(task).toBeInTheDocument()
  })
  it('Testa se é possível deletar uma task', async () => {
    const user = userEvent.setup()
    render(<AppContextProvider><ToDoList /></AppContextProvider>)
    const buttonDeleteTask = screen.queryAllByTestId('button-delete-task')
    const taskList = screen.queryAllByTestId('tasks')

    expect(taskList.length).toEqual(3)

    await user.click(buttonDeleteTask[0])

    expect(screen.queryAllByTestId('tasks').length).toEqual(2)
  })
})

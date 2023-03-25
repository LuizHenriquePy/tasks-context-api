import React from "react"
import { render, screen } from "@testing-library/react"
import ToDoList from '../src/pages/ToDoList'
import userEvent from '@testing-library/user-event'
import { AppContextProvider } from '../src/context/AppContextProvider'
import { useAppContext } from "../src/context/useAppContext"


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
  it('Testa se é possível editar uma task', async () => {
    const user = userEvent.setup()
    render(<AppContextProvider><ToDoList /></AppContextProvider>)

    const inputAddTask = screen.getByRole('textbox')
    const buttonAddTask = screen.getByRole('button', { name: /add task/i })
    const text = 'texto para testar a tarefa'
    await user.type(inputAddTask, text)
    await user.click(buttonAddTask)

    const buttonEditTask = screen.queryAllByTestId('button-edit-task')
    await user.click(buttonEditTask[0])

    const buttonEditSave = screen.getByTestId('button-edit-save')
    const inputEditTask = screen.getByTestId('input-edit-task')
    await user.type(inputEditTask, 'test')
    await user.click(buttonEditSave)

    const task = screen.getByRole('heading', { name: text + 'test' })

    expect(task).toBeInTheDocument()
    expect(task).toBeVisible()
  })
  it('Testa se é possível marcar e desmarcar uma task como concluída', async () => {
    const user = userEvent.setup()
    render(<AppContextProvider><ToDoList /></AppContextProvider>)

    const checkboxCompletedTask = screen.queryAllByTestId('checkbox')
    await user.click(checkboxCompletedTask[0])

    const checkboxChecked = screen.getByRole('checkbox', { checked: true })

    expect(checkboxChecked).toBeInTheDocument()
    expect(checkboxChecked).toBeVisible()

    await user.click(checkboxChecked)

    const isExistCheckboxChecked = screen.queryByRole('checkbox', { checked: true })
    expect(isExistCheckboxChecked).toBe(null)
  })
})

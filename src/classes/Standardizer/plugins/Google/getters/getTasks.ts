import Google from '../Google'
import { Task } from '../../../../../types/schemas/TaskList'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

// eslint-disable-next-line
const TASKS_FILE = 'Takeout/Tasks/Tasks.json'

interface GoogleTasks {
  kind: string,
  items: Array<{
    kind: string,
    id: string,
    title: string,
    updated: string,
    items: Array<{
      assignee_email?: string,
      kind: string,
      creator_email?: string,
      assigned_by_email?: string,
      id: string,
      title?: string,
      notes?: string,
      task_type: string,
      updated: string,
      selfLink?: string,
      status: string
    }>,
    selfLink: string
  }>
}

Google.prototype.getTasks = withAutoParser(async parser => {
  if (!(await parser.filesExist([TASKS_FILE]))) {
    return null
  }

  const list = await parser.parseAsJSON<GoogleTasks>(TASKS_FILE)
  const taskList = list.items.map((tList) => ({
    title: tList.title,
    updateAt: new Date(tList.updated),
    tasks: tList.items.map((task) => ({
      name: task.title ?? 'No title',
      description: task.notes,
      updateAt: new Date(task.updated),
      status: task.status === 'needsAction' ? 'todo' : 'done',
    } as Task)),
  }))

  return { data: taskList }
})

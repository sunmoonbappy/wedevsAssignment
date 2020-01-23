export const isNotCheckedAll = ( todos = [] ) => todos.find(todo => !todo.isCompleted)

export const filterByStatus = (todosList = [], status = '', id) => {
    switch (status) {
      case 'ACTIVE':
        return todosList.filter(item => !item.isCompleted)
      case 'COMPLETED':
        return todosList.filter(item => item.isCompleted)
      case 'REMOVE':
        return todosList.filter(item => item.id !== id)
      default:
        return todosList
    }
  }
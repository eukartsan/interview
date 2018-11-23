export const onIncrement = (id) => ({
    type: 'INCREMENT',
    id,
})

export const onDecrement = (id) => ({
    type: 'DECREMENT',
    id,
})

export const onAddCounter = (id) => ({
    type: 'ADD',
    id,
})

export const onDeleteCounter = (id) => ({
    type: 'DELETE',
    id,
})
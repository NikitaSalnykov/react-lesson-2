import { Grid, GridItem, Todo } from 'components';

export const TodoList = ({ todosArr, handleDelete }) => {
  return (
    <Grid>
      {todosArr.map((todo, index) => (
        <GridItem key={todo.id}>
          <Todo
            name={todo.text}
            number={index + 1}
            handleDelete={handleDelete}
            id={todo.id}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

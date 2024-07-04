import { MongoClient } from "mongodb";

import TodoList from "@/components/TodoList";

export default function Home(props) {
  return <TodoList todos={props.todos} />;
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://sachin:XDP2FM6vVwNdFjx6@cluster0.nilbj3c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );

  const collection = client.db("todos").collection("todos");
  const todos = await collection.find().toArray();

  return {
    props: {
      todos: todos.map((t) => {
        return {
          id: t._id.toString(),
          title: t.title,
          isDone: t.isDone,
        };
      }),
    },
  };
}

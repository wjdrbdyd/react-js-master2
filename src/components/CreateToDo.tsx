import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { catergoryState, toDoState } from "../atoms";
interface IForm {
  toDo: string;
}
const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(catergoryState);
  // const value = useRecoilValue(toDoState); // 값만
  // const modFn = useSetRecoilState(toDoState); // 변경함수만
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a To Do"
      />
      <button>Add</button>
    </form>
  );
};

export default CreateToDo;

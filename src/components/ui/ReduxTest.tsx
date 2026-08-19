import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setTheme } from "../../store/slices/themeSlice";
import Button from "./Button";

function ReduxTest() {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <div>
      <div className="flex justify-between items-center py-20" >
        <Button size="md" variant="primary" className="cursor-pointer text-white" onClick={()=>dispatch(setTheme("light"))}
          >
          Light
        </Button>
        <Button size="md" variant="secondary" className="cursor-pointer text-red-950" onClick={()=>dispatch(setTheme("dark"))}
          >
          Dark
        </Button>
        <Button 
          size="md"
          variant="danger"
          className="cursor-pointer text-white"
          onClick={()=>dispatch(setTheme("system"))}
          >
          system
        </Button>
      </div>
      Current theme: {theme}
    </div>
  );
}

export default ReduxTest;
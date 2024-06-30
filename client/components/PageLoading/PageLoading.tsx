import { Div } from "../Div";
import { Spinner } from "../ui/Spinner";

export const PageLoading = () => (
  <Div className="flex justify-center items-center h-[200px] rounded-md bg-white dark:bg-secondary-light std-margin">
    <Spinner />
  </Div>
);

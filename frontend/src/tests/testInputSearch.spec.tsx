import renderer from "react-test-renderer";
import SearchInput from "../components/SearchPage";

it("Should return the searched valued input on url", () => {
    const component = renderer.create(<SearchInput/>)
})
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.mount = mount;
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, render } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.mount = mount;
global.render = render;
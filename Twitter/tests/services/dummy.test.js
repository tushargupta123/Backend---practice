import {execute} from "../../src/services/dummy-service.js";
import {helper} from "../../src/services/helper-service.js";

jest.mock('../../src/services/helper-service.js');

test('result is true and returns learning js',()=>{
    helper.mockReturnValue(true);
    const result = execute();
    expect(result).toBe('learning js');
})

test('result is false and returns learning react',()=>{
    helper.mockReturnValue(false);
    const result = execute();
    expect(result).toBe('learning react');
})
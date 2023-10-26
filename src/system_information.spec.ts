import { getAllData } from "systeminformation";
import { getSystemInformation } from "./system_information";

jest.mock("systeminformation", () => ({
  getAllData: jest.fn()
}));

describe('Testing getSystemInformation', () => {
  it('should return the sysinfo from our interface', async () => {

    // Act
    // const sysinfo = await getSystemInformation();
    console.log("TODO: implement a correct test");
    // Assert
    // expect(getAllData).toHaveBeenCalled();
    // console.log("Test Passed");
    // expect(sysinfo.cpu).toBeDefined();
    // expect(sysinfo.currentLoad).toBeDefined();
    // expect(sysinfo.diskLayout).toBeDefined();
    // expect(sysinfo.mem).toBeDefined();
    // expect(sysinfo.networkInterfaces).toBeDefined();
    // expect(sysinfo.os).toBeDefined();
    // expect(sysinfo.processes).toBeDefined();
    // expect(sysinfo.system).toBeDefined();
  });
});

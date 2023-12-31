import { Systeminformation, getAllData } from "systeminformation";
import { getSystemInformation } from "./system_information";

jest.mock("systeminformation");

const mockedGetAllData = getAllData as jest.MockedFunction<typeof getAllData>;


describe('Testing getSystemInformation', () => {
  beforeEach(() => {
    mockedGetAllData.mockClear();
  });

  it('should return the sysinfo from our interface', async () => {
    // Arrange
    const mockData: Awaited<ReturnType<typeof getAllData>> = {
      cpu: {},
      system: {},
      mem: {},
      os: {},
      currentLoad: {},
      processes: {},
      diskLayout: {},
      net: {}
    } as Awaited<ReturnType<typeof getAllData>>;
    mockedGetAllData.mockResolvedValue(mockData);
    // Act
    const sysinfo = await getSystemInformation();
    // console.log("TODO: implement a correct test");
    // Assert
    expect(mockedGetAllData).toHaveBeenCalled();
    // console.log("Test Passed");
    expect(sysinfo.cpu).toBeDefined();
    expect(sysinfo.currentLoad).toBeDefined();
    expect(sysinfo.diskLayout).toBeDefined();
    expect(sysinfo.mem).toBeDefined();
    expect(sysinfo.networkInterfaces).toBeDefined();
    expect(sysinfo.os).toBeDefined();
    expect(sysinfo.processes).toBeDefined();
    expect(sysinfo.system).toBeDefined();
  });
});

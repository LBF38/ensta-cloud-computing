import { Systeminformation, getAllData, system } from "systeminformation";

export interface ServerSysInfo {
  cpu: Systeminformation.CpuData;
  system: Systeminformation.SystemData;
  mem: Systeminformation.MemData;
  os: Systeminformation.OsData;
  currentLoad: Systeminformation.CurrentLoadData;
  processes: Systeminformation.ProcessesData[];
  diskLayout: Systeminformation.DiskLayoutData[];
  networkInterfaces: Systeminformation.NetworkInterfacesData[];
}


export async function getSystemInformation() {
  const sysinfo = await getAllData();
  const ServerSysInfo: ServerSysInfo = {
    cpu: sysinfo.cpu,
    system: sysinfo.system,
    mem: sysinfo.mem,
    os: sysinfo.os,
    currentLoad: sysinfo.currentLoad,
    processes: sysinfo.processes,
    diskLayout: sysinfo.diskLayout,
    networkInterfaces: sysinfo.net
  };
  return ServerSysInfo;
}

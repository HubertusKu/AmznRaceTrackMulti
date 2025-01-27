// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../Packages/Beckhoff.TwinCAT.HMI.Framework.14.2.110/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var HMI_Multi_IPC;
        (function (HMI_Multi_IPC) {
            function FunctionJS1(par1) {

            var hexString = par1.toString(16);
            console.log(hexString);
            return hexString;
            }
            HMI_Multi_IPC.FunctionJS1 = FunctionJS1;
        })(HMI_Multi_IPC = Functions.HMI_Multi_IPC || (Functions.HMI_Multi_IPC = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('FunctionJS1', 'TcHmi.Functions.HMI_Multi_IPC', TcHmi.Functions.HMI_Multi_IPC.FunctionJS1);

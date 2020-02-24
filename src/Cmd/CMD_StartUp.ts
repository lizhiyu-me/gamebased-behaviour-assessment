/**启动命令 */
class CMD_StartUp implements ISimpleCommand {
    static NAME: string = 'CMD_StartUp';
    execute(param) {
        //TODO 加载显示选择界面
        AppFacade.getInstance().registerMediator(OrderBoxMediator,OrderBoxScene);
       
    }
}